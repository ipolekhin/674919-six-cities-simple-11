export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer= '/offer/:id',
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

export const Ratings: string[] = ['20%', '40%', '60%', '80%', '100%'];

export const FiveStar: number[] = [5, 4, 3, 2, 1];

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

export enum MapClassName {
  PageOffer = 'property__map',
  PageMain = 'cities__map',
}
