import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import title from "@/utils/title";
import $ from "@/utils/jquery";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/db/firebase";

interface SignUpPostForm extends HTMLElement {
  mail: HTMLInputElement;
  fullname: HTMLInputElement;
  pwd: HTMLInputElement;
  submit: HTMLInputElement;
}

import { useEffect, FormEvent, useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import signInWithGoogle from "@/db/google";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import handleError from "@/db/error-handler";
import Providers from "@/components/login-providers";

export default function Auth() {
  const [access, setAccess] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      // user ? setAccess(false) : "";
    });
    searchParams.get("message")
      ? message(searchParams.get("message") as string)
      : "";
  }, [searchParams]);

  title("Auth");

  function message(context: string, warning = true) {
    const messageClassName = `${
      warning ? "bg-red-600" : "bg-blue-600"
    } rounded-md text-white p-3 my-2`;
    $("#message").className = messageClassName;
    $("#message").innerHTML = context;
  }

  const provider = new GithubAuthProvider();

  function signInWithGithub() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = (credential as { accessToken: string }).accessToken;
        console.log(token);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode == "auth/account-exists-with-different-credential") {
          message("Email exists");
        }
      });
  }

  function signIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const postForm = $("#sign-in") as SignUpPostForm;

    const mail = postForm.mail.value;
    const pwd = postForm.pwd.value;
    postForm.submit.innerHTML = "Loading...";

    signInWithEmailAndPassword(auth, mail, pwd)
      .then((userCredential) => {
        // setAccess(false);
        userCredential.user.emailVerified
          ? setAccess(false)
          : message(
              "Please verify your email. <a onclick='message(12)'>Send email verification</a>",
              false
            );
        postForm.submit.innerHTML = "Sign in";
      })
      .catch((error) => {
        console.log(error.code);
        message(handleError(error.code));
        postForm.submit.innerHTML = "Sign in";
      });
  }

  function signUp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const postForm = $("#sign-up") as SignUpPostForm;

    const mail = postForm.mail.value;
    const fullname = postForm.fullname.value;
    postForm.submit.innerHTML = "Loading...";
    const pwd = postForm.pwd.value;

    fullname
      ? createUserWithEmailAndPassword(auth, mail, pwd)
          .then((userCredential) => {
            // setAccess(false)
            // userCredential.user.sendEmailVerification()
            sendEmailVerification(userCredential.user);
            // auth.signOut()
            updateProfile(userCredential.user, {
              displayName: fullname,
            });
            signOut(auth);
            postForm.submit.innerHTML = "Sign up";
          })
          .catch((error) => {
            message(handleError(error.code));
            postForm.submit.innerHTML = "Sign up";
          })
      : message("Please providor your fullname");
  }

  return access ? (
    <>
      <Tabs defaultValue="sign-in" className="w-full pt-10">
        <TabsList className="max-w-[410px] m-auto grid [grid-template-columns:_repeat(auto-fit,_minmax(150px,_1fr))]">
          <TabsTrigger value="sign-in">Sign in</TabsTrigger>
          <TabsTrigger value="sign-up">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent
          value="sign-in"
          className="bg-muted max-w-[412px] m-auto mt-4 p-3 rounded-md"
        >
          <h2>Sign in</h2>
          <form action="POST" id="sign-in" onSubmit={signIn}>
            <div id="message"></div>
            <Input placeholder="Email" name="mail" />
            <Input
              placeholder="Password"
              type="password"
              className="my-2"
              name="pwd"
            />
            <Button className="w-full" name="submit">
              Sign in
            </Button>
          </form>
          <div className="mt-6">
            <Providers
              signInWithGithub={signInWithGithub}
              signInWithGoogle={signInWithGoogle}
            />
          </div>
        </TabsContent>
        <TabsContent
          value="sign-up"
          className="bg-muted max-w-[412px] m-auto mt-4 p-3 rounded-md"
        >
          <h2>Sign up</h2>
          <form action="POST" id="sign-up" onSubmit={signUp}>
            <div id="message"></div>
            <Input placeholder="Email" name="mail" />
            <Input placeholder="Full name" className="mt-2" name="fullname" />
            <Input
              placeholder="Password"
              type="password"
              className="my-2"
              name="pwd"
            />
            <Button
              className="w-full transition-all duration-300"
              name="submit"
            >
              Sign up
            </Button>
          </form>
          <div className="mt-6">
            <Providers
              signInWithGithub={signInWithGithub}
              signInWithGoogle={signInWithGoogle}
            />
          </div>
        </TabsContent>
      </Tabs>
    </>
  ) : (
    <Navigate
      to={
        searchParams.get("redirect")
          ? (searchParams.get("redirect") as string)
          : "/dashboard"
      }
      replace={true}
    />
  );
}
