import React, { Component } from "react";
import Input from "./common/input";

class Login extends Component {
  //username = React.createRef();
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  validate = () => {
    const { account } = this.state;
    const errors = {};

    if (account.username.trim() === "") {
      errors.username = "Username is required...!";
    }

    if (account.password.trim() === "") {
      errors.password = "Password is required...!";
    }

    return Object.keys(errors).length > 0 ? errors : {};
  };

  handleLogin = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors });

    if (errors) return;

    console.log("Submitted..!");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
          <Input
            name="username"
            value={account.username}
            error={errors.username}
            lable="Username"
            onChange={this.handleChange}
          ></Input>
          <Input
            name="password"
            value={account.password}
            error={errors.password}
            lable="Password"
            onChange={this.handleChange}
          ></Input>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
