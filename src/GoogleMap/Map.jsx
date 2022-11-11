import { useEffect, useState, useRef } from 'react';

const Map = ({ lat, lng }) => {
  const ref = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const option = {
      zoom: 4,
      center: { lat, lng },
    };

    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, option));
    }
  }, [ref, map, lat, lng]);

  useEffect(() => {
    new window.google.maps.Marker({
      position: { lat, lng },
      map: map,
    });
  }, [ref, map, lat, lng]);

  return <div ref={ref} style={{ width: '400px', height: '400px' }}></div>;
};

export default Map;
