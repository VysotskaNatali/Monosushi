import { IProductResponse } from '../product/product.interface';

export interface IOrderData {
  holders: string;
  countHolders: number;
  cash: string;
  delivery: string;
  callBack: string;
  userUID: string;
  orderProduct: Array<IProductResponse>;
  data: string;
  total: number;
  status: string;
  orderCount: number;
  address: string;
  user: string;
  phone: string;
}
export interface IOrderDataResponse extends IOrderData {
  id:string;
}