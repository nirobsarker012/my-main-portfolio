import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <p>404 Not Found</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
