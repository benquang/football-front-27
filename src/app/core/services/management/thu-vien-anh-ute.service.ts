// File demo. Move the real file to core/services/.../

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IPagedResults } from '@models/common/response-data.model';
import { IThuVienAnhUte } from '@models/management/thu-vien-anh-ute.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThuVienAnhUteService {

  private apiUrl = UrlConstant.API.DEMO_API;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<IThuVienAnhUte[]> {
    return this.http.get<IThuVienAnhUte[]>(this.apiUrl);
  }

  getById(id: string): Observable<IThuVienAnhUte[]> {
    return this.http.get<IThuVienAnhUte[]>(this.apiUrl + `/${id}`);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string): Observable<IPagedResults<IThuVienAnhUte>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', search ?? '')
      .set('sort', sort ?? '')
      .set('column', column ?? '');

    return this.http.get<IPagedResults<IThuVienAnhUte>>(this.apiUrl + '/filter', { params });
  }

  create(model: Partial<IThuVienAnhUte>): Observable<IThuVienAnhUte> {
    return this.http.post<IThuVienAnhUte>(this.apiUrl, model);
  }

  update(model: Partial<IThuVienAnhUte>, id: string): Observable<IThuVienAnhUte> {
    return this.http.put<IThuVienAnhUte>(this.apiUrl + `/${id}`, model);
  }

  delete(id: string): Observable<IThuVienAnhUte> {
    return this.http.delete<IThuVienAnhUte>(this.apiUrl + `/${id}`);
  }
}
