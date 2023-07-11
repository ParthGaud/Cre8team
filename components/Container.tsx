"use client";

import React from "react";
import Image from "next/image";
import NavItems from "./NavItems";
import Button from './Button'

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between h-min-[136px] min-w-full py-6 px-10">
        <div className="flex-1 flex items-center gap-x-5 flex-row">
            <div className="">
                <Image src='/images/Logo.svg' className="hidden md:block cursor-pointer"  width={180} height={180} alt="logo" />
            </div>
            <NavItems label="Projects" />
            <NavItems label="Dashboard" />
            <NavItems label="About" />
        </div>
        <div className="flex flex-row gap-x-5">
            <Button className="border-blue-700 text-blue-700">
                Login
            </Button>
            <Button className="text-white bg-blue-700">
                Sign Up
            </Button>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};
export default Container;
