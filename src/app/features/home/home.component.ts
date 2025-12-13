import { Component } from '@angular/core';
import { ProductCardVertical } from '../../shared/components/product-card-vertical/product-card-vertical';
import { ProductCardHorizontal } from '../../shared/components/product-card-horizontal/product-card-horizontal';

@Component({
  selector: 'app-home',
  imports: [ProductCardVertical, ProductCardHorizontal],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
