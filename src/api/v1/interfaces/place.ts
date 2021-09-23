export interface IStation {
  stationId?: string;
  contact?: { name: string; phone: string; email: string };
  destination: [
    {
      address: IPlace;
      fare?: number;
      stops: [
        {
          address: IPlace;
          fare?: number;
        },
      ];
    },
  ];
}

export interface IPlace {
  placeId?: string;
  name: string;
  types: Array<string>;
  vicinity: string;
  region: string;
  photos: Array<string>;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}
