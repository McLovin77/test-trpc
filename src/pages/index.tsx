import Button from "@/components/Button";
import { trpc } from "@/lib/trpc";
import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 style={{marginBottom: 24}} className={styles.title}>
          Welcome to TAPT starter! <br />(<b>TRPC</b>, Next <b>Auth</b>,{" "}
          <b>Prisma</b> & <b>Tailwind</b>)
        </h1>
        {session && (
          <>
          <h4>Signed in as:</h4>
          <pre>{JSON.stringify(session,null,2)}</pre>
          </>
        )}
        {session ? <Button onClick={signOut}>Sign out</Button> : <Button onClick={signIn}>Sign in</Button>}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;