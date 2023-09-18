import ArrowButton from "@/components/arrow-button";
import { auth } from "@/db/firebase";
import title from "@/utils/title";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [authed, setAuthed] = useState(false);

  title("Homepage");

  onAuthStateChanged(auth, (user) => {
    user ? setAuthed(true) : setAuthed(false);
  });

  return (
    <section className="landing">
      <div className="mt-20 h-[60vh] container">
        <div className="">
          <h1 className=" text-gold">
            DO
            <span className="[-webkit-text-stroke:_2px_var(--gold)] text-transparent">
              DEV
            </span>
          </h1>
          <p className="text-2xl [font-family:_monospace]">
            Start your new journey with dodev to handle your tasks and projects
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
      </div>
    </section>
  );
}
