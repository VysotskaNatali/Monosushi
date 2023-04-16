import { Component, OnInit } from '@angular/core';
import {
  IOrderData,
  IOrderDataResponse,
} from 'src/app/shared/interfaces/order/order.interface';
import { IProductResponse } from 'src/app/shared/interfaces/product/product.interface';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss'],
})
export class AdminOrderComponent implements OnInit {

  public orderData: Array<IOrderDataResponse> = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrder();
  }

  async loadOrder() {
    this.orderService.getAllFirebase().subscribe((data) => {
      data.forEach((date) => {
        const arr = date.orderProduct;
        date.orderProduct = JSON.parse(arr);
        this.orderData = data as IOrderDataResponse[];
        
      });
    });
  }
 

  orderUpdate(order: IOrderDataResponse): void {
    order.status =  ' виконано';
    order.orderProduct = JSON.stringify(order.orderProduct) as any,
    
    this.orderService
    .updateFirebase(order, order.id as string)
    .then((data) => {
    });
 
}
  orderDelete(order: IOrderDataResponse): void {
    this.orderService.deleteFirebase(order.id as string).then(() => {});
  }
}
