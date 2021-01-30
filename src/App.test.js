import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import FirstReactApp from './App';

test('renders learn react link', () => {
  const { getByText } = render(<FirstReactApp/>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render',() => {
    const div = document.createElement('div');
    ReactDOM.render(<FirstReactApp/>, div);
    ReactDOM.unmountComponentAtNode(div)
})
