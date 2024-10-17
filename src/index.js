import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Lesson6 from "./lesson6";
import Lesson61 from "./lesson6.1";

// yarn add react-router-dom
// npm install react-router-dom

// router-dom DOM routing API

// angular
// router-outler
// RoutingModule -> routes = [ { path: '/', component: ... } ]

// react

// Router and array of routes
// Router - object which support routing

// createMemoryRoutes -> overwrites history and creates a custom one
// createHashRouter -> hasing

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader: () => {
      // backend call - get data
      // jwt token check
      // jwt update
      // ...
      console.log("first");
      return 999; // backend return
    }, // loader function
    element: <App />,
    children: [
      {
        id: "mainRouteChild",
        path: "child/:id2", // param
        element: <Lesson6 />,
        children: [
          {
            id: "mainRouteChildNested",
            path: ":id3",
            element: <Lesson6 />,
          },
        ],
      },
      {
        path: "child2",
        element: <Lesson61 />,
      },
    ],
  },
  {
    path: "/*",
    element: <h1>not found</h1>,
  },
]); // object for initializing, management routes

// RouterProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
