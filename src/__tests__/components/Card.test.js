import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Card from '../../Card';

test('should render Card corectly', () => {
  const component = render(<Card title="Test title" desc="Test desc" buttonText="Test button text" data={['test1', 'test2', 'test3', 'test3', 'test4', 'test1']} />);
  const erdem = component.container.querySelector('div');
  console.log(prettyDOM(erdem));
  // expect(title).toHaveTextContent(
  //   'Test title'
  // )
});