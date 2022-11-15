import { Wrapper } from '@googlemaps/react-wrapper';

import Map from './Map';


const { REACT_APP_GOOGLE_MAP_APIkey } = process.env;
console.log("REACT_APP_GOOGLE_MAP_APIkey", REACT_APP_GOOGLE_MAP_APIkey);



interface IGoogleMapProps {
  location: {
    lat: number;
    long: number;
  };

  getAddress: (address: string) => void;
}

const GoogleMap: React.FC<IGoogleMapProps> = ({ location, getAddress }) => {
  return (
    <Wrapper apiKey={REACT_APP_GOOGLE_MAP_APIkey}>
      <Map lat={location.lat} lng={location.long} getAddress={getAddress} />
    </Wrapper>
  );
};

export default GoogleMap;
