import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IPagedResults } from '@models/common/response-data.model';
import { IChuongTrinhDaoTao } from '@models/management/chuong-trinh-dao-tao.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChuongTrinhDaoTaoService {
  private apiUrl = UrlConstant.API.DEMO_API;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<IChuongTrinhDaoTao[]> {
    return this.http.get<IChuongTrinhDaoTao[]>(this.apiUrl);
  }

  getById(id: string): Observable<IChuongTrinhDaoTao[]> {
    return this.http.get<IChuongTrinhDaoTao[]>(this.apiUrl + `/${id}`);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string): Observable<IPagedResults<IChuongTrinhDaoTao>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', search ?? '')
      .set('sort', sort ?? '')
      .set('column', column ?? '');

    return this.http.get<IPagedResults<IChuongTrinhDaoTao>>(this.apiUrl + '/filter', { params });
  }

  create(model: Partial<IChuongTrinhDaoTao>): Observable<IChuongTrinhDaoTao> {
    return this.http.post<IChuongTrinhDaoTao>(this.apiUrl, model);
  }

  update(model: Partial<IChuongTrinhDaoTao>, id: string): Observable<IChuongTrinhDaoTao> {
    return this.http.put<IChuongTrinhDaoTao>(this.apiUrl + `/${id}`, model);
  }

  delete(id: string): Observable<IChuongTrinhDaoTao> {
    return this.http.delete<IChuongTrinhDaoTao>(this.apiUrl + `/${id}`);
  }
}
