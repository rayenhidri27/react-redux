import { render, screen } from '@testing-library/react';
import App from './App';

test('Accueil text', () => {
  render(<App />);
  expect(screen.getByText("Accueil")).toBeInTheDocument();
});
