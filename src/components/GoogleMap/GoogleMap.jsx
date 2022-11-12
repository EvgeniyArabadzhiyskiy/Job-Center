import { Wrapper } from '@googlemaps/react-wrapper';

import Map from './Map';

const GoogleMap = ({ location }) => {
  return (
    <Wrapper apiKey="AIzaSyDF1e7Wfn3Dgpb3m-Cw5u_f0fisQ8vNKDA">
      <Map lat={location.lat} lng={location.long} />
    </Wrapper>
  );
};

export default GoogleMap;
