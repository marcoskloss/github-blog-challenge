/* eslint-disable @typescript-eslint/no-explicit-any */
import api from './api';

const postsRepo = 'marcoskloss/github-blog-challenge';

type Post = {
  body: string;
  title: string;
};

type Response = {
  total_count: number;
  items: Post[];
};

type PostList = {
  posts: Post[];
  count: number;
};

async function searchPosts(query = ''): Promise<PostList> {
  const { data } = await api.get<Response>(
    `/search/issues?q=${query}%20repo:${postsRepo}`
  );
  return {
    count: data.total_count,
    posts: data.items, // formatar resultado usando https://github.com/remarkjs/react-markdown
  };
}

export default searchPosts;
