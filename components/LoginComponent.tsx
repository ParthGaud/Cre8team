"use client";

import Input from "./Input";
import AuthModal from "./AuthModal";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

const LoginComponent = () => {
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // TODO
  };
  const body = (
    <>
      <div className="w-full mb-3">
        <div className="text-sm text-neutral-800">Email Address</div>
        <Input type="text" placeholder="Enter email address" />
      </div>
      <div className="w-full mb-3">
        <div className="text-sm text-neutral-800">Password</div>
        <Input type="password" placeholder="Enter password" />
      </div>
    </>
  );
  return (
    <AuthModal onSubmit={onSubmit} imageSrc="/images/frame.svg">
      {body}
    </AuthModal>
  );
};
export default LoginComponent;
