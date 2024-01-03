import React from "react";
import "./App.scss";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.dir("data ", data);
  }

  function onError(errors) {
    console.log("Error ", errors);
  }
  return (
    <div className="container my-4 app ">
      <form
        className="d-flex flex-column justify-content-center align-items-center form p-5"
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate
      >
        <div className="mb-4 d-flex flex-column justify-content-center align-items-start">
          <label className="m-1 label">userName</label>
          <input
            type="text"
            className="input border rounded-1 p-1 "
            {...register("username", {
              required: "Invalid Username",
              minLength: {
                value: 4,
                message: "Username must be 4 charcter at least.",
              },
              maxLength: {
                value: 10,
                message: "Username must be 10 charcter at most.",
              },
            })}
          />
        </div>
        <div className="mb-4 d-flex flex-column justify-content-center align-items-start">
          <label className="m-1 label">Email</label>
          <input
            type="email"
            className="input border rounded-1 p-1 "
            {...register("email", {
              required: false,
              pattern: {
                value: /.+@.+\..+/,
                message: "Foramt of Email is not valid",
              },
            })}
          />
        </div>
        <div className="mb-4 d-flex flex-column justify-content-center align-items-start">
          <label className="m-1 label">Year of Birth</label>
          <input
            type="number"
            className="input border rounded-1 p-1 "
            {...register("year", {
              min: { value: 1300, message: "Year must be 1300 at least" },
              max: { value: 1389, message: "Year must be 1389 at most" },
            })}
          />
        </div>
        <div className="mb-4 d-flex flex-column justify-content-center align-items-start">
          <label className="m-1 label">Password</label>
          <input
            type="password"
            className="input border rounded-1 p-1 "
            {...register("password")}
          />
        </div>
        <div className="mb-4 d-flex flex-column justify-content-center align-items-start">
          <label className="m-1 label">Confirm Password</label>
          <input
            type="password"
            className="input border rounded-1 p-1 "
            {...register("confirmPass")}
          />
        </div>
        <button type="submit" className="btn ">
          Submit
        </button>
      </form>
    </div>
  );
}
