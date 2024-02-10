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

                <Link href="/" className={styles.link}>Homepage</Link>
                <Link href="/" className={styles.link}>Contact</Link>
                <Link href="/" className={styles.link}>About</Link>
                <div className='mt-1 px-2'>
                    <ThemeToggle />
                </div>


            </div>
            <div className={styles.authLinks}>
                {/* <Image src="/facebook.png" alt="facebook" width={24} height={24} />
                <Image src="/instagram.png" alt="instagram" width={24} height={24} />
                <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
                <Image src="/youtube.png" alt="youtube" width={24} height={24} /> */}

                <AuthLinks />

            </div>
        </div>
    );
};

export default Navbar;