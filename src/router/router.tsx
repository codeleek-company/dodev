import "@/styles/main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Error from "./error-page";
import Dashboard from "@/pages/(user)/dashboard";
import Projects from "@/pages/(user)/projects";
import Ideas from "@/pages/(user)/ideas";
import Roadmap from "@/pages/(user)/roadmap";
import Auth from "../pages/(auth)/auth";
import Nav from "@/components/nav";
import Pricing from "@/pages/(auth)/pricing";
import Homepage from "@/pages/(statics)/homepage";
import Temp from "@/pages/(user)/temp";
import Profile from "@/pages/(user)/profile";

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
    path: "/dashboard/temp",
    element: <Temp />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/profile",
    element: <Profile />,
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
