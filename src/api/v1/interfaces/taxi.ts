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
  station?: string;
  driver?: string;
  colorCode: {
    fenders: string;
    doors: string;
  };
}

export interface IDriver {
  name: string;
  phone: string;
  email: string;
  address: string;
  taxiLocal?: string;
  taxi?: string;
}
