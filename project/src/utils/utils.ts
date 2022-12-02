import {SortList} from '../const';
import {Offers} from '../types/offers';

export const sortedOffers = (offers: Offers, currentSortName: string) => {
  let sortOffers: Offers = [];
  const showingOffers = offers.slice();

  switch (currentSortName) {
    case SortList.POPULAR:
      sortOffers = offers;
      break;
    case SortList.PRICE_LOW:
      sortOffers = showingOffers.sort((a, b) => a.price - b.price);
      break;
    case SortList.PRICE_HIGH:
      sortOffers = showingOffers.sort((a, b) => b.price - a.price);
      break;
    case SortList.TOP_RATED_FIRST:
      sortOffers = showingOffers.sort((a, b) => b.rating - a.rating);
      break;
  }

  return sortOffers;
};
