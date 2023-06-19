import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  producto?: ProductoDescripcion;
  id?: string;

  constructor ( private route: ActivatedRoute,
                public productosService: ProductosService ) { }

  ngOnInit() {
    this.route.params
        .subscribe( params => {
          this.productosService.getProducto( params['id'] )
              .subscribe( (producto: any) => {
                this.id = params['id'];
                this.producto = producto;
              });
        });
  }

}
