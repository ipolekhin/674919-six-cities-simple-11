import React from 'react';
import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offers';

type PlaceCardsProps = {
  offers: Offers;
  onSetOfferActive: (id: number | string) => void;
};

const PlaceCards = ({offers, onSetOfferActive}: PlaceCardsProps): JSX.Element => (
  <div className='cities__places-list places__list tabs__content'>
    {
      offers && offers.map((offer) => (
        <PlaceCard offer={offer} onSetOfferActive={onSetOfferActive} key={offer.id}/>
      ))
    }
  </div>
);

export default PlaceCards;
