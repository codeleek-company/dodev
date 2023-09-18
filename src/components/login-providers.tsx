import { Button } from "@/components/ui/button";
import { MouseEventHandler } from "react";

export default function Providers({
  signInWithGithub,
  signInWithGoogle,
}: {
  signInWithGithub: MouseEventHandler<HTMLButtonElement>;
  signInWithGoogle: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <>
      <Button
        variant={"different"}
        className="w-full"
        onClick={signInWithGithub}
      >
        Sign in with Github{" "}
        <img
          src="/images/github.png"
          alt="Github"
          className="ms-2"
          width={20}
        />
      </Button>
      <Button
        variant={"different"}
        onClick={signInWithGoogle}
        className="mt-2 w-full"
      >
        Sign in with Google{" "}
        <img
          src="/images/search.png"
          className="ms-2"
          alt="Google"
          width={20}
        />
      </Button>
    </>
  );
}
