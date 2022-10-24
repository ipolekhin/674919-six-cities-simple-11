import {render, screen} from '@testing-library/react';
import App from './app';

const countPlaces = 5;

test('Renders app-component', () => {
  render(
    <App
      countPlaces={countPlaces}
    />
  );
  const textElement = screen.getByText(/Hello, world!/i);
  expect(textElement).toBeInTheDocument();
});
