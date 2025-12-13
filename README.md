<p align="center">
  <img src="https://placehold.co/400x100/1e7883/white?text=Perfume+Shop" alt="Perfume Shop Logo" width="400"/>
</p>

<h1 align="center">🌸 Perfume Shop - Frontend</h1>

<p align="center">
  <strong>A modern e-commerce platform for premium perfumes and decants</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#roadmap">Roadmap</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-20.3.0-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular"/>
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Angular_Material-20.2-757575?style=for-the-badge&logo=angular&logoColor=white" alt="Angular Material"/>
  <img src="https://img.shields.io/badge/SCSS-Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS"/>
</p>

---

## 📸 Screenshots

<p align="center">
  <img src="https://placehold.co/800x400/f5f5f5/1e7883?text=Homepage+Preview" alt="Homepage" width="80%"/>
</p>

<p align="center">
  <em>Homepage with featured products and categories</em>
</p>

---

## ✨ Features

### 🛒 E-commerce Core
- **Product Catalog** - Browse perfumes with advanced filtering
- **Product Details** - View fragrance notes, accords, and performance data
- **Shopping Cart** - Add products with different sizes (decants/full bottles)
- **User Authentication** - Login, register, and Google Sign-In
- **Order Management** - Track purchases and order history

### 🎨 User Experience
- **Responsive Design** - Mobile-first approach
- **Custom Theme** - Elegant color palette (Teal, Sage, Coral)
- **Smooth Animations** - Hover effects and transitions
- **Accessibility** - ARIA labels and semantic HTML

### 🔍 Search & Filtering
- **Smart Search** - Search by name, brand, notes
- **Multiple Filters** - Gender, brand, price range, season, occasion
- **Sorting Options** - Price, rating, newest arrivals

---

## 🛠️ Tech Stack

### Frontend Framework
| Technology | Version | Description |
|------------|---------|-------------|
| **Angular** | 20.3.0 | Modern web framework with signals and standalone components |
| **TypeScript** | 5.9.2 | Type-safe JavaScript |
| **RxJS** | 7.8.0 | Reactive programming library |

### UI & Styling
| Technology | Description |
|------------|-------------|
| **Angular Material** | Material Design 3 components |
| **SCSS** | CSS preprocessor with variables and mixins |
| **Phosphor Icons** | Beautiful icon library |
| **Custom Theme** | CSS variables with full color palette |

### State Management
| Approach | Description |
|----------|-------------|
| **Angular Signals** | Modern reactive state management |
| **Computed Signals** | Derived state calculations |

---

## 🏗️ Architecture

This project follows a **scalable, feature-based architecture** designed for maintainability and performance.

```
src/app/
├── core/                    # Singleton services and guards
│   ├── guards/              # Route guards (auth, etc.)
│   ├── interceptors/        # HTTP interceptors
│   └── services/            # Global services
│
├── features/                # Feature modules (lazy loaded)
│   ├── home/                # Homepage
│   ├── products/            # Product listing
│   ├── products-detail/     # Product details page
│   └── cart/                # Shopping cart
│
├── shared/                  # Reusable components
│   ├── components/          # Header, Footer, Cards, etc.
│   ├── directives/          # Custom directives
│   └── pipes/               # Custom pipes
│
├── models/                  # TypeScript interfaces
│   ├── product.model.ts     # Product, Gender, Longevity types
│   ├── user.model.ts        # User, Address, Auth types
│   ├── cart.model.ts        # Cart, CartItem types
│   ├── order.model.ts       # Order, OrderStatus types
│   └── filter.model.ts      # ProductFilters, Pagination
│
├── styles/                  # Global styles
│   ├── _theme.scss          # Color palettes
│   └── _fonts.scss          # Typography
│
└── environments/            # Environment configs
```

### Key Architectural Decisions

- **Standalone Components** - No NgModules, cleaner code
- **Lazy Loading** - Routes load on demand for better performance
- **Signals** - Modern state management replacing BehaviorSubjects
- **OnPush Change Detection** - Optimized rendering
- **Feature-based Structure** - Easy to scale and maintain

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x
- **Angular CLI** >= 20.x

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/front-perfume-shop.git

# Navigate to project directory
cd front-perfume-shop

# Install dependencies
npm install

# Start development server
npm start
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server at `http://localhost:4200` |
| `npm run build` | Build for production |
| `npm run watch` | Build with watch mode |
| `npm test` | Run unit tests with Karma |

---

## 📁 Project Structure

### Models Overview

| Model | Description | Key Types |
|-------|-------------|-----------|
| `product.model.ts` | Fragrance data structure | `Product`, `Gender`, `Longevity`, `Sillage` |
| `product-variant.model.ts` | Size variants | `ProductVariant`, `VariantType` (decant/full_bottle) |
| `note.model.ts` | Fragrance notes | `FragranceNote`, `NotePyramid` (top/middle/base) |
| `ranking.model.ts` | Performance rankings | `SeasonRanking`, `OccasionRanking` |
| `user.model.ts` | User authentication | `User`, `UserAddress`, `LoginCredentials` |
| `cart.model.ts` | Shopping cart | `Cart`, `CartItem`, `CartSummary` |
| `order.model.ts` | Order management | `Order`, `OrderItem`, `OrderStatus` |
| `filter.model.ts` | Search filters | `ProductFilters`, `PaginatedResponse<T>` |

### Theme Colors

| Color | Hex | Usage |
|-------|-----|-------|
| 🟢 **Primary (Teal)** | `#1e7883` | Buttons, links, accents |
| 🔘 **Secondary (Sage)** | `#a9bdbb` | Backgrounds, borders |
| 🟠 **Tertiary (Coral)** | `#ee7256` | CTAs, highlights, badges |

---

## 🗺️ Roadmap

### Phase 1: Frontend Foundation ✅
- [x] Project setup with Angular 20
- [x] Custom theme with Material Design 3
- [x] TypeScript interfaces for all entities
- [x] Header component with search
- [x] Footer component
- [x] Routing with lazy loading

### Phase 2: Product Features 🚧
- [ ] Home page with hero section
- [ ] Product card component
- [ ] Product listing with filters
- [ ] Product detail page
- [ ] Fragrance notes visualization

### Phase 3: Shopping Experience
- [ ] Shopping cart functionality
- [ ] Cart service with signals
- [ ] Checkout flow
- [ ] Order confirmation

### Phase 4: Authentication
- [ ] Login/Register pages
- [ ] Google Sign-In integration
- [ ] User profile
- [ ] Order history

### Phase 5: Backend Integration
- [ ] Connect with NestJS API
- [ ] Real product data
- [ ] Payment integration (Stripe)

---

## 🔗 Related Projects

| Project | Description |
|---------|-------------|
| [back-perfume-shop](../back-perfume-shop) | NestJS backend API |

---

## 📝 API Data Source

Product data structure inspired by [Fragella API](https://api.fragella.com/) - a comprehensive fragrance database with 74k+ perfumes including notes, accords, and performance data.

---

## 👤 Author

**Your Name**

- Portfolio: [https://davidgvdev.github.io/CV-Portfolio/](https://davidgvdev.github.io/CV-Portfolio/)
- GitHub: [@davidGVDev](https://github.com/davidGVDev)
- LinkedIn: [David Gustavo Ventura Villesca](https://www.linkedin.com/in/david-gustavo-ventura-villesca-2a158615b/)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ and Angular
</p>
