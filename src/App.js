import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from "./About";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
  },
  {
    path: "/about",
    element: <About></About>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);