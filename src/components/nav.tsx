import { LogIn, User, MoonStar, Sun } from "lucide-react";
import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { auth } from "@/db/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { useEffect, useState } from "react";

import { globalSetTheme } from "@/components/theme-provider";

export default function Nav() {
  const [navData, setNavData] = useState({
    lighted: localStorage.getItem("theme") == "light",
    authed: false,
  });

  // const navData = {
  //   lighted: true,
  //   authed: false
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setNavData((prev) => {
        return { ...prev, authed: !!user };
      });

      return () => {
        unsubscribe();
      };
    });
  }, []);

  function setTheme(theme: "light" | "dark") {
    globalSetTheme(theme);
    localStorage.setItem("theme", theme);
    setNavData({
      ...navData,
      lighted: theme == "light",
    });
  }

  return (
    <nav className="dark:bg-[#080f18] bg-[#eee] h-[70px]">
      <div className="container flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-bold text-gold">
          DO
          <span className="[-webkit-text-stroke:_2px_var(--gold)]">DEV</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-2">
            <NavigationMenuItem>
              {navData.lighted ? (
                <MoonStar
                  className="cursor-pointer"
                  onClick={() => setTheme("dark")}
                />
              ) : (
                <Sun
                  className="cursor-pointer"
                  onClick={() => setTheme("light")}
                />
              )}
            </NavigationMenuItem>
            <NavigationMenuItem>
              {navData.authed ? (
                <Link to="/profile">
                  <User />
                </Link>
              ) : (
                <Link to="/auth">
                  <LogIn />
                </Link>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
