import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import Form from '../form/form';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {getReviewsOfOffer} from '../../store/reviews/selector';
import {getAuthorizationStatus} from '../../store/user/selector';

const ReviewsList = (): JSX.Element => {
  console.info('<ReviewsList />: Render');
  const reviews = useAppSelector(getReviewsOfOffer);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

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
