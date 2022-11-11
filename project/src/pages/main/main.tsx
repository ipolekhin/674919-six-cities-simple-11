import React, {useEffect, useState} from 'react';
import PlaceCards from '../../components/place-cards/place-cards';
import {Offer} from '../../types/offers';
import Map from '../../components/map/map';
import {City, PropertyClassName} from '../../const';
import CitiesList from '../../components/cities-list/cities-list';
import {useAppSelector} from '../../hooks';
import MainEmpty from '../main-empty/main-empty';

const Main = (): JSX.Element => {
  const activeCity = useAppSelector((state) => state.city);
  const offersReducer = useAppSelector((state) => state.offers);
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);
  const offersOfCity = offersReducer.slice().filter((offer: Offer) => offer.city.name === activeCity);

  return (
    <main className={`page__main page__main--index ${(offersOfCity.length === 0) ? 'page__main--index-empty' : ''}`}>
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

                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>

                  <span className="places__sorting-type" tabIndex={0}>
                    Popular

                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>

                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>

                    <li className="places__option" tabIndex={0}>Price: low to high</li>

                    <li className="places__option" tabIndex={0}>Price: high to low</li>

                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>

                <PlaceCards offers={offersOfCity} onSetActiveOffer={setActiveOffer} listClassName={PropertyClassName.PlaceCardListCities} itemClassName={PropertyClassName.PlaceCardItemCities}/>
              </section>

              <div className="cities__right-section">
                <Map offers={offersOfCity} city={City} activeOffer={activeOffer} elementClassName={PropertyClassName.MapPageMain}/>
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
