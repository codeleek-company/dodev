export default function handleError(errorCode: string) {
  let errorString = "";
  switch (errorCode) {
    case "auth/email-already-exists":
      errorCode = "Email already exists";
      break;
    case "auth/id-token-expired":
    case "auth/id-token-revoked":
    case "auth/uid-already-exists":
      errorCode = "Error happened: Please try again";
      break;
    case "auth/invalid-email":
      errorString = "Invalid Email";
      break;
    case "auth/user-not-found":
      errorString = "User Not Found";
      break;
    case "auth/invalid-login-credentials":
      errorString = "The Email or The Password Is Incorrect";
      break;
    case "auth/email-already-in-use":
      errorString = "Email Already In Use";
      break;
    case "auth/weak-password":
      errorString = "Weak Password";
      break;
    case "auth/missing-password":
      errorString = "Please Provide a Password";
      break;
    case "auth/too-many-requests":
      errorString = "Try again later";
      break;
    // case "auth/email-already-in-use":
    //   errorString = "Email Already In Use";
    //   break;
    // case "auth/email-already-in-use":
    //   errorString = "Email Already In Use";
    //   break;
    default:
      errorString = "Something went wrong";
  }
  return errorString;
}
