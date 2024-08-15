"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Otp from "@/app/api/auth/otp/page"; // Ensure this path is correct or adjust accordingly

export default function Form() {
  const { register, handleSubmit, formState, reset, watch } = useForm();
  const { errors } = formState;
  const [email, setEmail] = useState<string | null>(null);
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);

  const password = watch("password");

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("https://akil-backend.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
          role: "user",
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
      setEmail(data.email);
      setIsSignupSuccessful(true);
      reset();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const handleGoogleSubmit = () => {
    signIn("google", { callbackUrl: "/", redirect: true });
  };

  if (isSignupSuccessful && email) {
    return <Otp email={email} />;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="pt-12 w-full max-w-md flex flex-col justify-center gap-4 px-7">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#25324B]">
          Sign Up Today!
        </h1>
        <div
          onClick={handleGoogleSubmit}
          className="border border-[#CCCCF5] w-full h-12 flex gap-4 justify-center items-center cursor-pointer"
        >
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            width={24}
            height={24}
          />
          Continue with Google
        </div>
        <div className="flex items-center gap-2 py-6 text-sm text-slate-600">
          <div className="h-px w-full bg-slate-200"></div>
          OR
          <div className="h-px w-full bg-slate-200"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="border rounded-md h-12 border-[#CCCCF5] p-2"
              placeholder="Enter your full name"
              {...register("name", {
                required: "Full name is required",
              })}
            />
            {errors.name && <p className="text-red-500">{errors.name.message as string}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="border rounded-md h-12 border-[#CCCCF5] p-2"
              {...register("email", {
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid",
                },
                required: "Email is required",
              })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message as string}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="border rounded-md h-12 border-[#CCCCF5] p-2"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && <p className="text-red-500">{errors.password.message as string}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="border rounded-md h-12 border-[#CCCCF5] p-2"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword?.message && <p className="text-red-500">{errors.confirmPassword.message as string}</p>}
          </div>
          <button
            type="submit"
            className="border w-full rounded-3xl h-12 bg-[#4640DE] text-white font-semibold my-4"
          >
            Continue
          </button>
        </form>
        <div>
          Already have an account?{" "}
          <Link href="/api/auth/signin">
            <span className="text-[#2D298E] font-semibold">Sign In</span>
          </Link>
        </div>
        <div className="w-full">
          By clicking Continue, you agree to our{" "}
          <span className="text-[#2D298E] font-semibold">Terms of Service</span>{" "}
          and{" "}
          <span className="text-[#2D298E] font-semibold">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}
