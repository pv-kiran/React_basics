import './App.css';
import React from 'react';
import UseStateCoounter from './Use-state/UseStateCoounter';
// import ErrorExample from './Use-state/ErrorExample';
// import UseState from './Use-state/UseState';
// import UseStateArr from './Use-state/UseStateArr';
// import UseStateObject from './Use-state/UseStateObject';


function App() {
    
    return (
      <div className='container'>
        {/* <ErrorExample></ErrorExample> */}
        {/* <UseState></UseState> */}
        {/* <UseStateArr></UseStateArr> */}
        {/* <UseStateObject></UseStateObject> */}
        <UseStateCoounter></UseStateCoounter>
      </div>
    )
}

export default App;


// import BookList from './APPtwo';



























// const books = [
//     {
//       id:1 ,
//       title: `World’s Best Inspirational Books to Change Your Life` ,
//       author: `Joseph Murphy Dale Carnegie, Napoleon Hill` ,
//       imgSrc: `https://m.media-amazon.com/images/I/81BfYDO0kSL._AC_UY327_FMwebp_QL65_.jpg`
//     } ,
//     {
//       id: 2 ,
//       title:  `Our Non-fairy Tale Life (Order Now & Get Author Signed Copy)` ,
//       author: `by Rooprashi` ,
//       imgSrc: `https://m.media-amazon.com/images/I/71aCBltKcqL._AC_UY327_FMwebp_QL65_.jpg`
//     }
//   ]  
 
//   return (
//     <React.Fragment>
//         {
//           books.map((book) => {
//             return <BookList key={book.id} {...book}></BookList>
//           })
//         }
//     </React.Fragment>
    
//   );