import React from 'react';
import styles from "./navbar.module.css";
// import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';
import logo from "../../../public/logo_gif_anim4_small-d5d61787.gif"
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo} >
                <Image width={50} height={50} class="h-[45px] w-[190px] max-md:h-[25px] max-md:w-[110px] cursor-pointer" src={logo} alt=""></Image>
                {/* <h3>Achintya Blog</h3> */}
            </div>
            <div className={styles.links}>

                <Link href="/" className={styles.link}>Home</Link>

                <Link href="/about" className={styles.link}>About</Link>
                <Link href="/blog" className={styles.link}>Blog</Link>
                <Link href="/contact" className={styles.link}>Contact</Link>
                <div className='mt-1 px-2'>
                    <ThemeToggle />
                </div>


            </div>

        </div>
    );
};

export default Navbar;