import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/main.css";
import Homepage from "@/pages/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
