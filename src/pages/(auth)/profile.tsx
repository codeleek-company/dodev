import { LogOut, Mail, User } from "lucide-react";
import { auth } from "@/db/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import $ from "@/utils/jquery";
import Sure from "@/components/sure";

export default function Profile() {
  onAuthStateChanged(auth, () => {
    $("#email").innerHTML = auth.currentUser?.email as string;
    $("#display-name").innerHTML = auth.currentUser?.displayName as string;
  });

  return (
    <section className="mt-5">
      <div className="bg-muted mx-5 p-6 flex flex-col gap-5 rounded-md">
        <div>
          <User
            className="p-2 bg-background rounded-full"
            width={40}
            height={40}
          />
          <span className="ps-2" id="display-name">
            Loading
          </span>
        </div>
        <div>
          <Mail
            className="p-2 bg-background rounded-full"
            width={40}
            height={40}
          />
          <span className="ps-2" id="email">
            Loading
          </span>
        </div>
        <div>{/* <img src={auth.currentUser?.photoURL} alt="" /> */}</div>
        <Sure continueFunc={() => signOut(auth)}>
          <a className="cursor-pointer">
            <LogOut
              className="p-2 bg-background rounded-full"
              width={40}
              height={40}
            />
            <span className="ps-2">Sign out</span>
          </a>
        </Sure>
      </div>
    </section>
  );
}
