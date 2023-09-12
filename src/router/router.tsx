import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/main.css";
import Homepage from "@/pages/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./error-page";
import Footer from "@/components/Footer";
// import Nav from "@/components/Nav";
import Dashboard from "@/pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Nav /> */}
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
