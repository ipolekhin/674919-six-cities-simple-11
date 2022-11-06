import React, {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offer, Offers} from '../../types/offers';
import useMap from '../../hooks/useMap';
import {Markers} from '../../const';

type MapProps = {
  offers: Offers;
  city: {
    title: string;
    lat: number;
    lng: number;
    zoom: number;
  };
  activeOffer: Offer | undefined;
}

const Map = ({offers, city, activeOffer}: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = new Icon({
    iconUrl: Markers.Default,
    iconSize: [27, 39],
    iconAnchor: [27, 39],
  });

  const currentCustomIcon = new Icon({
    iconUrl: Markers.Active,
    iconSize: [27, 39],
    iconAnchor: [27, 39],
  });

  useEffect(() => {
    if (map) {
      const markers: [number, number][] = [];
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        markers.push([offer.location.latitude, offer.location.longitude]);

        marker
          .setIcon(
            activeOffer !== undefined && offer.id === activeOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
      map.fitBounds(markers, {padding: [20, 20]});
    }
  }, [map, offers, activeOffer]);

  return (
    <div className="cities__right-section">
      <section className="cities__map map" ref={mapRef}></section>
    </div>
  );
};

export default Map;
