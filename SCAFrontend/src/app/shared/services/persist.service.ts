import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AnalyzeFile} from "../models/AnalyzeFile";

@Injectable({
  providedIn: 'root'
})
export class PersistService {
  host = environment.SCAPersistService.host;
  port = environment.SCAPersistService.port;


  constructor(private http: HttpClient) {
  }

  persist(analyzeFile: AnalyzeFile) {
    return this.http.post(this.host + ":" + this.port + "/model", analyzeFile, {
      reportProgress: true,
      observe: 'events'
    })
  }
}
