"use client";
import { useEffect } from "react";
import {useForm} from "react-hook-form";
import { signIn } from "next-auth/react";

interface FormInput {
    email:string,
    password:string
}


const Login = () => {

    const {register,formState,handleSubmit,reset} = useForm<FormInput>({
        defaultValues: {
            email: "",
            password: ""
          },
    })
    const {errors,isSubmitSuccessful} = formState


    const onSubmit =(data:FormInput)=>{
        signIn("credentials",{
            email:data.email,
            password:data.password,
            redirect:true,
            callbackUrl:'/'
        })

    }

    useEffect(()=>{
        if(isSubmitSuccessful){
            
          reset()
        }
      },[isSubmitSuccessful,reset])

    return (
        <div className="flex items-center justify-center min-h-screen bg-white p-4">
            <div className="flex flex-col md:flex-row w-full md:w-3/4 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col justify-end md:w-1/2 p-10 text-left md:text-left border-[5px] border-white rounded-2xl">
                </div>
                <div className="flex flex-col gap-4 lg:w-1/2 p-10 bg-white">
                    <h2 className="text-3xl text-center md:text-5xl font-semibold mb-2">
                        Welcome Back,
                    </h2>

                    <div className="flex items-center justify-center">
                        <button
                            className="w-full flex items-center justify-center bg-white text-black font-bold py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={() => signIn("google",{
                                redirect:true,
                                callbackUrl:'/'
                            })}
                        >
                          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.6712 8.36788H18V8.33329H10.5V11.6666H15.2096C14.5225 13.607 12.6762 15 10.5 15C7.73874 15 5.49999 12.7612 5.49999 9.99996C5.49999 7.23871 7.73874 4.99996 10.5 4.99996C11.7746 4.99996 12.9342 5.48079 13.8171 6.26621L16.1742 3.90913C14.6858 2.52204 12.695 1.66663 10.5 1.66663C5.89791 1.66663 2.16666 5.39788 2.16666 9.99996C2.16666 14.602 5.89791 18.3333 10.5 18.3333C15.1021 18.3333 18.8333 14.602 18.8333 9.99996C18.8333 9.44121 18.7758 8.89579 18.6712 8.36788Z" fill="#FFC107"/>
                            <path d="M3.12749 6.12121L5.8654 8.12913C6.60624 6.29496 8.4004 4.99996 10.5 4.99996C11.7746 4.99996 12.9342 5.48079 13.8171 6.26621L16.1742 3.90913C14.6858 2.52204 12.695 1.66663 10.5 1.66663C7.29915 1.66663 4.52332 3.47371 3.12749 6.12121Z" fill="#FF3D00"/>
                            <path d="M10.5 18.3333C12.6525 18.3333 14.6083 17.5095 16.0871 16.17L13.5079 13.9875C12.6432 14.6451 11.5865 15.0008 10.5 15C8.33251 15 6.49209 13.6179 5.79876 11.6891L3.08126 13.7829C4.46043 16.4816 7.26126 18.3333 10.5 18.3333Z" fill="#4CAF50"/>
                            <path d="M18.6713 8.36796H18V8.33337H10.5V11.6667H15.2096C14.8809 12.5902 14.2889 13.3972 13.5067 13.988L13.5079 13.9871L16.0871 16.1696C15.9046 16.3355 18.8333 14.1667 18.8333 10C18.8333 9.44129 18.7758 8.89587 18.6713 8.36796Z" fill="#1976D2"/>
                          </svg>
   
                          Sign In with Google
                        </button>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="border-b-2 w-1/4"></div>
                        <div className="text-sm font-light">Or Login with Email</div>
                        <div className="border-b-2 w-1/4"></div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email Address
                            </label>
                            <input
                                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                                type="email"
                                id="email"
                                {...register("email", {
                                    required: {
                                      value: true,
                                      message: "Email is required",
                                    },
                                  })}
                                placeholder="Enter email address"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                                type="password"
                                id="password"
                                {...register("password", {
                                    required: {
                                      value: true,
                                      message: "password is required",
                                    },
                                  })}
                                placeholder="Enter password"
                            />
                        </div>
                        <button
                            className="w-full bg-[#1b1787] text-white font-bold py-2 px-4 rounded-3xl hover:bg-[#6E62E5] focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                    <div className="flex items-center justify-start mb-4 gap-2">
                        <p>Don`t have an account?</p>
                        <a href="#" className="text-sm text-blue-500 hover:underline">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;