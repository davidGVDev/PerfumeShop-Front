import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

// Shared - Product Card Vertical
import { ProductCardVertical } from '../../shared/components/product-card-vertical/product-card-vertical';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatIconModule, ProductCardVertical],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // Mock data para probar
  products = [
    { id: 1, name: 'Sauvage', brand: 'Dior', price: 120 },
    { id: 2, name: 'Bleu', brand: 'Chanel', price: 150 },
    { id: 3, name: 'Eros', brand: 'Versace', price: 95 },
    { id: 4, name: 'Acqua di Gio', brand: 'Armani', price: 110 },
    { id: 5, name: 'La Vie Est Belle', brand: 'Lancôme', price: 130 },
    { id: 6, name: '1 Million', brand: 'Paco Rabanne', price: 85 },
  ];

  // Carousel state
  currentIndex = 0;
  itemsVisible = 4; // Número de items visibles
  
  // Calcular el desplazamiento en porcentaje
  get translateX(): number {
    return -this.currentIndex * (100 / this.itemsVisible);
  }

  nextSlide(): void {
    const maxIndex = this.products.length - this.itemsVisible;
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop al inicio
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.products.length - this.itemsVisible; // Loop al final
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = Math.min(index, this.products.length - this.itemsVisible);
  }
}
