import {SortType} from '../const';
import {Offers} from '../types/offers';

export const getSortedOffers = (offers: Offers, currentSortName: string) => {
  let sortedOffers: Offers = [];
  const showingOffers = offers.slice();

  switch (currentSortName) {
    case SortType.POPULAR:
      sortedOffers = offers;
      break;
    case SortType.PRICE_LOW:
      sortedOffers = showingOffers.sort((a, b) => a.price - b.price);
      break;
    case SortType.PRICE_HIGH:
      sortedOffers = showingOffers.sort((a, b) => b.price - a.price);
      break;
    case SortType.TOP_RATED_FIRST:
      sortedOffers = showingOffers.sort((a, b) => b.rating - a.rating);
      break;
  }

  return sortedOffers;
};
