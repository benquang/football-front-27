import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IPagedResults } from '@models/common/response-data.model';
import { ISuKien } from '@models/management/su-kien.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuKienService {
  private apiUrl = UrlConstant.API.DEMO_API;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<ISuKien[]> {
    return this.http.get<ISuKien[]>(this.apiUrl);
  }

  getById(id: string): Observable<ISuKien[]> {
    return this.http.get<ISuKien[]>(this.apiUrl + `/${id}`);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string): Observable<IPagedResults<ISuKien>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', search ?? '')
      .set('sort', sort ?? '')
      .set('column', column ?? '');

    return this.http.get<IPagedResults<ISuKien>>(this.apiUrl + '/filter', { params });
  }

  create(model: Partial<ISuKien>): Observable<ISuKien> {
    return this.http.post<ISuKien>(this.apiUrl, model);
  }

  update(model: Partial<ISuKien>, id: string): Observable<ISuKien> {
    return this.http.put<ISuKien>(this.apiUrl + `/${id}`, model);
  }

  delete(id: string): Observable<ISuKien> {
    return this.http.delete<ISuKien>(this.apiUrl + `/${id}`);
  }
}
