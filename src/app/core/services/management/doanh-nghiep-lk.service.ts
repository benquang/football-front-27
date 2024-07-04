import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IPagedResults } from '@models/common/response-data.model';
import { IDoanhNghiepLk } from '@models/management/doanh-nghiep-lk.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DoanhNghiepLkService {
  private apiUrl = UrlConstant.API.DEMO_API;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<IDoanhNghiepLk[]> {
    return this.http.get<IDoanhNghiepLk[]>(this.apiUrl);
  }

  getById(id: string): Observable<IDoanhNghiepLk[]> {
    return this.http.get<IDoanhNghiepLk[]>(this.apiUrl + `/${id}`);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string): Observable<IPagedResults<IDoanhNghiepLk>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', search ?? '')
      .set('sort', sort ?? '')
      .set('column', column ?? '');

    return this.http.get<IPagedResults<IDoanhNghiepLk>>(this.apiUrl + '/filter', { params });
  }

  create(model: Partial<IDoanhNghiepLk>): Observable<IDoanhNghiepLk> {
    return this.http.post<IDoanhNghiepLk>(this.apiUrl, model);
  }

  update(model: Partial<IDoanhNghiepLk>, id: string): Observable<IDoanhNghiepLk> {
    return this.http.put<IDoanhNghiepLk>(this.apiUrl + `/${id}`, model);
  }

  delete(id: string): Observable<IDoanhNghiepLk> {
    return this.http.delete<IDoanhNghiepLk>(this.apiUrl + `/${id}`);
  }
}
