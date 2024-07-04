import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IPagedResults } from '@models/common/response-data.model';
import { ICuuSinhVien } from '@models/management/cuu-sinh-vien.model';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CuuSinhVienService {

  private apiUrl = UrlConstant.API.DEMO_API;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<ICuuSinhVien[]> {
    return this.http.get<ICuuSinhVien[]>(this.apiUrl);
  }

  getById(id: string): Observable<ICuuSinhVien[]> {
    return this.http.get<ICuuSinhVien[]>(this.apiUrl + `/${id}`);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string): Observable<IPagedResults<ICuuSinhVien>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', search ?? '')
      .set('sort', sort ?? '')
      .set('column', column ?? '');

    return this.http.get<IPagedResults<ICuuSinhVien>>(this.apiUrl + '/filter', { params });
  }

  create(model: Partial<ICuuSinhVien>): Observable<ICuuSinhVien> {
    return this.http.post<ICuuSinhVien>(this.apiUrl, model);
  }

  update(model: Partial<ICuuSinhVien>, id: string): Observable<ICuuSinhVien> {
    return this.http.put<ICuuSinhVien>(this.apiUrl + `/${id}`, model);
  }

  delete(id: string): Observable<ICuuSinhVien> {
    return this.http.delete<ICuuSinhVien>(this.apiUrl + `/${id}`);
  }
}
