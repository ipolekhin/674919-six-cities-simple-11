import Main from '../../pages/main/main';

type AppProps = {
  countPlaces: number;
}

const App = ({countPlaces}: AppProps): JSX.Element => <Main countPlaces={countPlaces}/>;

export default App;
