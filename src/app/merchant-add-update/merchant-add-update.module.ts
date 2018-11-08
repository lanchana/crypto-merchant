import {NgModule} from '@angular/core';
import {MerchantAddUpdateComponent} from './merchant-add-update.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MerchantAddUpdateRoutingModule} from './merchant-add-update-routing.module';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';

@NgModule({
  declarations: [
    MerchantAddUpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MerchantAddUpdateRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [
  ]
})

export class MerchantAddUpdateModule {
}
