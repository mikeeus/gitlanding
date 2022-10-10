import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const fetcher = async (url: string, options: any = {}) => {
  let response = await fetch(url, options);
  if (response.ok) {
    return response;
  }
  throw response.text();
};

export default function useReadme(repo?: { org: string; repo: string }) {
  const [markdown, setMarkdown] = useState<string>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isSymbolicLink = (text: string) => {
    return (
      text && text.length < 100 && text.toLowerCase().endsWith("readme.md")
    );
  };

  const fetchReadme = useCallback(
    async (org: string | string[], repo: string | string[]) => {
      let found: string | undefined;
      for (const filename of ["README.md", "readme.md", "Readme.md"]) {
        if (found) {
          break;
        }
        try {
          found = await fetcher(
            `https://raw.githubusercontent.com/${org}/${repo}/main/${filename}`
          ).then((res) => res.text());
          if (found && isSymbolicLink(found)) {
            found = await fetcher(
              `https://raw.githubusercontent.com/${org}/${repo}/main/${found}`
            ).then((res) => res.text());
          }
        } catch (error) {
          console.log({ error });
        }
      }
      return found;
    },
    []
  );

  useEffect(() => {
    if (repo) {
      (async () => {
        const text = await fetchReadme(repo.org, repo.repo);
        setMarkdown(text);
      })();
      setLoading(false);
      return;
    }

    if (!router.query.org || !router.query.repo) {
      return;
    }

    (async () => {
      if (router.query.org && router.query.repo) {
        const text = await fetchReadme(router.query.org, router.query.repo);
        setMarkdown(text);
      }
      setLoading(false);
    })();
  }, [router, fetchReadme, repo]);

  return {
    loading,
    markdown,
  };
}
