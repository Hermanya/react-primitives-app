import React from 'react';
import { render } from 'react-sketchapp';
import App from './App.js';
export default () => {
  render(<App />, context.document.currentPage());
};
