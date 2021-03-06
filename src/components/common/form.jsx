import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    console.log(errors);
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });

    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errMsg = this.validateProperty(input);
    if (errMsg) {
      errors[input.name] = errMsg;
    } else {
      delete errors[input.name];
    }

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(lbl) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {lbl}
      </button>
    );
  }

  renderInput(name, lbl, type) {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        error={errors[name]}
        lable={lbl}
        onChange={this.handleChange}
      ></Input>
    );
  }

  renderSelect(name, lbl, options) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        lable={lbl}
        value={data[name]}
        options={options}
        error={errors[name]}
        onChange={this.handleChange}
      ></Select>
    );
  }
}

export default Form;
