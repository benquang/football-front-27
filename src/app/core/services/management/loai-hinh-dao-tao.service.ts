import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IPagedResults } from '@models/common/response-data.model';
import { ILoaiHinhDaoTao } from '@models/management/loai-hinh-dao-tao.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaiHinhDaoTaoService {
  private apiUrl = UrlConstant.API.DEMO_API;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<[ILoaiHinhDaoTao]> {
    return this.http.get<[ILoaiHinhDaoTao]>(this.apiUrl);
  }

  getById(id: string): Observable<[ILoaiHinhDaoTao]> {
    return this.http.get<[ILoaiHinhDaoTao]>(this.apiUrl + `/${id}`);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string): Observable<IPagedResults<ILoaiHinhDaoTao>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', search ?? '')
      .set('sort', sort ?? '')
      .set('column', column ?? '');

    return this.http.get<IPagedResults<ILoaiHinhDaoTao>>(this.apiUrl + '/filter', { params });
  }

  create(model: Partial<ILoaiHinhDaoTao>): Observable<ILoaiHinhDaoTao> {
    return this.http.post<ILoaiHinhDaoTao>(this.apiUrl, model);
  }

  update(model: Partial<ILoaiHinhDaoTao>, id: string): Observable<ILoaiHinhDaoTao> {
    return this.http.put<ILoaiHinhDaoTao>(this.apiUrl + `/${id}`, model);
  }

  delete(id: string): Observable<ILoaiHinhDaoTao> {
    return this.http.delete<ILoaiHinhDaoTao>(this.apiUrl + `/${id}`);
  }
}
