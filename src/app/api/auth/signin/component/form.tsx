"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Image from 'next/image';
import { useSearchParams } from "next/navigation";
import Link from 'next/link';

export default function Form() {
    const { register, handleSubmit, formState, reset } = useForm();
    const { errors } = formState;
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || "/";

    const onSubmit = async (data: any) => {
        try {
            await signIn("credentials", {
                redirect: true,
                callbackUrl,
                email: data.email,
                password: data.password,
            });
            reset();
        } catch (error) {
            console.error("Error during sign in:", error);
        }
    };

    const handleGoogleSubmit = () => {
        signIn("google", { callbackUrl, redirect: true });
    };

    return (
        <div className="flex flex-col items-center mx-6 my-12">
            <h1 className="text-3xl font-bold text-[#25324B] mb-4">Welcome Back</h1>
            <div
                onClick={handleGoogleSubmit}
                className="border border-[#CCCCF5] w-full max-w-md h-12 flex gap-4 justify-center items-center cursor-pointer mb-6"
            >
                <Image
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    width={24}
                    height={24}
                />
                Continue with Google
            </div>
            <div className="flex items-center gap-2 py-6 text-sm text-slate-600 mb-6">
                <div className="h-px w-full bg-slate-200"></div>
                OR
                <div className="h-px w-full bg-slate-200"></div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full max-w-md">
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="email" className="font-semibold">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email address"
                        className="border rounded-md w-full h-12 border-[#CCCCF5] p-2"
                        {...register("email", {
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Email is not valid",
                            },
                            required: "Email is required",
                        })}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message as string}</p>}
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="password" className="font-semibold">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="border rounded-md w-full h-12 border-[#CCCCF5] p-2"
                        {...register("password", {
                            required: "Password is required",
                        })}
                        aria-invalid={errors.password ? "true" : "false"}
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message as string}</p>}
                </div>
                <button
                    type="submit"
                    className="border w-full rounded-3xl h-12 bg-[#4640DE] text-white font-semibold my-4"
                >
                    Continue
                </button>
            </form>
            <div className="text-center mt-4">
                Don’t have an account?{" "}
                <Link href="/auth/signup">
                    <div className="text-[#4640DE] font-semibold">Sign Up</div>
                </Link>
            </div>
        </div>
    );
}
