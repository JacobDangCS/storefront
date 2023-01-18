import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    test('renders as expected', () => {
        render(<Header/>);

        let header = screen.getByTestId('header');
        expect(header).toHaveTextContent('Our Store');
    });
});