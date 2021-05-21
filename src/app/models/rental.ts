export interface Rental {
  id: number;
  idUser: number;
  idVehicle: number;
  dateStart: Date;
  dateEnd: Date;
  approved: boolean;
}
