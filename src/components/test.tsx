import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { MoonStar, Sun } from "lucide-react";

import { useState } from "react";

import Commander from "@/components/commander";
import { globalSetTheme } from "./theme-provider";

export default function Nav() {
  const [light, changeLight] = useState(
    localStorage.getItem("theme") == "light"
  );

  function setLight() {
    globalSetTheme("light");
    localStorage.setItem("theme", "light");
    changeLight(true);
  }

  function setDark() {
    globalSetTheme("dark");
    localStorage.setItem("theme", "dark");
    changeLight(false);
  }

  return (
    <nav className="dark:bg-[#01030670] bg-[#eee]">
      <div className="container flex justify-between items-center py-4">
        <a href="/" className="text-lg font-bold">
          DoDev
        </a>
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-2">
            <NavigationMenuItem>
              <a href="/dashboard">Dashboard</a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Commander />
            </NavigationMenuItem>
            <NavigationMenuItem>
              {light ? (
                <MoonStar className="cursor-pointer" onClick={setDark} />
              ) : (
                <Sun className="cursor-pointer" onClick={setLight} />
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
