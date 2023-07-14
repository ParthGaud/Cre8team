"use client";

import Container from "./Container";
import Heading from "./Heading";
import Image from "next/image";
import Input from "@/components/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import React from "react";

interface AuthModalProps{
    onSubmit: (values: FieldValues) => void
    children : React.ReactNode
    imageSrc: string
}

const AuthModal: React.FC<AuthModalProps> = ({onSubmit, children, imageSrc}) => {
  
  return (
    <Container>
      <div className="fixed h-screen w-screen bg-blue-400 opacity-60 rounded-full -translate-x-[50%] z-[-1]"></div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:flex items-center justify-center">
          <div className="h-[590px] w-[388px] relative">
            <Image
              src={imageSrc}
              className="absolute"
              fill
              alt="frame"
            />
          </div>
        </div>
        <div className="h-full w-full p-10 flex items-start justify-center flex-col gap-y-2">
          <h2 className="w-full text-center text-3xl font-semibold mb-4">
            Login
          </h2>
          <form action="" onSubmit={onSubmit} className="w-full">
            {children}
          </form>
        </div>
      </div>
    </Container>
  );
};
export default AuthModal;
