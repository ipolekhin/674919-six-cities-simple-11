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

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const CITY = {
  title: 'Amsterdam',
  lat: 52.37454,
  lng: 4.897976,
  zoom: 13,
};

export const POINTS = [
  {
    title: 'Саундвью',
    lat: 52.36954000000001,
    lng: 4.914976,
  }, {
    title: 'Ферри Поинт',
    lat: 52.36354,
    lng: 4.911976,
  }, {
    title: 'Бронкс',
    lat: 52.37454,
    lng: 4.897976,
  }, {
    title: 'Инвуд-Хилл',
    lat: 52.37454,
    lng: 4.897976,
  },
];
