import ArrowButton from "@/components/arrow-button";
import { auth } from "@/db/firebase";
import title from "@/utils/title";
import { onAuthStateChanged } from "firebase/auth";
import { FastForward, LayoutDashboard, Maximize2Icon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Feature from "@/pages/(statics)/feature";
import ToolTip from "@/components/tooltip";

export default function Homepage() {
  const [authed, setAuthed] = useState(false);

  title("Homepage");

  onAuthStateChanged(auth, (user) => {
    user ? setAuthed(true) : setAuthed(false);
  });

  return (
    <>
      <section className="sm:mt-20 mt-6 sm:min-h-[calc(100vh_-_150px)] min-h-screen relative">
        <div className="container">
          <div className="">
            <h1 className="max-w-prose">
              Dodev empowers developers to transform their{" "}
              <span className="text-gold underline">ideas</span> into{" "}
              <span className="text-gold underline">reality</span>
            </h1>
            {authed ? (
              <>
                <p className="max-w-prose text-xl py-4 text-muted-foreground">
                  Don't ignore ideas, <b>cultivate them!</b> Convert those
                  sparks of inspiration into actionable plans.
                </p>
                <Link to="/dashboard">
                  <ArrowButton size="lg" variant="defaultOutline">
                    Dashboard
                  </ArrowButton>
                </Link>
              </>
            ) : (
              <>
                <p className="max-w-prose text-xl py-4 text-muted-foreground">
                  Sign up for Dodev and unleash the power of AI-driven
                  development planning. And create your first idea.
                </p>
                <Link to="/auth">
                  <ArrowButton
                    className="me-2 mb-2"
                    size="lg"
                    variant="defaultOutline"
                  >
                    Sign in
                  </ArrowButton>
                </Link>
                <Link to="/auth">
                  <ArrowButton size="lg" variant="default">
                    Create an account
                  </ArrowButton>
                </Link>
              </>
            )}
          </div>
        </div>
        <img className="wave-bottom" src="/images/wave.png" />
      </section>
      {/* Features */}
      <section className="dark:bg-gray-900 bg-gray-200 min-h-screen py-6">
        <div className="container text-center">
          <h3 className="uppercase m-auto text-5xl faded w-fit my-20 pb-6">
            Features
          </h3>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_380px))] justify-center gap-6 py-2">
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
