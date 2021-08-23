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
  ['destination']: {
    name: string;
    type: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
    fare: number;
  };
}
