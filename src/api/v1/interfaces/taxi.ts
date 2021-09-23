export interface ITaxi {
  registrationNumber: string;
  brand: string;
  model: string;
  vin: string;
  owner: {
    name: string;
    contact: string;
    address: string;
  };
}

export interface IDriver {
  driverId: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  taxiLocal: string;
}
