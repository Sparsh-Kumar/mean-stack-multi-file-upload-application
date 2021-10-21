
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError} from 'rxjs';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private _http: HttpClient) { }

  uploadFiles (files: File []) {
    let formData = new FormData;
    for (let i = 0;i < files.length;i++) {
      formData.append ('files', files [i]);
    }
    return this._http.post (`${environment.API}/upload-files`, formData);
  }

  listFiles () {
    return this._http.get (`${environment.API}/list-images`);
  }

}
