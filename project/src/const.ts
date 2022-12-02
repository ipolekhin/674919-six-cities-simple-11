export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer= '/offer/:id',
  PageNotExist= '/404',
}

export const PageModifierClassType: {[key: string]: string} = {
  [AppRoute.Main]: 'page--gray page--main',
  [AppRoute.Login]: 'page--gray page--login',
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ReviewStatus {
  ReviewRest = 'REVIEW_REST',
  ReviewPending = 'REVIEW_PENDING',
  ReviewFulfilled = 'REVIEW_FULFILLED',
}

export const Ratings: string[] = ['20%', '40%', '60%', '80%', '100%'];

export const FiveStar: number[] = [5, 4, 3, 2, 1];
export const Months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export enum Markers {
  Default = '/img/pin.svg',
  Active = '/img/pin-active.svg',
}

export enum City {
  Title = 'Amsterdam',
  Lat = 52.37454,
  Lng = 4.897976,
  Zoom = 13,
}

export enum PropertyClassName {
  MapPageOffer = 'property__map',
  MapPageMain = 'cities__map',
  PlaceCardListNear = 'near-places__list',
  PlaceCardItemNear = 'near-places',
  PlaceCardListCities = 'cities__places-list tabs__content',
  PlaceCardItemCities = 'cities',
}

export enum CitiesType {
  PARIS = 'Paris',
  COLOGNE = 'Cologne',
  BRUSSELS = 'Brussels',
  AMSTERDAM = 'Amsterdam',
  HAMBURG = 'Hamburg',
  DUSSELDORF = 'Dusseldorf',
}

// export const CitiesCoordinates: {[key: string]: string} = {
//   [CitiesType.PARIS]: [48.853, 2.348],
//   [CitiesType.COLOGNE]: [48.853, 2.348],
//   [CitiesType.BRUSSELS]: [48.853, 2.348],
//   [CitiesType.AMSTERDAM]: [48.853, 2.348],
//   [CitiesType.HAMBURG]: [48.853, 2.348],
//   [CitiesType.DUSSELDORF]: [48.853, 2.348],
// } as const;

export const Cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const SortList = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
} as const;

export enum APIRoute {
  Offers = '/hotels',
  Offer = '/hotels/:id',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}

export const TIMEOUT_SHOW_ERROR = 4000;
