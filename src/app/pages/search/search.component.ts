import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor( private route: ActivatedRoute, //para recibir el argumento
               public productoService: ProductosService ) {}

  ngOnInit(){
    this.route.params
      .subscribe( params => {
          console.log(params['termino']);
          this.productoService.buscarProducto( params['termino']);
    });
  }
}
