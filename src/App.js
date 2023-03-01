import './App.css';
import React from 'react';
import BookList from './APPtwo';


function App() {
  const myBook = {
    title: `World’s Best Inspirational Books to Change Your Life` ,
    author: `Joseph Murphy Dale Carnegie, Napoleon Hill` ,
    imgSrc: `https://m.media-amazon.com/images/I/81BfYDO0kSL._AC_UY327_FMwebp_QL65_.jpg`
  }
  
  return (
    <BookList {...myBook}>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, inventore?</p>
    </BookList>
  );
}

export default App;
