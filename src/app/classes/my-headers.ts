import { MyTableConfig, MyHeaders } from './my-table-config';

const USERHEADERS: MyHeaders[] = [
  { key: 'idUser', label: 'idUtente' },
  { key: 'name', label: 'Nome' },
  { key: 'surname', label: 'Cognome' },
  { key: 'dateOfBirth', label: 'Data di Nascita' },
  { key: 'fiscalCode', label: 'Codice Fiscale' },
  { key: 'username', label: 'Username' },
  { key: 'password', label: 'Password'}
];

const CATEGORYHEADERS: MyHeaders[] = [
  { key: 'idCategory', label: 'idCategoria' },
  { key: 'typology', label: 'Tipologia' }
];

export const USERTABLE: MyTableConfig = {
  headers: USERHEADERS,
  order: { defaultColumn: 'idUtente', orderType: 'asc' },
  search: {columns: ['idUtente', 'Nome', 'Cognome', 'Data di Nascita', 'Codice Fiscale',
    'Username', 'Password']},
  actions: [0, 1, 2]
};

export const CATEGORYTABLE: MyTableConfig = {
  headers: CATEGORYHEADERS,
  order: { defaultColumn: 'idCategoria', orderType: 'asc' },
  search: {columns: ['idCategoria', 'Tipologia']},
  actions: [0, 1, 2]
};
