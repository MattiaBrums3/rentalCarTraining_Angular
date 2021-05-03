export class MyButtonConfig {
  customCssClass: string;
  text: string;
  icon: string;
}

export const NEWBUTTON: MyButtonConfig = {
  customCssClass: 'btn btn-primary',
  text: 'Inserisci',
  icon: 'add'
};

export const EDITBUTTON: MyButtonConfig = {
  customCssClass: 'btn btn-success',
  text: 'Modifica',
  icon: 'edit'
};

export const DELETEBUTTON: MyButtonConfig = {
  customCssClass: 'btn btn-danger',
  text: 'Elimina',
  icon: 'delete'
};
