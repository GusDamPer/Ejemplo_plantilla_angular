import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}; //InfoPagina es el nombre de la interface
  cargada = false;

  constructor( private http: HttpClient ) {

    this.cargarInfo();

  }

  private cargarInfo() {
    // Leer el archivo JSON, se agrega en los imports de app.module
    this.http.get('assets/data/data-pagina.json') //definición de dónde esta la informacion
      .subscribe( (resp: InfoPagina) => {         //no se ejecuta hasta que no haga un subscribe

        this.cargada = true;
        this.info = resp;

      });
  }

}
