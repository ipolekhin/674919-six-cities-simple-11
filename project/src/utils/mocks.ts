import {lorem, datatype, image, name} from 'faker';
import {Review, Reviews} from '../types/reviews';

export const makeFakeReview = (): Review => ({
  comment: lorem.paragraph(),
  date: String(datatype.datetime()),
  id: datatype.number(),
  rating: datatype.number(5),
  user: {
    avatarUrl: image.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: name.findName(),
  }
} as Review);

export const makeFakeReviews = (): Reviews => {
  const reviews : Reviews = [];
  for (let i = 0; i < datatype.number(10); i++) {
    reviews.push(makeFakeReview());
  }

  return reviews;
};
