import Image from "next/image";
import styles from "../styles/home.module.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import { Suspense } from "react";
import "../i18n";
import Main from "../components/home/main";
import FlashDeals from "../components/home/flashDeals";
import Category from "../components/home/category";
import { women_accessories, women_dresses, women_shoes } from "../data/home";
import { useMediaQuery } from "react-responsive";

export default function Home({ country }) {
  const { data: session } = useSession();
  const isMedium = useMediaQuery({ query: "(max-width: 850px" });
  const isMobile = useMediaQuery({ query: "(max-width: 550px" });
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header country={country} />
        <div className={styles.home}>
          <div className={styles.container}>
            <Main />
            <FlashDeals />
            <div className={styles.home__category}>
            <Category 
              header="Dresses" 
              products={women_dresses} 
              background="#5a31f4" 
            />
            {!isMedium && (
              <Category
                header="Shoes" 
                products={women_shoes} 
                background="#3c811f" 
              />
            )}
            {isMobile && (
              <Category 
                header="Shoes" 
                products={women_shoes} 
                background="#3c811f" 
              />
            )}
            <Category 
              header="Accessories" 
              products={women_accessories} 
              background="#000" 
            />
            </div>
          </div>
        </div>
        <Footer country={country} />
      </Suspense>
    </>
  );
}
export async function getServerSideProps() {
  let data = await axios
    .get("https://api.ipregistry.co/?key=zo9pqtyf5a0drhl6")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      // country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: "Russian Federation",
        flag: "https://i.ibb.co/W2gN6R6/10.png?w=360",
      },
    },
  };
}
