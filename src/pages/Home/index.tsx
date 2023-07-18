import { Link, useLoaderData } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { useEffect, useState } from 'react';
import Form from '../../components/Form';
import Post from '../../components/Post';
import ProfileCard from '../../components/ProfileCard';

import { GithubUser } from '../../services/get-github-user-info';
import { ApiResult } from '../../services/api';
import { searchPostsByQuery, getAllPosts } from '../../services/search-posts';
import type { Post as PostType } from '../../services/search-posts';

import styles from './styles.module.css';
import Layout from '../../components/Layout';

function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);

  const githubUserResult = useLoaderData() as ApiResult<GithubUser>;

  const onSearchPosts = async (query: string) => {
    const response = await searchPostsByQuery(query);
    setPosts(response.posts);
  };

  useEffect(() => {
    getAllPosts().then((response) => {
      setPosts(response.posts);
    });
  }, []);

  if (githubUserResult.error) {
    return (
      <>
        <code>deu ruim :(</code>
        <code>veja o console</code>
      </>
    );
  }

  return (
    <Layout>
      <ProfileCard user={githubUserResult.data as GithubUser} />
      <Form onSubmit={onSearchPosts} postCount={posts.length} />
      <div className={styles.postList}>
        {posts.map((post) => (
          <Link to={`/posts/${post.number}`} key={post.number}>
            <Post
              postAsMarkdown={<ReactMarkdown>{post.body}</ReactMarkdown>}
              isPreviewMode
            />
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default Home;
