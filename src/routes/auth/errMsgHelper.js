export const errMsg = (code) => {
  switch (code) {
    case "auth/wrong-password":
      alert("Wrong password");
      break;
    case "auth/user-not-found":
      alert("None of the users found");
      break;
    case "auth/email-already-in-use":
      alert("Already associted with this email");
      break;
    case "auth/network-request-failed":
      alert("Check your Internet connection");
      break;
    case "auth/too-many-requests":
      alert("Too many requests");
      break;
    default:
      alert("Unknown error occured", code);
      break;
  }
}