import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

export const ROUTES: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'new', loadChildren: './merchant-add-update/merchant-add-update.module#MerchantAddUpdateModule'},
  {path: 'update/:id', loadChildren: './merchant-add-update/merchant-add-update.module#MerchantAddUpdateModule'}
];
