import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import Form from '../form/form';

const ReviewsList = (): JSX.Element => (
  <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>

    <ul className="reviews__list">
      {
        ['1'].map((item) => (
          <ReviewsItem key={item}/>
        ))
      }
    </ul>

    <Form/>
  </section>
);

export default ReviewsList;
