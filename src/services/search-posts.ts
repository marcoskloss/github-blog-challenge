/* eslint-disable @typescript-eslint/no-explicit-any */
import api from './api';

const postsRepo = 'marcoskloss/github-blog-challenge';

export type Post = {
  body: string;
  title: string;
  number: number;
  created_at: Date;
  comments: number;
  html_url: string;
};

type SearchPostsByQueryResponse = {
  total_count: number;
  items: Post[];
};

type PostList = {
  posts: Post[];
  count: number;
};

function postDateToJSDate(post: Post): Post {
  return { ...post, created_at: new Date(post.created_at) };
}

export async function searchPostsByQuery(query = ''): Promise<PostList> {
  const { data } = await api.get<SearchPostsByQueryResponse>(
    `/search/issues?q=${query}%20repo:${postsRepo}`
  );
  return {
    count: data.total_count,
    posts: data.items.map(postDateToJSDate),
  };
}

export async function getAllPosts(): Promise<PostList> {
  const { data } = await api.get<Post[]>(`/repos/${postsRepo}/issues`);
  return {
    count: data.length,
    posts: data.map(postDateToJSDate),
  };
}

export async function getPostById(postNumber: number): Promise<Post> {
  const { data } = await api.get<Post>(
    `/repos/${postsRepo}/issues/${postNumber}`
  );
  return postDateToJSDate(data);
}
