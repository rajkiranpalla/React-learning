import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import About from "./About";
import ErrorPage from "./ErrorPage";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Body></Body>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu></RestaurantMenu>
      },
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);