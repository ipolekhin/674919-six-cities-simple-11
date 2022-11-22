import React, {useEffect, useState} from 'react';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import PlaceCards from '../../components/place-cards/place-cards';
import {useParams} from 'react-router-dom';
import {Offer} from '../../types/offers';
import {Ratings, PropertyClassName, City} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchOfferAction} from '../../store/api';

const OfferPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => state.offer);
  const offersNear = useAppSelector((state) => state.offersNear);
  const params = useParams();
  const paramsId = Number(params.id);
  useEffect(() => {
    if (offer === null || offer.id !== paramsId) {
      dispatch(fetchOfferAction(paramsId));
    }
  }, [offer]);
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);

  if (!offer) {
    return <div>Такого офера нет</div>;
  }

  const {id, images, isPremium, price, title, type, rating} = offer;
  const imagesSliced = images.slice(1, 7);
  const ratingPercent = Ratings[Math.round(rating) - 1];

  return (
    <main className="page__main page__main--property" data-id={id}>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {imagesSliced?.map((imageSrc, index) => {
              const ketValue = `image-${index}`;
              return (
                <div className="property__image-wrapper" data-key={`${imageSrc}`} key={ketValue}>
                  <img className="property__image" src={imageSrc} alt={title}/>
                </div>);
            })}
          </div>
        </div>

        <div className="property__container container">
          <div className="property__wrapper">
            {
              isPremium &&

              <div className="property__mark">
                <span>Premium</span>
              </div>
            }

            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
            </div>

            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: ratingPercent}}></span>
                <span className="visually-hidden">Rating</span>
              </div>

              <span className="property__rating-value rating__value">{rating}</span>
            </div>

            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>

              <li className="property__feature property__feature--bedrooms">
                3 Bedrooms
              </li>

              <li className="property__feature property__feature--adults">
                Max 4 adults
              </li>
            </ul>

            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>

            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                <li className="property__inside-item">
                  Wi-Fi
                </li>
                <li className="property__inside-item">
                  Washing machine
                </li>
                <li className="property__inside-item">
                  Towels
                </li>
                <li className="property__inside-item">
                  Heating
                </li>
                <li className="property__inside-item">
                  Coffee machine
                </li>
                <li className="property__inside-item">
                  Baby seat
                </li>
                <li className="property__inside-item">
                  Kitchen
                </li>
                <li className="property__inside-item">
                  Dishwasher
                </li>
                <li className="property__inside-item">
                  Cabel TV
                </li>
                <li className="property__inside-item">
                  Fridge
                </li>
              </ul>
            </div>

            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>

              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                </div>

                <span className="property__user-name">
                  Angelina
                </span>

                <span className="property__user-status">
                  Pro
                </span>
              </div>

              <div className="property__description">
                <p className="property__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The
                  building is green and from 18th century.
                </p>

                <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the
                  bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>

            <ReviewsList/>
          </div>
        </div>
        <Map offers={offersNear} city={City} activeOffer={activeOffer} elementClassName={PropertyClassName.MapPageOffer}/>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>

          <PlaceCards offers={offersNear} onSetActiveOffer={setActiveOffer} listClassName={PropertyClassName.PlaceCardListNear} itemClassName={PropertyClassName.PlaceCardItemNear}/>
        </section>
      </div>
    </main>
  );
};

export default OfferPage;
