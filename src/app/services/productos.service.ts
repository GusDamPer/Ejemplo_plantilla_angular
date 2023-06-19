import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] = [];
  productosFiltrado: ProductoInterface[] = [];

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

  getProducto( id: string ) {

    return this.http.get<ProductoDescripcion[]>(`https://angular-fh-5b2ac-default-rtdb.firebaseio.com/productos/${ id }.json`);
    // se usan backticks para insertar ${expresiones} dentro de un string
  }

  buscarProducto( termino: string ){

    if ( this.productos.length === 0 ){
      //cargar productos
      this.cargarProductos().then(()=> {
        // ejecutar despues de tener los productos
        // Aplicar filtro
        this.filtrarProductos( termino );
      });
    } else {
      //aplicar el filtro
      this.filtrarProductos( termino );
    }
  }

  private filtrarProductos( termino: string ){

    // console.log( this.productos );
    this.productosFiltrado = [];

    termino = termino.toLowerCase();

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0){
        this.productosFiltrado.push( prod );
      }
    });

  }
}
