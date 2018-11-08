import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MerchantAddUpdateComponent} from './merchant-add-update.component';

const addUpdateRoutes: Routes = [{
  path: '', component: MerchantAddUpdateComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(addUpdateRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class MerchantAddUpdateRoutingModule {

}
