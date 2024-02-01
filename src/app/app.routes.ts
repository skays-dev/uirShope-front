import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout/layout.component';
export const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./components/routes/products/products.module').then(c => c.ProductsModule) }
        ]
    },
];
