import {SortList} from '../const';
import {Offers} from '../types/offers';

export const sortedOffers = (offers: Offers, currentSortName: string) => {
  let sortOffers: Offers = [];
  const showingOffers = offers.slice();

  switch (currentSortName) {
    case SortList.Popular:
      sortOffers = offers;
      break;
    case SortList.PriceLow:
      sortOffers = showingOffers.sort((a, b) => a.price - b.price);
      break;
    case SortList.PriceHigh:
      sortOffers = showingOffers.sort((a, b) => b.price - a.price);
      break;
    case SortList.TopRatedFirst:
      sortOffers = showingOffers.sort((a, b) => b.rating - a.rating);
      break;
  }

  return sortOffers;
};
