'use client'

import React, { useEffect, useState } from 'react'
// import location from '../../../public/facebook.png'
import { IoCallSharp } from "react-icons/io5";
// import axios from "axios";
import { FaClock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Image from "next/image"
import { MdLocationPin } from "react-icons/md";
// import like from "../../../assets/HomePage/like.png";
// import unlike from "../../../assets/HomePage/unlike.png";
// import swal from 'sweetalert';

const ContactUsHome = () => {




    return (
        <>
            <div className="flex flex-col justify-center items-center w-full my-10">
                <h1 className="lg:text-3xl text-2xl text-blue-950 font-semibold ">Contact Us</h1>
                <div className="w-[50px] h-[6px] bg-green-400 my-3"></div>
            </div>

            <div className="flex justify-center items-center gap-5 lg:flex-row flex-col mb-20 ">

                {/* 4 cards */}
                <div className="grid grid-cols-2 grid-flow-row gap-5 lg:px-0 px-4 ">
                    <div className="flex flex-col justify-center items-center lg:max-w-[300px] shadow-custom shadow-xl rounded-md p-3 gap-2 min-h-[155px]">
                        {/* <Image src={location} alt="" /> */}
                        <MdLocationPin size={35} color='#32d314' />
                        <h3 className='text-lg font-semibold text-blue-950'>Our Address</h3>
                        <p className='sm:text-base text-sm text-center text-gray-400'> Block A, New Ashok Nagar New Delhi 110096</p>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:max-w-[300px] shadow-custom shadow-xl rounded-md p-3 gap-2 min-h-[155px]">
                        <FaClock size={35} color='#32d314' />
                        <h3 className='text-lg font-semibold text-blue-950'>Working Hours</h3>
                        <p className='sm:text-base text-sm text-center text-gray-400'>Monday - Saturday
                            <br />
                            9:30AM - 06:30PM (IST)
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:max-w-[300px]   shadow-xl shadow-custom rounded-md p-3 gap-2 min-h-[155px]">
                        <IoCallSharp size={35} color='#32d314' />
                        <h3 className='text-lg font-semibold text-blue-950'>Call Us</h3>
                        <p className='sm:text-base text-sm text-center text-gray-400'>+91 9565363926</p>
                    </div>
                    <div className="flex flex-col justify-center items-center shadow-xl lg:max-w-[300px] overflow-hidden shadow-custom rounded-md p-3 gap-2 min-h-[155px]">
                        <FaEnvelope size={35} color='#32d314' />
                        <h3 className='text-lg font-semibold text-blue-950'>Email Us</h3>
                        <p className='sm:text-base text-sm text-center text-gray-400'>info@justthinkbusiness.com</p>
                    </div>
                </div>

                {/* form */}


                <>
                    <form className='max-w-[600px] h-full shadow-custom rounded-lg p-5 flex flex-col justify-end lg:mx-0 mx-4'>
                        <h1 className="lg:text-3xl text-2xl text-blue-950 font-semibold ">Get Free Consultancy!</h1>
                        <div className="w-[50px] h-[6px] bg-green-400 my-3"></div>
                        <div className='my-5'></div>


                        <div className="flex md:gap-5 gap-5 mb-5">

                            <input
                                type="text"
                                name="name"
                                id="name"
                                // value={fullName}
                                onChange={(e) => { setFullName(e.target.value) }}
                                placeholder="Full Name"
                                required
                                className="border-gray-400 border h-[35px] w-1/2 rounded-md px-2" />

                            <input
                                placeholder="E-mail *"

                                id="email"
                                maxLength="80"
                                name="email"
                                size="20"
                                type="email"
                                // value={formInputs.Email}
                                onChange={(e) => {
                                    setFormInputs((prev) => {
                                        return { ...prev, Email: e.target.value };
                                    });
                                }}
                                required

                                className="border-gray-400 border h-[35px] w-1/2 rounded-md px-2"

                            />

                        </div>

                        <input

                            placeholder="Mobile Number *"

                            id="mobile"
                            maxLength="15"
                            name="mobile"
                            size="20"
                            type="text"
                            minLength={10}
                            // value={formInputs.MobilePhone}
                            onChange={(e) => {
                                setFormInputs((prev) => {
                                    return { ...prev, MobilePhone: e.target.value };
                                });
                            }}
                            required
                            className="border-gray-400 border h-[35px] w-full rounded-md px-2 mb-5" />

                        <textarea
                            typeof='text'
                            placeholder='Message'
                            name="message"
                            id="message"
                            // value={formInputs.Description}
                            onChange={(e) => { setFormInputs((prev) => { return { ...prev, Description: e.target.value } }) }}
                            required
                            className="border-gray-400 border h-[60px] w-full rounded-md px-2 resize-none" />

                        <button className='py-1 px-1 bg-[#32d314] rounded-sm shadow-md w-[150px] shadow-[#32d314] text-black text-lg font-medium mt-5'>Submit</button>
                    </form>
                </>



            </div>


        </>
    )
}

export default ContactUsHome
