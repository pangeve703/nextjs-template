"use client";
import { useQuery } from "@tanstack/react-query";

type Post = {
  id: number;
  title: string;
  body: string;
};

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async (): Promise<Array<Post>> => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      return await response.json();
    },
  });
};
