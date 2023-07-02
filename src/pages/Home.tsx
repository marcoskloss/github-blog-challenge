import { useLoaderData } from 'react-router-dom';

import Form from '../components/Form';
import Header from '../components/Header';
import Post from '../components/Post';
import ProfileCard from '../components/ProfileCard';

import { GithubUser } from '../services/get-github-user-info';
import { ApiResult } from '../services/api';

import styles from './styles.module.css';
import searchPosts from '../services/search-posts';

function Home() {
  const githubUserResult = useLoaderData() as ApiResult<GithubUser>;

  if (githubUserResult.error) {
    return (
      <>
        <code>deu ruim :(</code>
        <code>veja o console</code>
      </>
    );
  }

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <ProfileCard userInfo={githubUserResult.data as GithubUser} />
        <Form />
        <div>
          <Post />
        </div>
      </main>
    </div>
  );
}

export default Home;
