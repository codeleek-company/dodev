import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/main.css";
import Homepage from "@/pages/homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./error-page";
import Dashboard from "@/pages/(user)/dashboard";
import { ThemeProvider } from "@/components/theme-provider";
import Projects from "@/pages/(user)/projects";
import Ideas from "@/pages/(user)/ideas";
import { Toaster } from "@/components/ui/toaster";
import Roadmap from "@/pages/(user)/roadmap";
import Login from "../pages/(auth)/login";
import Nav from "@/components/nav";
import Register from "@/pages/(auth)/register";

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
  {
    path: "/dashboard/projects",
    element: <Projects />,
  },
  {
    path: "/dashboard/ideas",
    element: <Ideas />,
  },
  {
    path: "/dashboard/roadmap",
    element: <Roadmap />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <Nav />
      <RouterProvider router={router} />
    </ThemeProvider>
    <Toaster />
  </React.StrictMode>
);
