import { MyTableConfig, MyHeaders } from './my-table-config';
import {MyButtonConfig} from './my-button-config';

// BUTTONS
export const NEWTABLEBUTTON: MyButtonConfig = {
  customCssClass: 'btn btn-primary',
  text: 'Inserisci',
  icon: 'add'
};

export const EDITTABLEBUTTON: MyButtonConfig = {
  customCssClass: 'btn btn-success',
  text: 'Modifica',
  icon: 'edit'
};

export const DELETETABLEBUTTON: MyButtonConfig = {
  customCssClass: 'btn btn-danger',
  text: 'Elimina',
  icon: 'delete'
};

export const NEXTBUTTON: MyButtonConfig = {
  customCssClass: 'btn btn-primary',
  text: 'Avanti',
  icon: 'skip_next'
};

export const PREVIOUSBUTTON: MyButtonConfig = {
  customCssClass: 'btn btn-primary',
  text: 'Indietro',
  icon: 'skip_previous'
};

export const FORMBUTTON: MyButtonConfig = {
  customCssClass: 'btn btn-primary',
  text: 'Salva',
  icon: 'save'
};

export const UNDOBUTTON: MyButtonConfig = {
  customCssClass: 'btn btn-danger',
  text: 'Annulla',
  icon: 'close'
};


export const CATEGORYBUTTON: MyButtonConfig = {
  customCssClass: 'btn btn-primary rounded',
  text: 'Categorie',
  icon: 'category'
};

export const VEHICLEBUTTON: MyButtonConfig = {
  customCssClass: 'btn btn-primary rounded',
  text: 'Veicoli',
  icon: 'directions_car'
};

// TABLE HEADERS
export const USERHEADERS: MyHeaders[] = [
  { key: 'id', label: 'idUtente' },
  { key: 'name', label: 'Nome' },
  { key: 'surname', label: 'Cognome' },
  { key: 'dateOfBirth', label: 'Data di Nascita' },
  { key: 'fiscalCode', label: 'Codice Fiscale' },
  { key: 'username', label: 'Username' },
  { key: 'password', label: 'Password' }
];

export const CATEGORYHEADERS: MyHeaders[] = [
  { key: 'id', label: 'idCategoria' },
  { key: 'typology', label: 'Tipologia' }
];

export const VEHICLEHEADERS: MyHeaders[] = [
  { key: 'id', label: 'idVeicolo'},
  { key: 'model', label: 'Modello'},
  { key: 'manufacturer', label: 'Casa Produttrice'},
  { key: 'licensePlate', label: 'Targa' },
  { key: 'yearOfRegistration', label: 'Anno'}
];

// TABLES
export const USERTABLE: MyTableConfig = {
  headers: USERHEADERS,
  order: { defaultColumn: 'idUtente', orderType: 'asc' },
  search: {columns: ['idUtente', 'Nome', 'Cognome', 'Data di Nascita', 'Codice Fiscale',
    'Username', 'Password']},
  pagination: {
    itemPerPage: 2,
    itemPerPageOptions: [2, 5, 10]
  },
  actions: [NEWTABLEBUTTON, EDITTABLEBUTTON, DELETETABLEBUTTON]
};

export const CATEGORYTABLE: MyTableConfig = {
  headers: CATEGORYHEADERS,
  order: { defaultColumn: 'idCategoria', orderType: 'asc' },
  search: {columns: ['idCategoria', 'Tipologia']},
  pagination: {
    itemPerPage: 2,
    itemPerPageOptions: [2, 5, 10]
  },
  actions: [NEWTABLEBUTTON, EDITTABLEBUTTON, DELETETABLEBUTTON]
};

export const VEHICLETABLE: MyTableConfig = {
  headers: VEHICLEHEADERS,
  order: { defaultColumn: 'idCategoria', orderType: 'asc' },
  search: {columns: ['idVeicolo', 'Modello', 'Casa Produttrice', 'Targa', 'Anno Immatr.']},
  pagination: {
    itemPerPage: 2,
    itemPerPageOptions: [2, 5, 10]
  },
  actions: [NEWTABLEBUTTON, EDITTABLEBUTTON, DELETETABLEBUTTON]
};
