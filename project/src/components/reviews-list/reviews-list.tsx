import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import Form from '../form/form';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';

const ReviewsList = (): JSX.Element => {
  const reviews = useAppSelector((state) => state.reviewsOfOffer);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      <ul className="reviews__list">
        {
          reviews.map((review) => (
            <ReviewsItem key={review.id} review={review}/>
          ))
        }
      </ul>

      {
        authorizationStatus === AuthorizationStatus.Auth
          && <Form/>
      }
    </section>
  );
};

export default ReviewsList;
