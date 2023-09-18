import { LogOut } from "lucide-react";
import { auth } from "@/db/firebase";
import { signOut } from "firebase/auth";
import { redirect } from "react-router-dom";

export default function Profile() {
  redirect("/");

  return (
    <div className="container mt-5">
      <a
        className="cursor-pointer"
        onClick={() => signOut(auth).then(() => window.location.replace("/"))}
      >
        <LogOut />
      </a>
    </div>
  );
}
