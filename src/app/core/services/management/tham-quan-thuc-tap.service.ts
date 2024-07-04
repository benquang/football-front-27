import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IPagedResults } from '@models/common/response-data.model';
import { IThamQuanThucTap } from '@models/management/tham-quan-thuc-tap.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThamQuanThucTapService {
  private apiUrl = UrlConstant.API.DEMO_API;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<IThamQuanThucTap[]> {
    return this.http.get<IThamQuanThucTap[]>(this.apiUrl);
  }

  getById(id: string): Observable<IThamQuanThucTap[]> {
    return this.http.get<IThamQuanThucTap[]>(this.apiUrl + `/${id}`);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string): Observable<IPagedResults<IThamQuanThucTap>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', search ?? '')
      .set('sort', sort ?? '')
      .set('column', column ?? '');

    return this.http.get<IPagedResults<IThamQuanThucTap>>(this.apiUrl + '/filter', { params });
  }

  create(model: Partial<IThamQuanThucTap>): Observable<IThamQuanThucTap> {
    return this.http.post<IThamQuanThucTap>(this.apiUrl, model);
  }

  update(model: Partial<IThamQuanThucTap>, id: string): Observable<IThamQuanThucTap> {
    return this.http.put<IThamQuanThucTap>(this.apiUrl + `/${id}`, model);
  }

  delete(id: string): Observable<IThamQuanThucTap> {
    return this.http.delete<IThamQuanThucTap>(this.apiUrl + `/${id}`);
  }
}
