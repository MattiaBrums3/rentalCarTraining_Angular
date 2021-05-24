export interface User {
  id: number;
  name: string;
  surname: string;
  dateOfBirth: Date;
  fiscalCode: string;
  superUser: boolean;
  username: string;
  password: string;
  token?: string;
}
