import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import auth from "../../services/auth-service";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSumit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords do not match!");
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(email, password, displayName);
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (ex) {
      console.log(ex.message);
    }
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSumit}>
          <FormInput
            type="text"
            name="displayName"
            onChange={this.handleChange}
            value={this.state.displayName}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            value={this.state.confirmPassword}
            label="Confirm Password"
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
