import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderProductComponent } from './order-product.component';

const routes: Routes = [
  {
    path: '',
    component: OrderProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderProductRoutingModule {}
