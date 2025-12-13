import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Inicio - Perfume Shop',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products.component').then(
        (m) => m.ProductsComponent
      ),
    title: 'Productos - Perfume Shop',
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./features/products-detail/products-detail.component').then(
        (m) => m.ProductsDetailComponent
      ),
    title: 'Detalle - Perfume Shop',
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.component').then((m) => m.CartComponent),
    title: 'Carrito - Perfume Shop',
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
