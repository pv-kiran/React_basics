import './App.css';
import React from 'react';
import BookList from './APPtwo';


function App() {
   const books = [
    {
      id:1 ,
      title: `World’s Best Inspirational Books to Change Your Life` ,
      author: `Joseph Murphy Dale Carnegie, Napoleon Hill` ,
      imgSrc: `https://m.media-amazon.com/images/I/81BfYDO0kSL._AC_UY327_FMwebp_QL65_.jpg`
    } ,
    {
      id: 2 ,
      title:  `Our Non-fairy Tale Life (Order Now & Get Author Signed Copy)` ,
      author: `by Rooprashi` ,
      imgSrc: `https://m.media-amazon.com/images/I/71aCBltKcqL._AC_UY327_FMwebp_QL65_.jpg`
    }
  ]  
 
  return (
    <React.Fragment>
        {
          books.map((book) => {
            return <BookList key={book.id} {...book}></BookList>
          })
        }
    </React.Fragment>
    
  );
}

export default App;
