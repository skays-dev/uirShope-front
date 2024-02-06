import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { LoginComponent } from './components/routes/login/login.component';
import { RegisterComponent } from './components/routes/register/register.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./components/routes/products/products.module').then(c => c.ProductsModule) },
            { path: 'product', loadChildren: () => import('./components/routes/product-details/product-details.module').then(c => c.ProductDetailsModule) },
            { path: 'categories', loadChildren: () => import('./components/routes/category/category.module').then(c => c.CategoryModule) },

        ]
    },
    {
        path: 'auth',
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ],
    },
    // {
    //     path: 'register',
    //     component: RegisterComponent
    // },


]
