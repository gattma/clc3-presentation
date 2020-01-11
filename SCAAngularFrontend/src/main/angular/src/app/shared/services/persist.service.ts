import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Image, ImgWithUser} from "../models/Image";
import {Configuration} from "../../configuration/configuration";
import {SocialUser} from "../models/SocialUser";

@Injectable({
  providedIn: 'root'
})
export class PersistService {
  host = environment.SCAPersistService.host;
  port = environment.SCAPersistService.port;

  user: SocialUser = JSON.parse(localStorage.getItem(Configuration.user.STORAGE));



  constructor(private http: HttpClient) {
  }

  persist(image: Image) {
    let imgWithUser: ImgWithUser = new ImgWithUser(image, this.user.id);

    console.log(imgWithUser);
    return this.http.post(this.host + ":" + this.port + "/model", imgWithUser, {

      reportProgress: true,
      observe: 'events'
    })
  }

  getAll() {
    return this.http.get(this.host + ":" + this.port + "/model/" + this.user.id);
  }
}
