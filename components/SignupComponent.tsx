"use client";

import Input from "./Input";
import AuthModal from "./AuthModal";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { use, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignupComponent = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const user = auth.currentUser;
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    setIsLoading(true);

    console.log([values.email, values.password]);

    try {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((res) => console.log(res))
        .catch((error) => toast.error(error.message));
    } catch (error) {
      console.log(error);
    }
    router.refresh();

    setIsLoading(false);
  };
  const body = (
    <>
      <div className="w-full mb-3">
        <div className="text-sm text-neutral-800">Name</div>
        <Input
          type="text"
          placeholder="Enter name"
          {...register("name", { required: true })}
        />
      </div>
      <div className="w-full mb-3">
        <div className="text-sm text-neutral-800">Email Address</div>
        <Input
          type="text"
          placeholder="Enter email address"
          {...register("email", { required: true })}
        />
      </div>
      <div className="w-full mb-3">
        <div className="text-sm text-neutral-800">Password</div>
        <Input
          type="password"
          placeholder="Enter password"
          {...register("password", { required: true })}
        />
      </div>
    </>
  );

  if (user) {
    return router.push("/dashboard");
  }
  return (
    <AuthModal
      heading="Signup"
      onSubmit={onSubmit}
      imageSrc="/images/Allura UI Windows.svg"
      handleSubmit={handleSubmit}
      isLoading={isLoading}
    >
      {body}
    </AuthModal>
  );
};
export default SignupComponent;
