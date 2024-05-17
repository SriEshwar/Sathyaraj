import { Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CounterComponent } from './counter/counter.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {
        path:'account',
        component:AccountComponent
    },
    {
        path:'counter',
        component:CounterComponent
    },
    {
        path:'product',
        component:ProductComponent
    }
];
