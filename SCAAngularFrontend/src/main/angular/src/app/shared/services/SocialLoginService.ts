import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {SocialUser} from "../models/SocialUser";

@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {
  url;

  constructor(private http: HttpClient) {
  }

  saveUser(socialUser: SocialUser) {


    return this.http.post(this.url, socialUser);

  }

}
