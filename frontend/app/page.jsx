"use client";

import useSWR from "swr";
import { useBooks } from "@reproduction/shared";

export default function Page() {
  const { data: books } = useBooks();
  const { data: articles } = useSWR("articles", async () => {
    return [{ articleId: 30 }];
  });

  return (
    <section>
      <div>{JSON.stringify(books)}</div>
      <div>{JSON.stringify(articles)}</div>
    </section>
  );
}
