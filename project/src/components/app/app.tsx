import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import OfferPage from '../../pages/offer/offer';
import PageNotExist from '../../pages/page-not-exist/page-not-exist';
import Layout from '../layout/layout';
import LoadingScreen from '../loading-screen/loading-screen.';
import {Offers} from '../../types/offers';
import {Reviews} from '../../types/reviews';
import {useAppSelector} from '../../hooks';

type AppProps = {
  authorizationStatus: string;
  offers: Offers;
  reviews: Reviews;
};

const App = ({authorizationStatus, offers, reviews}: AppProps): JSX.Element => {
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout authorizationStatus={authorizationStatus}/>}>
          <Route index element={<Main/>}/>

          <Route path={AppRoute.Login} element={<Login/>}/>

          <Route path={AppRoute.Offer} element={<OfferPage offers={offers} reviews={reviews}/>}/>
        </Route>

        <Route
          path='*'
          element={<PageNotExist/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
