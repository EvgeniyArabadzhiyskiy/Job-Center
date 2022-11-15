import { Wrapper } from '@googlemaps/react-wrapper';

import Map from './Map';


const { REACT_APP_GOOGLE_MAP_APIkey } = process.env;
console.log("REACT_APP_GOOGLE_MAP_APIkey", REACT_APP_GOOGLE_MAP_APIkey);

const fff = REACT_APP_GOOGLE_MAP_APIkey
console.log("fff", fff);

interface IGoogleMapProps {
  location: {
    lat: number;
    long: number;
  };

  getAddress: (address: string) => void;
}

const GoogleMap: React.FC<IGoogleMapProps> = ({ location, getAddress }) => {
  return (
    <Wrapper apiKey={fff}>
      <Map lat={location.lat} lng={location.long} getAddress={getAddress} />
    </Wrapper>
  );
};

export default GoogleMap;
