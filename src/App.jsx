



import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";







// import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './routes/layout';
// import NotFoud from "./routes/notfound";
import Home from './routes/home';
import Products from './routes/products';
import Login from './routes/login';
import Contact from './routes/contact';

import About from './routes/about';
import Product from './routes/product';

import {LanguageProvider}  from './context/context';
import FavoriteMoviesList from './routes/favorit';

import { Provider } from 'react-redux'
import { store } from './storetoolkit/store';

import Dashbord from './routes/dashbord'



const App = () => {

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          
          path: "/products",
          element: <Products />,
       
         
        },
       

        {
          path: "/login",
          element: (
           
              <Login />
           
          ),
        },
        {
          path: "/contact",
          element: <Contact />,
          // lazy: () => import("./routes/Contact"),
        },






        {path: "/favorit",
        element: <FavoriteMoviesList />,
      },








        {
          path: "/about",
          element: <About />,
        },

        {
          path: "/dashbord",
          element: <Dashbord />,
        },
        {
          path: "/product/:productID",
          element: <Product />,
        },
      
       
       
        
      ],
    },
  ]);

  return(
    <Provider store={store}>
    <LanguageProvider>
      <RouterProvider router={routes} />;
    </LanguageProvider>
    </Provider>
)



  
};

export default App;
























































































// import  Header  from "./component/header/header";
// import AboutUs from './component/about/about';
// import Skills from './component/skills/skills';
// import Portfolio from "./component/portfolio/portfolio";
// import  Form  from './component/form/form';
// import Todolist from './component/todolist/todolist';




  // return (
  //   <>
  //  <Header/>
  //  <div className='container'>
  //  <AboutUs/>
  //  </div>
  //  <Skills/>
  //  <div className='container' >
  //  <Portfolio/>
  //  </div>
  //  <Form/>
  //  <TodoList/>
  //   </>
  // )











// // import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from './routes/layout';
// // import NotFoud from "./routes/notfound";
// import Home from './routes/home';
// import Products from './routes/products';
// import Login from './routes/login';
// import Contact from './routes/contact';

// import About from './routes/about';
// import Product from './routes/product';

// import {LanguageProvider}  from './context/context';
// import FavoriteMoviesList from './routes/favorit';

// import { Provider } from 'react-redux'
// import { store } from './storetoolkit/store';




    // const routes = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
    
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />,
  //       },
  //       {
          
  //         path: "/products",
  //         element: <Products />,
       
         
  //       },
       

  //       {
  //         path: "/login",
  //         element: (
           
  //             <Login />
           
  //         ),
  //       },
  //       {
  //         path: "/contact",
  //         element: <Contact />,
  //         // lazy: () => import("./routes/Contact"),
  //       },import Dashbord from './routes/dashbord';







  //       {path: "/favorit",
  //       element: <FavoriteMoviesList />,
  //     },








  //       {
  //         path: "/about",
  //         element: <About />,
  //       },
  //       {
  //         path: "/product/:productID",
  //         element: <Product />,
  //       },
      
       
       
        
  //     ],
  //   },
  // ]);

//   return(
//     <Provider store={store}>
//     <LanguageProvider>
//       <RouterProvider router={routes} />;
//     </LanguageProvider>
//     </Provider>
// )
