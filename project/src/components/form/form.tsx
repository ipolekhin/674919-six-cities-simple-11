import React, {useState} from 'react';
import {FiveStar} from '../../const';

const Form = (): JSX.Element => {
  const {formState, setFormState} = useState({rating: '', review: ''});
  const changeFormHandler = (evt): void => {
    const {name, value} = evt.target;
    setFormState({...formState, [name]: value});
  };

  const sendForm = (evt) => {
    evt.preventDefault();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={sendForm}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {
          FiveStar.map((star) => (
            <>
              <input className="form__rating-input visually-hidden" name="rating" value={star} id={`${star}-stars`} type="radio"/>

              <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </>
          ))
        }
      </div>

      <textarea className="reviews__textarea form__textarea" id="review" onChange={changeFormHandler} name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
};

export default Form;
