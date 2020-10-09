import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import Global from "./global.js";

function App() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input
  function Form({ label, type, options }) {
    if (type === "select") {
      let opt = options.split(" ");
      return (
        <div className="stat-card">
          <div className="stat-line">
            <strong>{label}</strong>
          </div>
          <select name={label} ref={register({ required: true })}>
            {opt.map((op) => (
              <option value={op}>{op}</option>
            ))}
          </select>
        </div>
      );
    }
    return (
      <div className="stat-card">
        <div className="stat-line">
          <strong>{label}</strong>
        </div>
        <input
          type={type}
          placeholder={label}
          name={label}
          ref={register({ required: true, maxLength: 80 })}
        />
      </div>
    );
  }
  return (
    <div className="first">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form label="First name" type="text" />
        <Form label="Last name" type="text" />
        <Form label="Title" type="select" options="Choose Mr Mrs Miss" />
        <Form label="Email" type="text" />
        <Form label="Mobile number" type="text" />
        <Form label="Your message" type="textarea" />
        <input type="submit" />
      </form>
      <Global />
    </div>
  );
}
export default App;
