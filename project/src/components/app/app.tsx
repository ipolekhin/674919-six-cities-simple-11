import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import PageNotExist from '../../pages/page-not-exist/page-not-exist';

type AppProps = {
  countPlaces: number;
}

const App = ({countPlaces}: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<Main countPlaces={countPlaces}/>}
      />

      <Route
        path={AppRoute.Login}
        element={<Login/>}
      />

      <Route
        path={AppRoute.Offer}
        element={<Offer/>}
      />

      <Route
        path='*'
        element={<PageNotExist/>}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
