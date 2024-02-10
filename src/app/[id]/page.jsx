import Comments from '@/components/comments/Comments';
import Menu from '@/components/menu/Menu';
import Image from 'next/image';
import image from "../../../public/food.png"
import React from 'react';
import styles from "./singlePage.module.css";
const page = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.infoContainer}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>Rezaul</h1>
                        <div className={styles.user}>

                            <div className={styles.userImageContainer}>
                                <Image src={image} alt="" fill className={styles.avatar} />
                            </div>

                            <div className={styles.userTextContainer}>
                                <span className={styles.username}> Rezaul</span>
                                <span className={styles.date}>01.01.2024</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.imageContainer}>
                        <Image src={image} alt="" fill className={styles.image} />
                    </div>

                </div>
                <div className={styles.content}>
                    <div className={styles.post}>
                        <div
                            className={styles.description}

                        />
                        <div className={styles.comment}>
                            <Comments />
                        </div>
                    </div>
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default page;