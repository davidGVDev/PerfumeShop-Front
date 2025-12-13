import { Component } from '@angular/core';
import { ProductCardHorizontal } from '../../shared/components/product-card-horizontal/product-card-horizontal';
import { ProductCardVertical } from '../../shared/components/product-card-vertical/product-card-vertical';

@Component({
  selector: 'app-products',
  imports: [ProductCardVertical, ProductCardHorizontal],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {

}
