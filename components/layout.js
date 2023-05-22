// <Head> on React-komponentti, jonka avulla voi muuttaa sivuston <head>iä
import Head from "next/head";
// Image-komponentin kuvat oletusarvoisesti "lazy loaded"
//-> kuvat latautuu, kun ne vieritetään näkymäikkunaan
// (sivun nopeuteen ei vaikuta ei - näkyvissä olevien kuvien koko)
import Image from "next/image";
// Tuodaan CSS Module tyylittely käyttöön
import styles from "./layout.module.css";
// Tuodaan tekstien tyylittely käyttöön
import utilStyles from "../styles/utils.module.css";
//<Link>-komponentti mahdollistaa client-puolen navigoinnin sovelluksen sisällä
//(eli siirtymisen nopeammin JavaScriptin avulla vs selaimen oletusnavigointi full refreshillä)
// ja mahdollistaa propsien käytön
import Link from "next/link";

const name = "Meeri";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
