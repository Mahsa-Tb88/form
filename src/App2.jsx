import React from "react";
import { useForm } from "react-hook-form";

export default function App2() {
  const { handleSubmit, register, setValue, getValues, formState, reset } =
    useForm({
      defaultValues: {
        name: "Mahsa",
        family: "Tabesh",
      },
    });
  async function onSubmit() {
    console.log("Dirty: ", dirtyFields);
    console.log("Touched: ", touchedFields);
    console.log("Submit Count: ", submitCount);

    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
  }

  function onError() {
    console.log("Dirty: ", dirtyFields);
    console.log("Touched: ", touchedFields);
    console.log("Submit Count: ", submitCount);
  }
  const {
    isDirty,
    isValid,
    isSubmitted,
    isSubmitting,
    dirtyFields,
    touchedFields,
    submitCount,
    errors,
  } = formState;
  return (
    <div className="container p-4 app">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="d-flex flex-column justify-content-center align-items-center form p-5 mb-5"
      >
        <div className="mb-4 d-flex flex-column justify-content-center align-items-start">
          <label className="m-1 label">Name</label>
          <input
            type="text"
            className={`input  rounded-1 p-1  ${
              errors.name ? "isInvalid" : ""
            }`}
            {...register("name", {
              required: "Invalid name",
              minLength: {
                value: 4,
                message: "name must be 4 charcter at least.",
              },
              maxLength: {
                value: 10,
                message: "name must be 10 charcter at most.",
              },
            })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        <div className="mb-4 d-flex flex-column justify-content-center align-items-start">
          <label className="m-1 label">Family</label>
          <input
            type="text"
            className={`input  rounded-1 p-1  ${
              errors.family ? "isInvalid" : ""
            }`}
            {...register("family", {
              required: "Invalid name",
              minLength: {
                value: 4,
                message: "name must be 4 charcter at least.",
              },
              maxLength: {
                value: 10,
                message: "name must be 10 charcter at most.",
              },
            })}
          />
          {errors.family && (
            <span className="error">{errors.family.message}</span>
          )}
        </div>
      </form>
      <div className="mb-3 d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => console.log(getValues("name"))}
        >
          read
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => setValue("family", "Hossein")}
        >
          change
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => reset()}
        >
          reset
        </button>
      </div>
      <table className="table table-bordered text-center">
        <tbody>
          <tr>
            <td>{isDirty ? "Dirty" : "Clean"}</td>
            <td>{isValid ? "Valid" : "Invalid"}</td>
            <td>{isSubmitted ? "Submitted" : "Not submitted"}</td>
            <td>{isSubmitting ? "Submitting" : "No Submitting"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
