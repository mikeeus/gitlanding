import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import useReadme from "../hooks/useReadme";

const Home: NextPage = () => {
  const { loading, markdown } = useReadme("mikeeus", "gitlanding");

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

      <main className="content">
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
