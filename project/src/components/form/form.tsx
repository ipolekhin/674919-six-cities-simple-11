import React, {ChangeEvent, FormEvent, useState, memo} from 'react';
import {FiveStar} from '../../const';
import {useAppDispatch} from '../../hooks';
import {sendReviewOfOfferAction} from '../../store/reviews/api';

const Form = (): JSX.Element => {
  console.info('<Form />: Render');
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({rating: '', review: ''});

  const handleChangeForm = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const isSendForm: boolean = (formData.review.length >= 50 && formData.rating.length !== 0);

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendReviewOfOfferAction(formData));
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmitForm}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {
          FiveStar.map((star) => (
            <React.Fragment key={star}>
              <input className="form__rating-input visually-hidden" onChange={handleChangeForm} name="rating" value={star} id={`${star}-stars`} type="radio"/>

              <label htmlFor={`${star}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))
        }
      </div>

      <textarea className="reviews__textarea form__textarea" id="review" onChange={handleChangeForm} name="review" value={formData.review} placeholder="Tell how was your stay, what you like and what can be improved"></textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button className="reviews__submit form__submit button" type="submit" disabled={!isSendForm}>Submit</button>
      </div>
    </form>
  );
};

// export default Form;
export default memo(Form);
