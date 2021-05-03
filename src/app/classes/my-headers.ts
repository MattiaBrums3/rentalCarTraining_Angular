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
  headers: USERHEADERS
};

export const CATEGORYTABLE: MyTableConfig = {
  headers: CATEGORYHEADERS
};
