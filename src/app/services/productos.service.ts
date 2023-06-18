import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise( ( resolve, reject ) => {

      // Se agrega <ProductoInterface[]> antes de la URL en el método get para
      // indicar que esperamos una matriz de ProductoInterface como respuesta.
      this.http.get<ProductoInterface[]>('https://angular-fh-5b2ac-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: ProductoInterface[]) => {
        // console.log(resp);
        this.productos = resp;

        setTimeout( () => {
          this.cargando = false; //Luego de 2s desaparece el "Cargando..."
          resolve(this.productos);
        }, 1000);

      });
    });
  }
}
