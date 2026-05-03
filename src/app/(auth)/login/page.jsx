"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFunc = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    // console.log(res, error);
       if (error) {
      toast.error('something went wrong!, please try again after some time');
    }

    if (res) {
      toast.success("Welcome Home 😊");
    }
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-200">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-5">
          Login your Account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
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
              className="absolute right-1 top-3 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye size={25} /> : <FaEyeSlash size={25} />}
            </span>
            {errors.password && (
              <p className="text-red-500 ">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-black text-white">Login</button>
        </form>
        <p>
          do not have an account?{" "}
          <Link className="text-blue-500 underline" href={"/register"}>
            Create one
          </Link>
        </p>
      </div>
       <Toaster />
    </div>
  );
};

export default LoginPage;
