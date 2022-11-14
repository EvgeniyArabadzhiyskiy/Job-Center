import { useEffect, useState, useRef } from 'react';

const Map = ({ lat, lng, getAddress }) => {
  const ref = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const option = {
      zoom: 4,
      center: { lat, lng },
      styles: [
        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#e7e1dc' }],
        },

        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#38414e' }],
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#212a37' }],
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9ca5b3' }],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#746855' }],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#1f2835' }],
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#f3d19c' }],
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{ color: '#2f3948' }],
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }],
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#307f9b' }],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#f24106' }],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#e50707' }],
        },
      ],
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

  useEffect(() => {
    const latlng = { lat, lng };
    const geocoder = new window.google.maps.Geocoder();

    geocoder
      .geocode({ location: latlng })
      .then(response => {
        if (response.results[0]) {
          getAddress(response.results[0].formatted_address);
        }
      })
      .catch(e => window.console.log('Geocoder failed: ' + e));
  });

  return <div ref={ref} className="h-[60%]  "></div>;
};

export default Map;
