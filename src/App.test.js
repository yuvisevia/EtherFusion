// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EtherFusion title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EtherFusion/i);
    expect(titleElement).toBeInTheDocument();
});
