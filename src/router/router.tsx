import "@/styles/main.css";
import { StrictMode } from "react";
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
import auth from "./require-auth";

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
      <Route path="/dashboard" element={auth(<Dashboard />)} />
      <Route path="/dashboard/ideas" element={auth(<Ideas />)} />
      <Route path="/dashboard/temp" element={auth(<Temp />)} />
      <Route path="/dashboard/roadmap" element={auth(<Roadmap />)} />
      <Route path="/dashboard/projects" element={auth(<Projects />)} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/profile" element={auth(<Profile />)} />
      <Route path="/pricing" element={<Pricing />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <RouterProvider router={router} />
    </ThemeProvider>
    <Toaster />
  </StrictMode>
);
