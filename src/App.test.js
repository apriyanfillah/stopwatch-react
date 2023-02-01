import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*
1. Test Toggle (Start dan Stop)
2. Test Interval (After 1 second, ditambah 1)
3. Test Reset
4. Test Toggle, Interval, Toggle, Interval
        0       1         1       1
        start   start     stop    stop
*/