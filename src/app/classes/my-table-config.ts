export class MyTableConfig {
  headers: MyHeaders[];
  actions: MyTableActionEnum[];
}

export class MyHeaders {
  key: string;
  label: string;
}

export enum MyTableActionEnum {
  new, edit, delete
}
