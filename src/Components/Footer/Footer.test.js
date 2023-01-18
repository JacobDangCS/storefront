import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    test('renders as expected', () => {
        render(<Footer/>);

        let footer = screen.getByText('&copy2023;CodeFellows');
        expect(footer).toBeTruthy();
        expect(footer).toBeInTheDocument();
    });
});