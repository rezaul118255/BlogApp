"use client";
// import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import LoginPage2 from "./LoginPage2";
// import styles from "./loginPage.module.css";
// import { useRouter } from "next/navigation";
import Image4 from "../../../public/facebook.png";
import Link from "next/link";

const LoginPage = () => {


    return (
        <div className="card w-full h-screen  mx-auto max-w-md shadow-2xl bg-base-100" data-aos="fade-left">
            <div className="card-body">
                <div className="form-control">
                    <div className="flex justify-between">
                        <Image src={Image4} alt="Image" className='h-16 w-16  ' />
                        <button className="btn btn-secondary w-48 border-full">Try smart sign in</button>

                    </div>

                    <h1 className="text-2xl mt-4">Sign in </h1>
                    <h1>to access InfoNexus Home</h1>
                    <LoginPage2></LoginPage2>
                    <div className=""><span className="text-sm">Dont have a InfoNexus account?</span> <Link className="text-sm text-sky-400 font-semibold" href='/singin' >Sign Up Now</Link></div>
                </div>



            </div>
        </div>
    );
};

export default LoginPage;