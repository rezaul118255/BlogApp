import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "./card.module.css";
const Card = () => {
    return (
        <div>
            <div className={styles.container} >

                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>

                <div className={styles.textContainer}>
                    <div className={styles.detail}>
                        <span className={styles.date}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus id mollitia officiis provident cumque nobis sit sapiente porro enim nesciunt.
                            {/* {item.createdAt.substring(0, 10)} -{" "} */}
                        </span>
                        <span className={styles.category}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, perferendis.</span>
                    </div>
                    <Link href="/" >
                        <h1>title</h1>
                    </Link>
                    {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
                    <div className={styles.desc} />
                    <Link href="/" className={styles.link}>
                        Read More
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Card;