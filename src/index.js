import React from 'react'
import { render } from 'react-dom'

import Library from './Library'

let bookList = [
  { "title": "Lord of the Rings", "author": "J. R. R. Tolkien" },
  { "title": "The Grapes of Wrath", "author": "John Steinbeck", "pages": 3765 },
  { "title": "Oh the places you'll go", "author": "Dr. Seuss", "pages": 453 }
];

render(
  <Library books={bookList} />,
  document.getElementById('root')
);
