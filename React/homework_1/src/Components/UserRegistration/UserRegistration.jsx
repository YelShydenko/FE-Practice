import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./UserRegistration.scss";

const UserRegistration = () => {
  const [userList, setUserList] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setUserList([...userList, data]);
    console.log(data);
    reset();
  };

  const password = watch("password");

  return (
    <div className="user__registration">
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="user__form">
        <label htmlFor="name">Enter your name</label>
        <input
          id="name"
          type="text"
          placeholder="First name and last name"
          className="form__input"
          {...register("name", {
            required: "Name is required"
          })}
        />
        {errors.name && (
          <span className="input-error">{errors.name.message}</span>
        )}

        <label htmlFor="email">Enter your email address</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="form__input"
          {...register("email", {
            required: "Email Address is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address"
            }
          })}
        />
        {errors.email && (
          <span className="input-error">{errors.email.message}</span>
        )}

        <label htmlFor="password">Create a password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="form__input"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long"
            }
          })}
        />
        {errors.password && (
          <span className="input-error">{errors.password.message}</span>
        )}

        <label htmlFor="confirmPassword">Repeat password</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Repeat password"
          className="form__input"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: value =>
              value === password || "Passwords do not match"
          })}
        />
        {errors.confirmPassword && (
          <span className="input-error">{errors.confirmPassword.message}</span>
        )}

        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegistration;
