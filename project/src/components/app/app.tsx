import {Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import OfferPage from '../../pages/offer/offer';
import PageNotExist from '../../pages/page-not-exist/page-not-exist';
import Layout from '../layout/layout';
import LoadingScreen from '../loading-screen/loading-screen.';
import {useAppSelector} from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

const App = (): JSX.Element => {
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout/>}>
          <Route index element={<Main/>}/>

          <Route path={AppRoute.Login} element={<Login/>}/>

          <Route path={AppRoute.Offer} element={<OfferPage/>}/>
        </Route>

        <Route
          path='*'
          element={<PageNotExist/>}
        />
      </Routes>
    </HistoryRouter>
  );
};

export default App;
