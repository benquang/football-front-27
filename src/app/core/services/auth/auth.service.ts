import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SystemConstant } from '@constants/system.constant';
import { UrlConstant } from '@constants/url.constant';
import langDataEn from '@languages/en.json';
import langDataVi from '@languages/vi.json';
import {
  IAuthData, ILoginDTO,
  IRegisterDTO, IResetPasswordDTO, IResetPasswordRequsetDTO,
} from '@models/auth/auth.model';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Ngon ngu hien thi //////////
  private langData: Record<string, string> = (localStorage.getItem('language') === 'en' ? langDataEn : langDataVi).CORE.AUTH;
  //////////////////////////////

  private apiUrl = UrlConstant.API.LOGIN_ADMIN;

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
  ) { }


  /************************************
   *             Common
   ************************************/

  // Remember to turn on People API
  // getGoogleUserData(accessToken: string): Observable<IPeopleGoogle> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       // eslint-disable-next-line @typescript-eslint/naming-convention
  //       'Content-Type': 'application/json',
  //       authorization: 'Bearer ' + accessToken
  //     })
  //   };
  //   return this.http.get<IPeopleGoogle>(UrlConstant.API.GOOGLE_PEOPLE, httpOptions);
  // }

  getNameOfLogin(): string {
    const tmp = localStorage.getItem(SystemConstant.CURRENT_INFO);
    if (tmp) {
      return JSON.parse(tmp)?.fullName;
    } else {
      return '';
    }
  }

  getAvatarOfLogin(): string {
    const tmp = localStorage.getItem(SystemConstant.CURRENT_INFO);
    if (tmp) {
      return JSON.parse(tmp)?.avatar;
    } else {
      return '';
    }
  }

  doLogout(): void {
    this.cookie.delete(SystemConstant.CURRENT_INFO, '/', undefined, true, 'Strict');
    localStorage.removeItem(SystemConstant.CURRENT_INFO);
    localStorage.removeItem(SystemConstant.CURRENT_INFO_GOOGLE);
    window.location.assign('../');
  }



  /************************************
   *         Login Function
   ************************************/
  doLoginGoogle(token: string): Observable<IAuthData> {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        accessToken: token,
      }),
    };
    return this.http.post<IAuthData>(this.apiUrl + `/google`, null, httpOptions);
  }

  doLoginForm(model: Partial<ILoginDTO>): Observable<IAuthData> {
    return this.http.post<IAuthData>(this.apiUrl, model);
  }




  /************************************
   *        Register Function
   ************************************/
  doRegisterForm(role: string, model: Partial<IRegisterDTO>): Observable<{ message: string; }> {
    switch (role) {
      case SystemConstant.ROLE.STUDENT:
        return this.http
          .post<{ message: string; }>(this.apiUrl + '/register', model);
      default:
        return of({ message: this.langData.TAI_KHOAN_KHONG_HO_TRO });
    }
  }




  /************************************
   *       Reset Pass Function
   ************************************/
  doResetPasswordRequest(role: string, model: Partial<IResetPasswordRequsetDTO>): Observable<{ message: string; }> {
    switch (role) {
      case SystemConstant.ROLE.STUDENT:
        return this.http
          .post<{ message: string; }>(this.apiUrl + '/forgot-password', model);
      default:
        return of({ message: this.langData.TAI_KHOAN_KHONG_HO_TRO });
    }
  }

  doResetPasswordUpdate(
    role: string,
    model: Partial<IResetPasswordDTO>,
    token: string): Observable<{ message: string; }> {
    switch (role) {
      case SystemConstant.ROLE.STUDENT:
        return this.http
          .post<{ message: string; }>(this.apiUrl + '/reset-password', model, { headers: new HttpHeaders().append('thiSinhId', token) });
      default:
        return of({ message: this.langData.TAI_KHOAN_KHONG_HO_TRO });
    }
  }





  /************************************
   *       Processing Auth Data
   ************************************/
  getAuthData(): IAuthData | null {
    const tmp = localStorage.getItem(SystemConstant.CURRENT_INFO);
    if (tmp) {
      return JSON.parse(tmp);
    } else {
      return null;
    }
  }

  setAuthData(model: IAuthData): void {
    localStorage.setItem(
      SystemConstant.CURRENT_INFO,
      JSON.stringify(model),
    );
  }

  getToken(): string {
    return this.cookie.get(SystemConstant.CURRENT_INFO) ?? '';
  }

  setToken(token: string): void {
    this.cookie.set(SystemConstant.CURRENT_INFO, token, new Date(Date.now() + 43200000), '/', undefined, true, 'Strict');
  }



  /************************************
   *           Check role
   ************************************/
  checkRole(roleCheck: string): boolean {
    const auth = this.getAuthData();
    if (auth) {
      let role: string[] = [];
      role = auth.roles?.filter(item => item === roleCheck) ?? [];
      if (role.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

}
