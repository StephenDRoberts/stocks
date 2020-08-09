import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('react-chartjs-2', () => ({
  Line: () => null
}));

test('renders company summary', () => {
  const { getByTestId } = render(<App />);
  const summary = getByTestId("company-summary-page")
  expect(summary).toBeInTheDocument();
});
