import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environmentLocal} from "../../../environments/environment.local";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  host = environmentLocal.SCAAnalyserService.host;
  port = environmentLocal.SCAAnalyserService.port;


  constructor(private http: HttpClient) {
  }

  submitAll(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(this.host + "/analyze", formData, {
      reportProgress: true,
      observe: 'events'
    })
  }
}
