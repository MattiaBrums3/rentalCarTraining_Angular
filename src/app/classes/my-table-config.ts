export class MyTableConfig {
  headers: MyHeaders[];
  order: MyOrder;
  actions: MyTableActionEnum[];
}

export class MyHeaders {
  key: string;
  label: string;
}

export class MyOrder {
  defaultColumn: string;
  orderType: string;
}

export enum MyTableActionEnum {
  new, edit, delete
}
