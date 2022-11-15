export interface IMapOptions {
  zoom: number;
  center: {
    lat: number;
    lng: number;
  };
  disableDefaultUI: boolean;
  styles: any[];
}
