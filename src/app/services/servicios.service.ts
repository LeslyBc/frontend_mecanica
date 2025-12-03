import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from '../models/servicio.model';

@Injectable({
    providedIn: 'root'
})
export class ServiciosService {
    private url = 'http://localhost:3600';

    constructor(private _http: HttpClient) { }

    saveService(service: Servicio): Observable<any> {
        return this._http.post(this.url + '/enviarDatosServicio', service);
    }

    uploadPhoto(file: File, id: string): Observable<any> {
        const formData = new FormData();
        formData.append('foto', file);
        return this._http.post(this.url + '/subirFoto/' + id, formData);
    }
}
