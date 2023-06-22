import useSWR from "swr";

export const useBooks = () => {
  return useSWR("books", async () => {
    return [{ bookId: 20 }];
  });
};
