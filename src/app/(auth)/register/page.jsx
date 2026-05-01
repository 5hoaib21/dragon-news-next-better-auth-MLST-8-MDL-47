"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFunc = async (data) => {
    console.log("data:", data);
    const { email, name, photo, password } = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });
    console.log(res, error);
    if (error) {
      toast.error(error.message);
    }

    if (res) {
      toast.success("Registration Successful😊 Please Login with same info.");
    
    }
  };
  //   console.log("EMAIL:", watch("email"));
  //   console.log("PASSWORD:", watch("password"));

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
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input"
              // name="password"
              {...register("password", {
                required: "Password field is required",
              })}
              placeholder="Type your password"
            />
            <span
              className="absolute right-10 top-3 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye size={25} /> : <FaEyeSlash size={25} />}
            </span>
            {errors.password && (
              <p className="text-red-500 ">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-black text-white">
            <Link href={"/login"}>Register Now</Link>
          </button>
        </form>
        <p>
          have an account ?{" "}
          <Link className="text-blue-500 underline" href={"/login"}>
            Login
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default RegisterPage;
