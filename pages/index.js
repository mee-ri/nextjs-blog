import Head from "next/head";
// Tuodaan Layout-elementti ja siteTitle-muuttuja käyttöön
import Layout, { siteTitle } from "../components/layout";
// Tuodaan tekstien tyylittely käyttöön
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
//<Link>-komponentti mahdollistaa client-puolen navigoinnin sovelluksen sisällä
//(eli siirtymisen nopeammin JavaScriptin avulla vs selaimen oletusnavigointi full refreshillä)
// ja mahdollistaa propsien käytön
import Link from "next/link";
//Tuodaan päivämäärä
import Date from "../components/date";

// getStaticProps-funktion avulla sivu pystytään pre-renderöimään propseilla, jotka palautetaan funktiossa
export async function getStaticProps() {
  // Palautetaan allPostsDatan avulla blogipostausten sisältö propsina
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// Otetaan allPostsData-propsin avulla blogipostausten sisältö Home-komponentin käyttöön
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <b>Meeri</b>. I'm a BIT student at Laurea UAS.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
