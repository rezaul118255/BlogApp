import React from 'react';
import styles from "./categoryList.module.css"
import Link from 'next/link';
import Image from 'next/image';
import style from "../../../public/style.png"
import fashion from "../../../public/fashion.png"
import food from "../../../public/food.png"
import travel from "../../../public/travel.png"
import culture from "../../../public/culture.png"
import coding from "../../../public/coding.png"
const CategoryList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular category</h1>
            <div className={styles.categories}>

                <Link href="./blog?cat=style" className={`${styles.category} ${styles.style}`}>
                    <Image src={style} alt='' height={32} width={32} className={styles.image} />
                    style
                </Link>
                <Link href="./blog?cat=style" className={`${styles.category} ${styles.fashion}`}>
                    <Image src={fashion} alt='' height={32} width={32} className={styles.image} />
                    fashion
                </Link>
                <Link href="./blog?cat=style" className={`${styles.category} ${styles.food}`}>
                    <Image src={food} alt='' height={32} width={32} className={styles.image} />
                    Food
                </Link>
                <Link href="./blog?cat=style" className={`${styles.category} ${styles.travel}`}>
                    <Image src={travel} alt='' height={32} width={32} className={styles.image} />
                    Travel
                </Link>
                <Link href="./blog?cat=style" className={`${styles.category} ${styles.culture}`}>
                    <Image src={culture} alt='' height={32} width={32} className={styles.image} />
                    Culture
                </Link>
                <Link href="./blog?cat=style" className={`${styles.category} ${styles.coding}`}>
                    <Image src={coding} alt='' height={32} width={32} className={styles.image} />
                    Coding
                </Link>



            </div>
        </div>
    );
};

export default CategoryList;