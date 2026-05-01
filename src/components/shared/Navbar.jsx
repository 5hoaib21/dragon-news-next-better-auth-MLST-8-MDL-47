"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log({user,isPending});
  return (
    <div className="container mx-auto flex justify-between gap-4 mt-6">
      <div></div>
      <ul className="flex justify-between items-center text-gray-700 gap-3">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>

      { isPending ? <span className="loading loading-infinity loading-lg"></span>
      :
         user ? (
        <div className="flex items-center gap-2">
          <h1>hello, {user?.name}</h1>
          <Image 
          src={user?.image} 
          alt="User avatar" 
          width={60} 
          height={60}
           />

        <button className="btn bg-purple-500 text-white" onClick={async () => await authClient.signOut()}>
           <Link href={'/login'}>
        Logout
           </Link>
        </button>
        </div>
      ) : (
          <button className="btn bg-purple-500 text-white">
            <Link href={"/login"}>Login</Link>
          </button>
      )}
    </div>
  );
};

export default Navbar;
