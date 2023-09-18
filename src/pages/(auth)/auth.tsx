import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import title from "@/utils/title";
import $ from "@/utils/jquery";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/db/firebase";

interface SignUpPostForm extends HTMLElement {
  mail: HTMLInputElement;
  fullname: HTMLInputElement;
  pwd: HTMLInputElement;
  submit: HTMLInputElement;
}

import { useEffect, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import signInWithGoogle from "@/db/google";
import signInWithGithub from "@/db/github";

export default function Auth() {
  const [access, setAccess] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setAccess(false) : "";
    });
  }, []);

  title("Auth");

  function message(context: string) {
    const messageClassName = "bg-red-600 rounded-md text-white p-3 my-2";
    $("#message").className = messageClassName;
    $("#message").innerHTML = context;
  }

  function signIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const postForm = $("#sign-in") as SignUpPostForm;

    const mail = postForm.mail.value;
    const pwd = postForm.pwd.value;
    postForm.submit.innerHTML = "Loading...";

    console.log(mail, pwd);

    signInWithEmailAndPassword(auth, mail, pwd)
      .then(() => window.location.replace("/"))
      .catch((e) => {
        message(e.message);
      });
  }

  function signUp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const postForm = $("#sign-up") as SignUpPostForm;

    const mail = postForm.mail.value;
    // const fullname = $("#sign-up").fullname.value;
    postForm.submit.innerHTML = "Loading...";
    const pwd = postForm.pwd.value;

    createUserWithEmailAndPassword(auth, mail, pwd)
      .then(() => window.location.replace("/"))
      .catch((e) => {
        message(e.message);
      });
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
          className="bg-muted w-[412px] m-auto mt-4 p-3 rounded-md"
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
          <div className="flex justify-evenly mt-4">
            <img
              src="/images/search.png"
              className="p-2 border-white h-24 w-24 cursor-pointer"
              alt="Google"
            />
            <img
              src="/images/github.png"
              className="p-2 border-black h-24 w-24 cursor-pointer"
              alt="Github"
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
            <Button className="w-full" name="submit">
              Sign up
            </Button>
          </form>
          <div className="grid grid-cols-2 gap-1 justify-evenly mt-4">
            <Button
              variant={"ghost"}
              className="h-full"
              onClick={signInWithGithub}
            >
              <img src="/images/github.png" alt="Github" width={60} />
            </Button>
            <Button
              variant={"ghost"}
              onClick={signInWithGoogle}
              className="h-full"
            >
              <img src="/images/search.png" alt="Google" width={60} />
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </>
  ) : (
    <div className="flex justify-center items-center h-[60vh] text-2xl flex-col">
      No Access
      <Link to="/">Homepage</Link>
    </div>
  );
}
