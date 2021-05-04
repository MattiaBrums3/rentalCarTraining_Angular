export class MyTableConfig {
  headers: MyHeaders[];
  order: MyOrder;
  search: MySearch;
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

export class MySearch {
  columns: string[];
}

export enum MyTableActionEnum {
  new, edit, delete
}
