import {Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import OfferPage from '../../pages/offer-page/offer-page';
import PageNotExist from '../../pages/page-not-exist/page-not-exist';
import Layout from '../layout/layout';
import HistoryRoute from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {useEffect} from 'react';
import {fetchOffersAction} from '../../store/data/api';
import {useAppDispatch} from '../../hooks';
import {name} from 'faker';
import {makeFakeReviews} from '../../utils/mocks';

const reviews = makeFakeReviews();
// console.log('---reviews---');
// console.log(reviews);

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction());
    console.log(name.title());
  }, []);

  return (
    <HistoryRoute history={browserHistory}>
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
    </HistoryRoute>
  );
};

export default App;
