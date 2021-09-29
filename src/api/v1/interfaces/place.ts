export interface IStation {
  stationAdmin: {
    name: string;
    phone: string;
    email?: string;
  };
  contact: { name: string; phone: string; email: string };
  address: string;
  destinations?: [
    {
      address: IPlace;
      fare?: number;
    },
  ];
  taxis?: [string];
}

export interface IPlace {
  name: string;
  type: string;
  vicinity: string;
  region: string;
  photos?: Array<string>;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

export interface IQueryPlace {
  name: string;
  vicinity?: string;
  region?: string;
}
