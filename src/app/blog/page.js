
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/menu/Menu';
import styles from "./blogPage.module.css";
import React from 'react';

const page = () => {
    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}> Blog</h1>
                <div className={styles.content}>
                    <CardList />
                    <Menu />
                </div>
            </div>

        </div>
    );
};

export default page;