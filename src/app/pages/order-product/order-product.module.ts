import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { OrderProductRoutingModule } from './order-product-routing.module';
import { OrderProductComponent } from './order-product.component';



@NgModule({
  declarations: [OrderProductComponent],
  imports: [
    CommonModule,SharedModule,OrderProductRoutingModule,
  ]
})
export class OrderProductModule { }
