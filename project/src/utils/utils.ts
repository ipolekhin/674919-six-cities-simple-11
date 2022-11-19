import {SortList} from '../const';
import {Offers} from '../types/offers';

export const getSortedOffers = (offers: Offers, currentSortName: string) => {
  let sortedOffers: Offers = [];
  const showingOffers = offers.slice();

  switch (currentSortName) {
    case SortList.POPULAR:
      sortedOffers = offers;
      break;
    case SortList.PRICE_LOW:
      sortedOffers = showingOffers.sort((a, b) => a.price - b.price);
      break;
    case SortList.PRICE_HIGH:
      sortedOffers = showingOffers.sort((a, b) => b.price - a.price);
      break;
    case SortList.TOP_RATED_FIRST:
      sortedOffers = showingOffers.sort((a, b) => b.rating - a.rating);
      break;
  }

  return sortedOffers;
};
