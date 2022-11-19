import React, {useState} from 'react';
import PlaceCards from '../../components/place-cards/place-cards';
import {Offer} from '../../types/offers';
import Map from '../../components/map/map';
import {City, PropertyClassName} from '../../const';
import CitiesList from '../../components/cities-list/cities-list';
import {useAppSelector} from '../../hooks';
import MainEmpty from '../main-empty/main-empty';
import PlacesSorting from '../../components/places-sortting/places-sorting';
import {getSortedOffers} from '../../utils/utils';

const Main = (): JSX.Element => {
  const activeCity = useAppSelector((state) => state.city);
  const offersReducer = useAppSelector((state) => state.offers);
  const currentSortName = useAppSelector((state) => state.sortName);
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);
  let offersOfCity = offersReducer.slice().filter((offer: Offer) => offer.city.name === activeCity);
  offersOfCity = getSortedOffers(offersOfCity, currentSortName);

  const emptyCityClass = !offersOfCity.length ? 'page__main--index-empty' : '';

  return (
    <main className={`page__main page__main--index ${emptyCityClass}`}>
      <h1 className="visually-hidden">Cities</h1>

      <div className="tabs">
        <section className="locations container">
          <CitiesList/>
        </section>
      </div>

      {
        (offersOfCity.length) > 0 ? (
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>

                <b className="places__found">{offersOfCity.length} places to stay in {activeCity}</b>

                <PlacesSorting
                  currentSortName={currentSortName}
                />

                <PlaceCards offers={offersOfCity} onSetActiveOffer={setActiveOffer} listClassName={PropertyClassName.PlaceCardListCities} itemClassName={PropertyClassName.PlaceCardItemCities}/>
              </section>

              <div className="cities__right-section">
                <Map activeCity={activeCity} offers={offersOfCity} city={City} activeOffer={activeOffer} elementClassName={PropertyClassName.MapPageMain}/>
              </div>
            </div>
          </div>
        )
          : <MainEmpty/>
      }

    </main>
  );
};

export default Main;
