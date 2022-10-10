import ReactMarkdown from "react-markdown";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import useReadme from "../../hooks/useReadme";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import { useRouter } from "next/router";

const Repo: NextPage = () => {
  const router = useRouter();
  const { loading, markdown } = useReadme(router.query.org, router.query.repo);
  const [theme, setTheme] = useState("splendor");

  return (
    <div className="container">
      <Head>
        <title>GitLanding</title>
        <meta
          name="description"
          content="Automatic landing page for open source projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Link href="/">GitLanding</Link>
      </header>
      <main className={`content theme-${theme}`}>
        {loading ? <p>Loading...</p> : null}
        {!loading && !markdown ? (
          <p>
            Failed to load README.md file. Are you sure this repo is public?
          </p>
        ) : null}
        {!loading && markdown ? (
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
        ) : null}
      </main>

      <footer className="footer">
        <a href="https://mikias.net" target="_blank" rel="noopener noreferrer">
          Mikias Abera
        </a>
      </footer>
    </div>
  );
};

export default Repo;
