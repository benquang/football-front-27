import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '@constants/url.constant';
import { IPagedResults } from '@models/common/response-data.model';
import { IBannerSlide } from '@models/home-banner-slide/banner-slide.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerSlideService {

  private apiUrl = UrlConstant.API.DEMO_API;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<IBannerSlide[]> {
    return this.http.get<IBannerSlide[]>(this.apiUrl);
  }

  getById(id: string): Observable<IBannerSlide[]> {
    return this.http.get<IBannerSlide[]>(this.apiUrl + `/${id}`);
  }

  getAllPaging(
    page: number,
    size: number,
    search?: string,
    sort?: string,
    column?: string): Observable<IPagedResults<IBannerSlide>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('search', search ?? '')
      .set('sort', sort ?? '')
      .set('column', column ?? '');

    return this.http.get<IPagedResults<IBannerSlide>>(this.apiUrl + '/filter', { params });
  }

  create(model: Partial<IBannerSlide>): Observable<IBannerSlide> {
    return this.http.post<IBannerSlide>(this.apiUrl, model);
  }

  update(model: Partial<IBannerSlide>, id: string): Observable<IBannerSlide> {
    return this.http.put<IBannerSlide>(this.apiUrl + `/${id}`, model);
  }

  delete(id: string): Observable<IBannerSlide> {
    return this.http.delete<IBannerSlide>(this.apiUrl + `/${id}`);
  }
}
