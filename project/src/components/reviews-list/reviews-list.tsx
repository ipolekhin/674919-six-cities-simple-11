import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import Form from '../form/form';
import {Reviews} from '../../types/reviews';

type ReviewsListProps = {
  reviews: Reviews;
};

const ReviewsList = ({reviews}: ReviewsListProps): JSX.Element => (
  <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

    <ul className="reviews__list">
      {
        reviews.map((review) => (
          <ReviewsItem key={review.id} review={review}/>
        ))
      }
    </ul>

    <Form/>
  </section>
);

export default ReviewsList;
