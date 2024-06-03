import ArrowButton from "@/components/arrow-button";
import { auth } from "@/db/firebase";
import title from "@/utils/title";
import { onAuthStateChanged } from "firebase/auth";
import {
  Copy,
  Facebook,
  FastForward,
  LayoutDashboard,
  Maximize2Icon,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import dodevConfig from "@/config";
import { toast } from "@/utils/use-toast";
import Feature from "@/pages/(statics)/feature";
import ToolTip from "@/components/tooltip";

export default function Homepage() {
  const [authed, setAuthed] = useState(false);

  title("Homepage");

  onAuthStateChanged(auth, (user) => {
    user ? setAuthed(true) : setAuthed(false);
  });

  function copyLink() {
    navigator.clipboard.writeText(dodevConfig.siteLink);
    toast({
      variant: "default",
      title: "Link copied to clipboard",
    });
  }

  return (
    <>
      <section className="mt-20 h-[calc(100vh_-_150px)]">
        <div className="h-[60vh] container">
          <div className="">
            <h1 className=" text-gold">
              DO
              <span className="[-webkit-text-stroke:_2px_var(--gold)] text-transparent">
                DEV
              </span>
            </h1>
            <p className="text-2xl [font-family:_monospace]">
              Start your new journey with dodev to handle your tasks and
              projects
            </p>
            <div className="flex my-8 gap-4 flex-wrap">
              {authed ? (
                <Link to="/dashboard">
                  <ArrowButton size="xl" variant="defaultOutline">
                    Dashboard
                  </ArrowButton>
                </Link>
              ) : (
                <Link to="/auth">
                  <ArrowButton size="xl" variant="defaultOutline">
                    Sign up
                  </ArrowButton>
                </Link>
              )}
              <Link to="/pricing">
                <ArrowButton size="xl">Get an offer</ArrowButton>
              </Link>
            </div>
          </div>
          {/* Landing page Footer */}
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container flex items-center justify-between py-2">
            {/* Share site */}
            <div className="flex gap-2">
              <ToolTip hoverP="Twitter">
                <a
                  target="_blank"
                  href={`http://www.twitter.com/intent/tweet?url=${dodevConfig.siteLink}`}
                >
                  <Twitter className="cursor-pointer" />
                </a>
              </ToolTip>
              <ToolTip hoverP="Facebook">
                <a
                  target="_blank"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${dodevConfig.siteLink}`}
                >
                  <Facebook className="cursor-pointer" />
                </a>
              </ToolTip>
              <ToolTip hoverP="Copy link">
                <Copy onClick={copyLink} className="cursor-pointer" />
              </ToolTip>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="dark:bg-gray-900 bg-gray-200 min-h-screen py-6">
        <div className="container text-center">
          <h3 className="uppercase m-auto text-5xl faded w-fit my-20 pb-6">
            Features
          </h3>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] justify-center gap-6 py-2">
            <Feature
              icon={<FastForward />}
              title="Speed"
              desc="Dodev offers very high speed in this website. Because of the consistance maintainace of issues."
            />
            <Feature
              icon={<Maximize2Icon />}
              title="Scalability & Flexiblity"
              desc="Dodev gives the flexibility to customize everthing. In addition to the scalibilty of the projects."
            />
            <Feature
              icon={<LayoutDashboard />}
              title="Project management"
              desc={
                <>
                  Dodev gives you the ability to full illustrate the outline of
                  your project. And manage the{" "}
                  <ToolTip
                    className="text-blue-500"
                    hoverP="tasks (mini, seasonal), issues, features, and the design, with the prebuilt demos for (web, game, and app developers)"
                  >
                    ...
                  </ToolTip>
                </>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
