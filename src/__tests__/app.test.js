import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../Store/store';

describe('App integration', () => {
  test('renders products as expected', () => {
    render(
      <Provider store={store}>
        <App/>
      </Provider>
    );

      let electronics = screen.getByTestId('category-0');
      let food = screen.getByTestId('category-1');
      let clothing = screen.getByTestId('category-2');

      expect(electronics).toHaveTextContent('Electronics');
      expect(food).toHaveTextContent('Food');
      expect(clothing).toHaveTextContent('Clothing');

      fireEvent.click(electronics);
      let tv = screen.getByTestIdId('product-0');
      let radio = screen.getByTestIdId('product-1');
      
      expect(tv).toHaveTextContent('TV');
      expect(radio).toHaveTextContent('Radio');
  });
});