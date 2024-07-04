import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IPagedResults } from '@models/common/response-data.model';
import { IThongBao } from '@models/management/thong-bao.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThongBaoService {

  private apiUrl = UrlConstant.API.DEMO_API;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<IThongBao[]> {
    return this.http.get<IThongBao[]>(this.apiUrl);
  }

  getById(id: string): Observable<IThongBao[]> {
    return this.http.get<IThongBao[]>(this.apiUrl + `/${id}`);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string): Observable<IPagedResults<IThongBao>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', search ?? '')
      .set('sort', sort ?? '')
      .set('column', column ?? '');

    return this.http.get<IPagedResults<IThongBao>>(this.apiUrl + '/filter', { params });
  }

  create(model: Partial<IThongBao>): Observable<IThongBao> {
    return this.http.post<IThongBao>(this.apiUrl, model);
  }

  update(model: Partial<IThongBao>, id: string): Observable<IThongBao> {
    return this.http.put<IThongBao>(this.apiUrl + `/${id}`, model);
  }

  delete(id: string): Observable<IThongBao> {
    return this.http.delete<IThongBao>(this.apiUrl + `/${id}`);
  }
}
