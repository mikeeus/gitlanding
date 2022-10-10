import ReactMarkdown from "react-markdown";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import useReadme from "./hooks/useReadme";
import rehypeRaw from "rehype-raw";

const Home: NextPage = () => {
  const { loading, markdown } = useReadme();
  const [theme, setTheme] = useState("splendor");

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

      <main className={`${styles.content} theme-${theme}`}>
        <h1>GitLanding</h1>
        <p>
          GitLanding automatically generates styled landing pages for open
          source projects on GitHub using their README.md files.
        </p>

        <p>
          Some popular open source projects that you can try GitLanding with:
        </p>
        <ul>
          <li>
            <a href="/vercel/next.js">Next.js</a>
          </li>
          <li>
            <a href="/microsoft/vscode">VS Code</a>
          </li>
          <li>
            <a href="/facebook/react">React</a>
          </li>
          <li>
            <a href="/facebook/react-native">React Native</a>
          </li>
          <li>
            <a href="/microsoft/TypeScript">TypeScript</a>
          </li>
          <li>
            <a href="/tailwindlabs/tailwindcss">Tailwind CSS</a>
          </li>
          <li>
            <a href="/vercel/hyper">Hyper</a>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a href="https://mikias.net" target="_blank" rel="noopener noreferrer">
          Mikias Abera
        </a>
      </footer>
    </div>
  );
};

export default Home;
