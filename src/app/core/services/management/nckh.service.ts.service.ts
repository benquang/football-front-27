import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IPagedResults } from '@models/common/response-data.model';
import { INckh } from '@models/management/nckh.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NckhService {
  private apiUrl = UrlConstant.API.DEMO_API;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<INckh[]> {
    return this.http.get<INckh[]>(this.apiUrl);
  }

  getById(id: string): Observable<INckh[]> {
    return this.http.get<INckh[]>(this.apiUrl + `/${id}`);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string): Observable<IPagedResults<INckh>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', search ?? '')
      .set('sort', sort ?? '')
      .set('column', column ?? '');

    return this.http.get<IPagedResults<INckh>>(this.apiUrl + '/filter', { params });
  }

  create(model: Partial<INckh>): Observable<INckh> {
    return this.http.post<INckh>(this.apiUrl, model);
  }

  update(model: Partial<INckh>, id: string): Observable<INckh> {
    return this.http.put<INckh>(this.apiUrl + `/${id}`, model);
  }

  delete(id: string): Observable<INckh> {
    return this.http.delete<INckh>(this.apiUrl + `/${id}`);
  }
}
