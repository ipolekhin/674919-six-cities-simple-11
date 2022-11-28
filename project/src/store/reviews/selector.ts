import {NameSpace} from '../name-space';
import {State} from '../../types/state';

const NAME_SPACE = NameSpace.Reviews;

export const getReviewsOfOffer = (state: State) => state[NAME_SPACE].reviewsOfOffer;
// export const getReviewsOfOffer = (state: State) => state[NAME_SPACE].reviewsOfOffer.sort((a, b) => b.date - a.date);
