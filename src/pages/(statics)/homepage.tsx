import ArrowButton from "@/components/arrow-button";
import { Button } from "@/components/ui/button";
import { auth } from "@/db/firebase";
import title from "@/utils/title";
import { onAuthStateChanged } from "firebase/auth";
import { Copy, Facebook, Lightbulb, Twitter } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import dodevConfig from "@/config";
import { toast } from "@/utils/use-toast";

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
        {/* Landing page Footer */}
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="container flex items-center justify-between py-2">
          <Button variant={"ghost"}>
            Share your feed <Lightbulb />
          </Button>
          {/* Links to share */}
          <div className="flex gap-2">
            <a
              target="_blank"
              href={`http://www.twitter.com/share?url=${dodevConfig.siteLink}`}
            >
              <Twitter className="cursor-pointer" />
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/sharer/sharer.php?u=${dodevConfig.siteLink}`}
            >
              <Facebook className="cursor-pointer" />
            </a>
            <Copy onClick={copyLink} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
}
