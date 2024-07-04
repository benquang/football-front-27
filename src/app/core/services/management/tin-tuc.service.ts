import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IPagedResults } from '@models/common/response-data.model';
import { ITinTuc } from '@models/management/tin-tuc.model';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TinTucService {

  private apiUrl = UrlConstant.API.DEMO_API;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<ITinTuc[]> {
    return this.http.get<ITinTuc[]>(this.apiUrl);
  }

  getById(id: string): Observable<ITinTuc[]> {
    return this.http.get<ITinTuc[]>(this.apiUrl + `/${id}`);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string): Observable<IPagedResults<ITinTuc>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', search ?? '')
      .set('sort', sort ?? '')
      .set('column', column ?? '');

    return this.http.get<IPagedResults<ITinTuc>>(this.apiUrl + '/filter', { params });
  }

  create(model: Partial<ITinTuc>): Observable<ITinTuc> {
    return this.http.post<ITinTuc>(this.apiUrl, model);
  }

  update(model: Partial<ITinTuc>, id: string): Observable<ITinTuc> {
    return this.http.put<ITinTuc>(this.apiUrl + `/${id}`, model);
  }

  delete(id: string): Observable<ITinTuc> {
    return this.http.delete<ITinTuc>(this.apiUrl + `/${id}`);
  }
}
