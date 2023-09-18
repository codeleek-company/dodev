import { LogOut } from "lucide-react";
import { auth } from "@/db/firebase";
import { signOut } from "firebase/auth";

export default function Profile() {
  return (
    <div className="container mt-5">
      <a className="cursor-pointer" onClick={() => signOut(auth)}>
        <LogOut />
      </a>
    </div>
  );
}
