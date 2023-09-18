import "@/styles/main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
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
import Profile from "@/pages/(auth)/profile";

const nav = (el: JSX.Element) => {
  return (
    <>
      <Nav />
      {el}
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={nav(<Outlet />)} errorElement={nav(<Error />)}>
      <Route index element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/ideas" element={<Ideas />} />
      <Route path="/dashboard/temp" element={<Temp />} />
      <Route path="/dashboard/roadmap" element={<Roadmap />} />
      <Route path="/dashboard/projects" element={<Projects />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/pricing" element={<Pricing />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <RouterProvider router={router} />
    </ThemeProvider>
    <Toaster />
  </React.StrictMode>
);
