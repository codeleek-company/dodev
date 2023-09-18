import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/db/firebase";

const provider = new GoogleAuthProvider();

export default function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = (credential as { accessToken: string }).accessToken;
      console.log(token);
    })
    .catch((error) => {
      const errorCode = error.code;

      console.log(errorCode);
    });
}
