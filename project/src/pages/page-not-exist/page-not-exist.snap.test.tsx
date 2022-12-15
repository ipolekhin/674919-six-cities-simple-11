import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import PageNotExist from './page-not-exist';
import HistoryRoute from '../../components/history-route/history-route';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {container} = render(
      <HistoryRoute history={history}>
        <PageNotExist/>
      </HistoryRoute>
    );

    expect(container).toMatchSnapshot();
  });
});
