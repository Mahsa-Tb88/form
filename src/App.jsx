import React from "react";
import "./App.scss";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState } = useForm({
    defaultValues: {
      username: "",
      email: "",
      year: 1340,
      password: "",
      confirmPass: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  const { errors } = formState;
  function onSubmit(data) {
    console.log("data ", data);
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
            className={`input  rounded-1 p-1  ${
              errors.username ? "isInvalid" : ""
            }`}
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
          {errors.username && (
            <span className="error">{errors.username.message}</span>
          )}
        </div>
        <div className="mb-4 d-flex flex-column justify-content-center align-items-start">
          <label className="m-1 label">Email</label>
          <input
            type="email"
            className={`input  rounded-1 p-1  ${
              errors.email ? "isInvalid" : ""
            }`}
            {...register("email", {
              required: false,
              pattern: {
                value: /.+@.+\..+/,
                message: "Foramt of Email is not valid",
              },
              disabled: watch("year") < 1345,
            })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-4 d-flex flex-column justify-content-center align-items-start">
          <label className="m-1 label">Year of Birth</label>
          <input
            type="number"
            className={`input  rounded-1 p-1  ${
              errors.year ? "isInvalid" : ""
            }`}
            {...register("year", {
              min: { value: 1300, message: "Year must be 1300 at least" },
              max: { value: 1389, message: "Year must be 1389 at most" },
              valueAsNumber: true,
            })}
          />
          {errors.year && <span className="error">{errors.year.message}</span>}
        </div>
        <div className="mb-4 d-flex flex-column justify-content-center align-items-start">
          <label className="m-1 label">Password</label>
          <input
            type="password"
            className={`input  rounded-1 p-1  ${
              errors.password ? "isInvalid" : ""
            }`}
            {...register("password", {
              required: "You Must Enter the Password",
              minLength: {
                value: 8,
                message: "Your Password Must Be 8 Characters At Least",
              },
            })}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
        </div>
        <div className="mb-4 d-flex flex-column justify-content-center align-items-start">
          <label className="m-1 label">Confirm Password</label>
          <input
            type="password"
            className={`input  rounded-1 p-1  ${
              errors.confirmPass ? "isInvalid" : ""
            }`}
            {...register("confirmPass", {
              required: "You Must Enter Password",
              validate(value) {
                if (watch("password") !== value) {
                  return "Confirm Password Is Not Equel To Password";
                }
              },
            })}
          />
          {errors.confirmPass && (
            <span className="error">{errors.confirmPass.message}</span>
          )}
        </div>
        <button type="submit" className="btn ">
          Submit
        </button>
      </form>
    </div>
  );
}
