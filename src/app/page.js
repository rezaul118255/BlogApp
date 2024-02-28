import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";
import styles from './homepage.module.css'
import ContactUsHome from "./contact/page";
import MainBanner from "@/components/mainBanner/MainBanner";
// import MainBanner from "@/components/mainBanner/MainBanner";


export default function Home() {
  return (
    <div className={styles}>
      {/* <MainBanner /> */}

      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />

      </div>
      <ContactUsHome></ContactUsHome>
    </div>
  );
}
