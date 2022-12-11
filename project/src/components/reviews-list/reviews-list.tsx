import React, {memo} from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import Form from '../form/form';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {getReviewsOfOffer} from '../../store/reviews-process/selector';
import {getAuthorizationStatus} from '../../store/user-process/selector';

const REVIEW_MAX_LENGTH = 10;

const ReviewsList = (): JSX.Element => {
  const reviews = useAppSelector(getReviewsOfOffer).slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      <ul className="reviews__list">
        {
          reviews &&
          reviews.slice(0, REVIEW_MAX_LENGTH).map((review) => (
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

export default memo(ReviewsList);
