import {NameSpace} from '../name-space';
import {State} from '../../types/state';
import {Reviews} from '../../types/reviews';

const NAME_SPACE = NameSpace.Reviews;

export const getReviewsOfOffer = (state: State) => state[NAME_SPACE].reviewsOfOffer;
// export const getReviewsOfOffer = (state: State) => {
//   let reviewsList = state[NAME_SPACE].reviewsOfOffer;
//
//   if (reviewsList.length > 1) {
//     reviewsList = reviewsList.sort((a, b) => {
//       console.log('---getReviewsOfOffer---');
//       console.log(b.date > a.date);
//       // console.log(b.date.getTime());
//
//       return (new Date(b.date).getTime() - new Date(a.date).getTime());
//     });
//   }
//
//   return reviewsList;
// };
