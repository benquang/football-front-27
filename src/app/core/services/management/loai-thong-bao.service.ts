import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IPagedResults } from '@models/common/response-data.model';
import { ILoaiThongBao } from '@models/management/loai-thong-bao.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaiThongBaoService {

  private apiUrl = UrlConstant.API.DEMO_API;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<ILoaiThongBao[]> {
    return this.http.get<ILoaiThongBao[]>(this.apiUrl);
  }

  getById(id: string): Observable<ILoaiThongBao[]> {
    return this.http.get<ILoaiThongBao[]>(this.apiUrl + `/${id}`);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string): Observable<IPagedResults<ILoaiThongBao>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', search ?? '')
      .set('sort', sort ?? '')
      .set('column', column ?? '');

    return this.http.get<IPagedResults<ILoaiThongBao>>(this.apiUrl + '/filter', { params });
  }

  create(model: Partial<ILoaiThongBao>): Observable<ILoaiThongBao> {
    return this.http.post<ILoaiThongBao>(this.apiUrl, model);
  }

  update(model: Partial<ILoaiThongBao>, id: string): Observable<ILoaiThongBao> {
    return this.http.put<ILoaiThongBao>(this.apiUrl + `/${id}`, model);
  }

  delete(id: string): Observable<ILoaiThongBao> {
    return this.http.delete<ILoaiThongBao>(this.apiUrl + `/${id}`);
  }
}
