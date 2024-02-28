


// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Image from "next/image";
// import Link from "next/link";
// import React from 'react';





// const MainBanner = () => {

//     // const images = [
//     //     "https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?t=st=1709128389~exp=1709131989~hmac=8453840302434b85476d7cf8449e1917fa593d0858db8bb5b76914de3338aab8&w=826",
//     //     "https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?t=st=1709128389~exp=1709131989~hmac=8453840302434b85476d7cf8449e1917fa593d0858db8bb5b76914de3338aab8&w=826",
//     //     "https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?t=st=1709128389~exp=1709131989~hmac=8453840302434b85476d7cf8449e1917fa593d0858db8bb5b76914de3338aab8&w=826",

//     // ];







//     return (

//         <div className="relative">
//             <div className="box relative">
//                 <Carousel
//                     showStatus={false}
//                     showThumbs={true}
//                     infiniteLoop={true}
//                     showIndicators={false}
//                     className=""
//                     renderArrowNext={(clickHandler, hasNext) => {
//                         return (
//                             hasNext && (
//                                 <button
//                                     className="nav_btn nav_btn_right absolute opacity-70 top-[42%] right-0 bg-[#777777] p-2 mr-4 rounded-full"
//                                     onClick={clickHandler}
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         viewBox="0 0 320 512"
//                                         fill="white"
//                                         className="w-2 h-2 md:w-6 md:h-6"
//                                     >
//                                         <path
//                                             d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
//                                             stroke="white"
//                                             strokeWidth="20"
//                                         />
//                                     </svg>
//                                 </button>
//                             )
//                         );
//                     }}
//                     renderArrowPrev={(clickHandler, hasNext) => {
//                         return (
//                             hasNext && (
//                                 <button
//                                     onClick={clickHandler}
//                                     className="nav_btn nav_btn_left z-10 opacity-70 absolute top-[42%] left-0 bg-[#777777] p-2 ml-4 rounded-full"
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         viewBox="0 0 320 512"
//                                         fill="white"
//                                         className="w-2 h-2 md:w-6 md:h-6"
//                                     >
//                                         <path
//                                             d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
//                                             stroke="white"
//                                             strokeWidth="20"
//                                         />
//                                     </svg>
//                                 </button>
//                             )
//                         );
//                     }}
//                 >
//                     {images.map((image, index) => (
//                         <div className="slide xs:h-[250px] lg:h-[650px]" key={index}>
//                             <Image
//                                 height={650}
//                                 width={1920}
//                                 className="object-fill"
//                                 alt="sample_file"
//                                 src={image}
//                                 key={index}
//                             />
//                         </div>
//                     ))}
//                 </Carousel>
//             </div>
//             <div className="absolute top-0 h-full my-[15%] md:my-[15%] lg:my-[12%] mx-[10%] md:mx-[10%] lg:mx-[15%]">
//                 <div className="text-white w-full md:w-[60%] flex flex-col gap-2 md:gap-8">
//                     <div className="min-[320px]:text-lg md:text-3xl lg:text-6xl font-bold">
//                         Providing Best Consulting Servies
//                     </div>
//                     <div className="min-[320px]:text-xs md:text-base ">
//                         We provide all kind of businesss and financial service with our
//                         expert over 2+ years with proud and love!!
//                     </div>
//                     <div className="min-[320px]:text-xs md:text-base flex gap-4">
//                         <Link href="/contact-us">
//                             <div className="font-medium bg-[#0c3c63] border border-[#0c3c63] hover:bg-white hover:text-[#0c3c63] min-[320px]:px-3 min-[320px]:py-0.5 md:px-6 md:py-2">
//                                 {" "}
//                                 Contact Us
//                             </div>
//                         </Link>
//                         <Link href="/" target="_blank">
//                             <div className="font-medium bg-white hover:text-white hover:bg-[#0c3c63] text-[#0c3c63] rounded-md min-[320px]:px-3 min-[320px]:py-0.5 md:px-6 md:py-2">
//                                 Free Consultation
//                             </div>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default MainBanner;