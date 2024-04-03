import React, { lazy, Suspense , useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import ErrorPage from "./ErrorPage";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import UserContext from "../context/UserContext";
import { Provider } from "react-redux";
import appStore from '../redux/appStore'
import Cart from "./Cart";

const Grocery = lazy(() => import("./Grocery"));
const About = lazy(() => import("./About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Akshay Saini",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <Header />
      <Outlet/>
      <Footer />
    </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart/>
      },
    ]
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);