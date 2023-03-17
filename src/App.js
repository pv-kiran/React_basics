import './App.css';
import React from 'react';

import { Routes , Route, useRoutes  } from 'react-router-dom';
import Home from './Router/Home';
import About from './Router/About';
import ContactList from './Router/ContactList';
import Router from './Router/Router';
import Contact from './Router/Contact';
import NewContact from './Router/NewContact';
import NotFound from './Router/NotFound';
import ContactLayout from './Router/ContactLayout';



function App() {

    let element = useRoutes([
      {
        path:'/',
        element: <Home></Home>
      } ,
      {
        path:'/about',
        element: <About></About>
      } ,
      {
        path:'/contact',
        element: <ContactLayout></ContactLayout> ,
        children: [
          {
             index:true ,
             element:<ContactList></ContactList>
          } ,
          {
             path: ':id' ,
             element: <Contact></Contact>
          } ,
          {
             path: 'new' ,
             element: <NewContact></NewContact>
          }
        ]
      }
    ])
    
    return (
      <React.Fragment>
        {/* <UseState></UseState> */}
        {/* <UseReducer></UseReducer>  */}
        {/* <CustomHooks></CustomHooks> */}
        <Router></Router>
        {element}
        {/* <Routes> */}
          {/* <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<ContactLayout></ContactLayout>}> 
            <Route index element={<ContactList></ContactList>}></Route>
            <Route path=':id' element={<Contact></Contact>}></Route>
            <Route path='new' element={<NewContact></NewContact>}></Route>
          </Route> */}
          {/* <Route path='/contact' element={<ContactList></ContactList>}></Route>
          <Route path='/contact/:id' element={<Contact></Contact>}></Route>
          <Route path='/contact/new' element={<NewContact></NewContact>}></Route> */}
          {/* <Route path='*' element={<NotFound></NotFound>}></Route> */}
        {/* </Routes> */}
      </React.Fragment>
    )
}

export default App;


// import BookList from './APPtwo';












{/* <ErrorExample></ErrorExample> */}
        {/* <UseState></UseState> */}
        {/* <UseStateArr></UseStateArr> */}
        {/* <UseStateObject></UseStateObject> */}
        {/* <UseStateCoounter></UseStateCoounter> */}
        {/* <UseEffect></UseEffect> */}
        {/* <UseEffectCleanup></UseEffectCleanup> */}
        {/* <UseEffectFetch></UseEffectFetch> */}
        {/* <ConditionalRendering></ConditionalRendering> */}
        {/* <ShortCiruit></ShortCiruit> */}
        {/* <ShortCircuitComplex></ShortCircuitComplex> */}
        {/* <ControlledInputs></ControlledInputs> */}
        {/* <MultipleInputs></MultipleInputs> */}
        {/* <UseRef></UseRef> */}
        {/* <Setup></Setup> */}
        {/* <UseReducer></UseReducer> */}
        {/* <PropDrilling></PropDrilling> */}
        {/* <UseContext></UseContext> */}
        {/* <CustomHooks></CustomHooks> */}






// import UseState from './Use-state/UseState';
// import UseReducer from './UseReducer/UseReducer';
// import CustomHooks from './CustomHooks/CustomHooks';










        // import ErrorExample from './Use-state/ErrorExample';
// import UseState from './Use-state/UseState';
// import UseStateArr from './Use-state/UseStateArr';
// import UseStateObject from './Use-state/UseStateObject';
// import UseStateCoounter from './Use-state/UseStateCoounter';

// import UseEffect from './Use-Effect/UseEffect';
// import UseEffectCleanup from './Use-Effect/UseEffectCleanup';
// import UseEffectFetch from './Use-Effect/UseEffectFetch';
// import ConditionalRendering from './Use-Effect/ConditionalRendering';
// import ShortCiruit from './Use-Effect/ShortCiruit';
// import ShortCircuitComplex from './Use-Effect/ShortCircuitComplex';
// import ControlledInputs from './Forms/ControlledInputs';
// import MultipleInputs from './Forms/MultipleInputs';
// import UseRef from './UseRef/UseRef';
// import Setup from './UseReducer/Setup';
// import UseReducer from './UseReducer/UseReducer';
// import PropDrilling from './PropDrilling/PropDrilling';
// import UseContext from './PropDrilling/UseContext';
// import CustomHooks from './CustomHooks/CustomHooks';














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