import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Authentication.scss";

const Test = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <div className="test-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className={`form-control ${
            errors.username ? "form-control-danger" : ""
          }`}
          placeholder="username"
          {...register("username", {
            required: "Username is required",
          })}
        />
        {errors.username && (
          <span className="alert-danger">{errors.username.message}</span>
        )}
        <input
          type="text"
          className={`form-control ${
            errors.surname ? "form-control-danger" : ""
          }`}
          placeholder="surname"
          {...register("surname", {
            required: "Surname is required",
          })}
        />
        {errors.surname && (
          <span className="alert-danger">{errors.surname.message}</span>
        )}
        <div>
          <input
            type="text"
            className={`form-control ${
              errors.age ? "form-control-danger" : ""
            }`}
            placeholder="age"
            {...register("age", {
              min: { value: 18, message: "The field should be 18 or more" },
            })}
          />
          {errors.age && (
            <span className="alert-danger">{errors.age.message}</span>
          )}
          <input
            type="text"
            className={`form-control ${
              errors.experience ? "form-control-danger" : ""
            }`}
            placeholder="experience"
            {...register("experience", {
              min: { value: 4, message: "The field should be 4 or more" },
            })}
          />
          {errors.experience && (
            <span className="alert-danger">{errors.experience.message}</span>
          )}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Test;
