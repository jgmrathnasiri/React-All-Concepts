import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class Login extends Component {
  //username = React.createRef();
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  handleLogin = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });

    if (errors) return;

    console.log("Submitted..!");
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errMsg = this.validateProperty(input);
    if (errMsg) {
      errors[input.name] = errMsg;
    } else {
      delete errors[input.name];
    }

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
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
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
