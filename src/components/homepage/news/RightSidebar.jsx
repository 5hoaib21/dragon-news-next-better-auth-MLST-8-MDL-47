'use client'
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  
  const handleGoogleSignIn = async () => {
const data = await authClient.signIn.social({
    provider: "google",
  });

  console.log('data', data);
  }

  const handleGithubSignIn = async () => {
const data = await authClient.signIn.social({
    provider: "github",
  });

  console.log('data', data);
  }


  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Login with</h2>
      <div className="flex flex-col gap-2">
        <button className="btn border-blue-500 text-blue-500" 
        onClick={handleGoogleSignIn}>
          <FaGoogle />
          Login with google
        </button>
        <button className="btn" onClick={handleGithubSignIn}>
          <FaGithub />
          Login with github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
