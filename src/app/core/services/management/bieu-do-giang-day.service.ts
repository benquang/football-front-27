import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IPagedResults } from '@models/common/response-data.model';
import { IBieuDoGiangDay } from '@models/management/bieu-do-giang-day.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BieuDoGiangDayService {

  private apiUrl = UrlConstant.API.DEMO_API;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<IBieuDoGiangDay[]> {
    return this.http.get<IBieuDoGiangDay[]>(this.apiUrl);
  }

  getById(id: string): Observable<IBieuDoGiangDay[]> {
    return this.http.get<IBieuDoGiangDay[]>(this.apiUrl + `/${id}`);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string): Observable<IPagedResults<IBieuDoGiangDay>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', search ?? '')
      .set('sort', sort ?? '')
      .set('column', column ?? '');

    return this.http.get<IPagedResults<IBieuDoGiangDay>>(this.apiUrl + '/filter', { params });
  }

  create(model: Partial<IBieuDoGiangDay>): Observable<IBieuDoGiangDay> {
    return this.http.post<IBieuDoGiangDay>(this.apiUrl, model);
  }

  update(model: Partial<IBieuDoGiangDay>, id: string): Observable<IBieuDoGiangDay> {
    return this.http.put<IBieuDoGiangDay>(this.apiUrl + `/${id}`, model);
  }

  delete(id: string): Observable<IBieuDoGiangDay> {
    return this.http.delete<IBieuDoGiangDay>(this.apiUrl + `/${id}`);
  }
}
