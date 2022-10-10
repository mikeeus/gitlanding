import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GitLanding</title>
        <meta
          name="description"
          content="Automatic landing page for open source projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.content}>
        <h1>GitLanding</h1>
        <p>
          GitLanding automatically generates a clean and user friendly landing
          page for open source projects that can be shared with non technical
          users that may find github confusing to navigate.
        </p>

        <p>
          To get get a link for a project simply replace `github` with
          `gitlanding`. For example, for{" "}
          <pre>
            https://<b>github</b>
            .com/microsoft/vscode
          </pre>
          becomes{" "}
          <pre>
            https://<b>gitlanding</b>.com/microsoft/vscode
          </pre>
        </p>

        <p>
          Some popular open source projects that you can try GitLanding with:
        </p>
        <ul>
          <li>
            <Link href="/vercel/next.js">Next.js</Link>
          </li>
          <li>
            <Link href="/microsoft/vscode">VS Code</Link>
          </li>
          <li>
            <Link href="/facebook/react">React</Link>
          </li>
          <li>
            <Link href="/facebook/react-native">React Native</Link>
          </li>
          <li>
            <Link href="/microsoft/TypeScript">TypeScript</Link>
          </li>
          <li>
            <Link href="/tailwindlabs/tailwindcss">Tailwind CSS</Link>
          </li>
          <li>
            <Link href="/vercel/hyper">Hyper</Link>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <Link
          href="https://mikias.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mikias Abera
        </Link>
      </footer>
    </div>
  );
};

export default Home;
