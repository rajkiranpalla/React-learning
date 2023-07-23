import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import ErrorPage from "./ErrorPage";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";

const Grocery = lazy(() => import("./Grocery"));
const About = lazy(() => import("./About"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
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
        element: <Body/>
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>...loading</h1>}>
          <About/>
        </Suspense>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>...loading</h1>}><Grocery/></Suspense>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      },
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);