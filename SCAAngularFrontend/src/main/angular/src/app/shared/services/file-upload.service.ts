import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  host = environment.SCAAnalyserService.host;
  port = environment.SCAAnalyserService.port;


  constructor(private http: HttpClient) {
  }

  submitAll(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(this.host + ":" + this.port + "/analyze", formData, {
      reportProgress: true,
      observe: 'events'
    })
  }
}
