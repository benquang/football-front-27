import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IPagedResults } from '@models/common/response-data.model';
import { ITaiSaoChonUte } from '@models/tai-sao-chon-ute/tai-sao-chon-ute';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaiSaoChonUteService {

  private apiUrl = UrlConstant.API.DEMO_API;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<ITaiSaoChonUte[]> {
    return this.http.get<ITaiSaoChonUte[]>(this.apiUrl);
  }

  getById(id: string): Observable<ITaiSaoChonUte[]> {
    return this.http.get<ITaiSaoChonUte[]>(this.apiUrl + `/${id}`);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string): Observable<IPagedResults<ITaiSaoChonUte>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', search ?? '')
      .set('sort', sort ?? '')
      .set('column', column ?? '');

    return this.http.get<IPagedResults<ITaiSaoChonUte>>(this.apiUrl + '/filter', { params });
  }

  create(model: Partial<ITaiSaoChonUte>): Observable<ITaiSaoChonUte> {
    return this.http.post<ITaiSaoChonUte>(this.apiUrl, model);
  }

  update(model: Partial<ITaiSaoChonUte>, id: string): Observable<ITaiSaoChonUte> {
    return this.http.put<ITaiSaoChonUte>(this.apiUrl + `/${id}`, model);
  }

  delete(id: string): Observable<ITaiSaoChonUte> {
    return this.http.delete<ITaiSaoChonUte>(this.apiUrl + `/${id}`);
  }
}
