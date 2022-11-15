import { Wrapper } from '@googlemaps/react-wrapper';

import Map from './Map';

interface IGoogleMapProps {
  location: {
    lat: number;
    long: number;
  };

  getAddress: (address: string) => void;
}

const GoogleMap: React.FC<IGoogleMapProps> = ({ location, getAddress }) => {
  return (
    <Wrapper apiKey="AIzaSyDF1e7Wfn3Dgpb3m-Cw5u_f0fisQ8vNKDA">
      <Map lat={location.lat} lng={location.long} getAddress={getAddress} />
    </Wrapper>
  );
};

export default GoogleMap;
