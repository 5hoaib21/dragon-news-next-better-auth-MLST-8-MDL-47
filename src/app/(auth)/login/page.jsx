'use client'
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
     handleSubmit ,
     watch,
      formState:{errors}} = useForm()

    const handleLoginFunc = (data) => {
      // console.log('data:', data);
    }
console.log('EMAIL:',watch('email') );
console.log('PASSWORD:',watch('password') );

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-200">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-5">Login your Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input type="email" className="input" 
            // name="email"
            {...register("email", {required: "Email field is required"})}
            placeholder="Type your email" />
            {errors.email && <p className="text-red-500 ">{errors.email.message}</p>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="password" className="input" 
            // name="password"
            {...register("password", {required: "Password field is required"})}
            placeholder="Type your password" />
             {errors.password && <p className="text-red-500 ">{errors.password.message}</p>}
          </fieldset>
          <button className="btn w-full bg-black text-white">Login</button>
        </form>
        <p>do not have an account? <Link className="text-blue-500 underline" href={'/register'}>Create one</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
