import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "./Components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contacts/Contact.jsx";
import ErrorPage from "./Components/ErrorPage404/ErrorPage.jsx";
import ResturantMenu from "./Components/Resturantmenu/ResturantMenu.jsx";
import Body from "./Components/Body/Body.jsx";
// import Grocery from "./Components/Grocery/Grocery.jsx";
const Grocery = lazy(() => import("./Components/Grocery/Grocery"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resid",
        element: <ResturantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
