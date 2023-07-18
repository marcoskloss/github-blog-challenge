import githubIcon from '../../assets/github.svg';
import usersIcon from '../../assets/user.svg';
import companyIcon from '../../assets/company.svg';
import { Card, Stats } from '../Card';

import { GithubUser } from '../../services/get-github-user-info';

type Props = {
  user: GithubUser;
};

function ProfileCard({ user }: Props) {
  return (
    <Card.Container grid>
      <img src={user.avatar_url} alt={user.name} />

      <Card.Content>
        <Card.Header>
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            Github
          </a>
        </Card.Header>

        <p>{user.bio}</p>

        <div style={{ display: 'flex', gap: 32 }}>
          <Stats text={user.username} icon={githubIcon} />
          <Stats text={user.company} icon={companyIcon} />
          <Stats
            text={`${user.followers} ${
              user.followers === 1 ? 'seguidor' : 'seguidores'
            }`}
            icon={usersIcon}
          />
        </div>
      </Card.Content>
    </Card.Container>
  );
}

export default ProfileCard;
