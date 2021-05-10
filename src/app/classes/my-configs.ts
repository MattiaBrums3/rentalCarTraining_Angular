import { MyTableConfig, MyHeaders } from './my-table-config';
import {MyButtonConfig} from './my-button-config';

// BUTTONS
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
const USERHEADERS: MyHeaders[] = [
  { key: 'idUser', label: 'idUtente' },
  { key: 'name', label: 'Nome' },
  { key: 'surname', label: 'Cognome' },
  { key: 'dateOfBirth', label: 'Data di Nascita' },
  { key: 'fiscalCode', label: 'Codice Fiscale' },
  { key: 'username', label: 'Username' },
  { key: 'password', label: 'Password' }
];

const CATEGORYHEADERS: MyHeaders[] = [
  { key: 'idCategory', label: 'idCategoria' },
  { key: 'typology', label: 'Tipologia' }
];

const VEHICLEHEADERS: MyHeaders[] = [
  { key: 'idVehicle', label: 'idVeicolo'},
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
  actions: [NEWBUTTON, EDITBUTTON, DELETEBUTTON]
};

export const CATEGORYTABLE: MyTableConfig = {
  headers: CATEGORYHEADERS,
  order: { defaultColumn: 'idCategoria', orderType: 'asc' },
  search: {columns: ['idCategoria', 'Tipologia']},
  pagination: {
    itemPerPage: 2,
    itemPerPageOptions: [2, 5, 10]
  },
  actions: [NEWBUTTON, EDITBUTTON, DELETEBUTTON]
};

export const VEHICLETABLE: MyTableConfig = {
  headers: VEHICLEHEADERS,
  order: { defaultColumn: 'idCategoria', orderType: 'asc' },
  search: {columns: ['idVeicolo', 'Modello', 'Casa Produttrice', 'Targa', 'Anno Immatr.']},
  pagination: {
    itemPerPage: 2,
    itemPerPageOptions: [2, 5, 10]
  },
  actions: [NEWBUTTON, EDITBUTTON, DELETEBUTTON]
};
