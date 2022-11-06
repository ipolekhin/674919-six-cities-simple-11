import React from 'react';
import PlaceCard from '../place-card/place-card';
import {Offer, Offers} from '../../types/offers';

type PlaceCardsProps = {
  offers: Offers;
  onSetActiveOffer: (offer: Offer | undefined) => void;
};

const PlaceCards = ({offers, onSetActiveOffer}: PlaceCardsProps): JSX.Element => (
  <div className='cities__places-list places__list tabs__content'>
    {
      offers && offers.map((offer) => (
        <PlaceCard offer={offer} onSetActiveOffer={onSetActiveOffer} key={offer.id}/>
      ))
    }
  </div>
);

export default PlaceCards;
