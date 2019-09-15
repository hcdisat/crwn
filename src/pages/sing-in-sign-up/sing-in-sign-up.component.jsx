import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import SignIn from "../../components/sign-in/sign-in.component";
import "./sing-in-sign-up.styles.scss";

const SignInSignUpPage = ({ history }) => {
  if (!auth.currentUser)
    return (
      <div className="sign-in-sign-up">
        <SignIn />
      </div>
    );

  history.push("/");
  return null;
};

export default withRouter(SignInSignUpPage);
