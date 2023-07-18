import { Link, useLoaderData } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import githubIcon from '../../assets/github.svg';

import { Card, Stats } from '../../components/Card';
import Layout from '../../components/Layout';
import type { Post as PostType } from '../../services/search-posts';

function dateFormat(date: Date) {
  return new Intl.DateTimeFormat('pt-BR').format(date);
}

function Post() {
  const post = useLoaderData() as PostType;

  return (
    <Layout>
      <Card.Container>
        <Card.Content>
          <Card.Header>
            <Link to="/">Voltar</Link>
            <a href={post.html_url} target="_blank" rel="noreferrer">
              Ver no Github
            </a>
          </Card.Header>

          <h1>{post.title}</h1>
        </Card.Content>

        <Card.Footer>
          <div style={{ display: 'flex', gap: 32 }}>
            <Stats text="marcoskloss" icon={githubIcon} />
            <Stats text={dateFormat(post.created_at)} icon={githubIcon} />
            <Stats
              text={`${post.comments} ${
                post.comments === 1 ? 'comentário' : 'comentários'
              }`}
              icon={githubIcon}
            />
          </div>
        </Card.Footer>
      </Card.Container>

      <article style={{ marginTop: 32 }}>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </article>
    </Layout>
  );
}

export default Post;
