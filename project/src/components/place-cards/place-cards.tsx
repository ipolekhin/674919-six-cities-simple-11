import React, {useState} from 'react';
import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offers';

type PlaceCardsProps = {
  offers: Offers;
};

const PlaceCards = ({offers}: PlaceCardsProps): JSX.Element => {
  const [activeOfferId, setActiveOfferId] = useState<number>(0);

  return (
    <div className={`cities__places-list places__list tabs__content ${activeOfferId}`}>
      {
        offers && offers.map((offer) => (
          <PlaceCard offer={offer} onSetActiveOfferId={setActiveOfferId} key={offer.id}/>
        ))
      }
    </div>
  );
};

export default PlaceCards;
