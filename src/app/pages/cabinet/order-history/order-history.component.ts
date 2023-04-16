import { Component, OnInit } from '@angular/core';
import { IOrderData } from 'src/app/shared/interfaces/order/order.interface';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {
  public orderData: Array<IOrderData> = [];
  public user!: string;
  public id!: string;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrder();
  }

  async loadOrder() {
    this.orderService.getAllFirebase().subscribe((data) => {
      const user = JSON.parse(localStorage.getItem('currentUser') as string);
      this.user = user?.uid;
      data.forEach((date) => {
        const arr = date.orderProduct;
        date.orderProduct = JSON.parse(arr);
        this.orderData = data as IOrderData[];
      });
    });
  }
}
