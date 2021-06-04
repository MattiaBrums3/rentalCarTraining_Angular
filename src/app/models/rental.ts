export interface Rental {
  id: number;
  idUser: number;
  idVehicle: number;
  dateOfStart: Date;
  dateOfEnd: Date;
  approved: boolean;
}
