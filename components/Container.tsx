"use client";

import React from "react";
import Image from "next/image";
import NavItems from "./NavItems";
import Button from './Button'
import { twMerge } from "tailwind-merge";
import {useForm, SubmitHandler, FieldValues} from 'react-hook-form'
import { useRouter } from "next/navigation";

interface ContainerProps {
  children: React.ReactNode;
  className ?: string
}
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const router = useRouter()
  return (
    <>
      <div className={twMerge("flex flex-row items-center justify-between h-min-[136px] min-w-full py-6 px-10", className)}>
        <div className="flex-1 flex items-center gap-x-5 flex-row">
            <div className="" onClick={() => router.push("/")}>
                <Image src='/images/Logo.svg' className="hidden md:block cursor-pointer"  width={180} height={180} alt="logo" />
            </div>
            <NavItems label="Projects" />
            <NavItems label="Dashboard" />
            <NavItems label="About" />
        </div>
        <div className="flex flex-row gap-x-5">
            <Button className="border-blue-700 text-blue-700" onClick={() => router.push('/login')}>
                Login
            </Button>
            <Button className="text-white bg-blue-700" onClick={() => router.push('/signup')}>
                Sign Up
            </Button>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};
export default Container;
