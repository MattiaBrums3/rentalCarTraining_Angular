import { MyTableConfig, MyHeaders } from './my-table-config';

const HEADERS: MyHeaders[] = [
  { key: 'idUser', label: 'idUtente' },
  { key: 'name', label: 'Nome' },
  { key: 'surname', label: 'Cognome' },
  { key: 'dateOfBirth', label: 'Data di Nascita' },
  { key: 'fiscalCode', label: 'Codice Fiscale' },
  { key: 'username', label: 'Username' },
  { key: 'password', label: 'Password'}
];

export const USERTABLE: MyTableConfig = {
  headers: HEADERS
};
