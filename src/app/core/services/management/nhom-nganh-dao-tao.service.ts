import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IPagedResults } from '@models/common/response-data.model';
import { INhomNganhDaoTao } from '@models/management/nhom-nganh-dao-tao.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NhomNganhDaoTaoService {

  private apiUrl = UrlConstant.API.DEMO_API;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<INhomNganhDaoTao[]> {
    return this.http.get<INhomNganhDaoTao[]>(this.apiUrl);
  }

  getById(id: string): Observable<INhomNganhDaoTao[]> {
    return this.http.get<INhomNganhDaoTao[]>(this.apiUrl + `/${id}`);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string): Observable<IPagedResults<INhomNganhDaoTao>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', search ?? '')
      .set('sort', sort ?? '')
      .set('column', column ?? '');

    return this.http.get<IPagedResults<INhomNganhDaoTao>>(this.apiUrl + '/filter', { params });
  }

  create(model: Partial<INhomNganhDaoTao>): Observable<INhomNganhDaoTao> {
    return this.http.post<INhomNganhDaoTao>(this.apiUrl, model);
  }

  update(model: Partial<INhomNganhDaoTao>, id: string): Observable<INhomNganhDaoTao> {
    return this.http.put<INhomNganhDaoTao>(this.apiUrl + `/${id}`, model);
  }

  delete(id: string): Observable<INhomNganhDaoTao> {
    return this.http.delete<INhomNganhDaoTao>(this.apiUrl + `/${id}`);
  }
}
