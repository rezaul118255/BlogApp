"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { UserAuth } from "@/context/AuthContext";
// import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
    const [open, setOpen] = useState(false);
    const { user, googleSignIn, logOut } = UserAuth();
    // const search = useSearchParams();
    // const from = search.get("redirectUrl") || "/";
    // const { replace } = useRouter()



    const handleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }



    };
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };







    // const { status } = useSession();
    const status = "unauthenticated"

    return (
        <>
            {!user ? (
                <Link onClick={handleSignIn} href="/login" className={styles.link}>
                    Login
                </Link>
            ) : (
                <div className="gap-4 flex">
                    <Link href="/write" className={styles.link}>
                        Write
                    </Link>
                    <p onClick={handleSignOut} className="mx-4">
                        Logout
                        {/* <span className={styles.link} >
                            Logout
                        </span> */}
                    </p>

                </div>
            )}
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/">Homepage</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    {status === "unauthenticated" ? (
                        <Link href="/login">Login</Link>
                    ) : (
                        <>
                            <Link href="/write">Write</Link>
                            <span className={styles.link}>Logout</span>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default AuthLinks;