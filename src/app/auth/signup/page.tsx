"use client"
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import {useForm} from "react-hook-form";
import { useRouter } from "next/navigation";
import VerifyEmail from "../OTP/page"

interface FormInput {
    name:string,
    email:string,
    password:string,
    confirmPassword:string,
    role:string
}


const SignUp = ()=>{

    const [Values , setValues] = useState<FormInput>({name: "",email: "",password: "",confirmPassword: "",role: ""})
    const [isSignup,setisSignup] = useState(false)
    const {register,formState,handleSubmit,reset} = useForm<FormInput>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "user",
          },
    })

    const onSubmit = async (data:FormInput)=>{
      const res = await fetch("https://akil-backend.onrender.com/signup",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
          "Content-Type": "application/json",
        }}).then(res => res.json())
        
        
        if(res.success){
          setValues(data)
          setisSignup(true)
        console.log('success')

      }

    }

    return (
        <>
        {
          !isSignup?(

        <div className="flex items-center justify-center min-h-screen bg-white p-2">

          <div className=" flex flex-col gap-4  w-3/5 lg:w-1/3 p-10 bg-white rounded-lg shadow-lg overflow-hidden">
            <h2 className="text-4xl font-extrabold mb-2 text-center text-[#25324B]">
              Sign Up Today
            </h2>
              <div className="flex items-center justify-center">
                <button
                  className="w-full flex items-center justify-center bg-white text-blue-600 font-bold py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => signIn("google")}
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
            <div className="flex justify-between items-center gap-2">
                <div className="border-b-2 w-1/4"></div>
                <div className="text-xs font-light">Or Sign Up with Email</div>
                <div className="border-b-2 w-1/4"></div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="mb-4">
                <div className="mb-4">
                    <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                    >
                    Full Name
                    </label>
                    <input
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    id="name"
                    {...register("name", {
                        required: {
                          value: true,
                          message: "name is required",
                        },
                      })}
                    placeholder="Enter your full name"
                    />
                </div>
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
                <div  className="mb-4">

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
                <div  className="mb-4">

                    <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                    >
                        Confirm Password
                    </label>
                    <input
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                    type="password"
                    id="cpassword"
                    {...register("confirmPassword", {
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
                    Continue
                </button>
              </div>
            </form>
              <div className="flex items-center justify-start mb-4 gap-2 ">
                <p>
                    Already have an account?
                </p>
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Login
                </a>
              </div>
              <div className="font-light text-xs ">
                    By clicking `Continue`, you acknowledge that you have read and accepted our
                    <a href="#" className="text-xs font-semibold text-blue-500 hover:underline">Terms of Service.</a>
                    and <a href="#" className="text-xs font-semibold text-blue-500 hover:underline">Privacy Policy.</a>
                
              </div>
          </div>
      </div>
          ):(
            <VerifyEmail email = {Values.email}  name = {Values.name} password = {Values.password} confirmPassword = {Values.confirmPassword} role ={Values.role}/>
          )
        }
        </>
    )
}
export default SignUp;







