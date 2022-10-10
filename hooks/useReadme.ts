import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const fetcher = async (url: string, options: any = {}) => {
  let response = await fetch(url, options);
  if (response.ok) {
    return response;
  }
  throw response.text();
};

export default function useReadme(
  org?: string | string[],
  repo?: string | string[]
) {
  const [markdown, setMarkdown] = useState<string>();
  const [loading, setLoading] = useState(false);

  const fetchReadme = useCallback(
    async (org: string | string[], repo: string | string[]) => {
      try {
        setLoading(true);
        const response = await fetcher(
          `https://api.github.com/repos/${org}/${repo}/readme`
        );
        const body = await response.json();
        setLoading(false);
        setMarkdown(atob(body.content));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (!org || !repo) {
      return;
    }

    fetchReadme(org, repo);
  }, [org, repo, fetchReadme]);

  return {
    loading,
    markdown,
  };
}
