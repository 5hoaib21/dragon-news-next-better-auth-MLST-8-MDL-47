"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = (data) => {
    console.log('data:', data);
  };
  console.log("EMAIL:", watch("email"));
  console.log("PASSWORD:", watch("password"));

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-200">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-5">
          Register your Account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
              // name="email"
              {...register("name", { required: "Name field is required" })}
              placeholder="Type your Name"
            />
            {errors.name && (
              <p className="text-red-500 ">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input"
              // name="email"
              {...register("photo", { required: "Photo field is required" })}
              placeholder="Add your photo"
            />
            {errors.photo && (
              <p className="text-red-500 ">{errors.photo.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              // name="email"
              {...register("email", { required: "Email field is required" })}
              placeholder="Type your email"
            />
            {errors.email && (
              <p className="text-red-500 ">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              // name="password"
              {...register("password", {
                required: "Password field is required",
              })}
              placeholder="Type your password"
            />
            {errors.password && (
              <p className="text-red-500 ">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-black text-white">
            Register Now
          </button>
        </form>
        <p>
          have an account?{" "}
          <Link className="text-blue-500 underline" href={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
