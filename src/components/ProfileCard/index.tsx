import githubIcon from '../../assets/github.svg';
import usersIcon from '../../assets/user.svg';
import companyIcon from '../../assets/company.svg';

import styles from './styles.module.css';
import { GithubUser } from '../../services/get-github-user-info';

type ProfileStatsProps = {
  text: string;
  icon: string;
};

function ProfileStats({ text, icon }: ProfileStatsProps) {
  return (
    <div className={styles.profileStats}>
      <img src={icon} alt="whatever" />
      <span>{text}</span>
    </div>
  );
}

type Props = {
  userInfo: GithubUser;
};

function ProfileCard({ userInfo }: Props) {
  const formatFollowersText = (followers: number) => {
    if (followers === 1) return '1 seguidor';
    return `${followers} seguidores`;
  };

  return (
    <div className={styles.card}>
      <img src={userInfo.avatar_url} alt={userInfo.name} />
      <div className={styles.userInfo}>
        <div className={styles.userHeader}>
          <h1>{userInfo.name}</h1>
          <a href={userInfo.html_url} target="_blank" rel="noreferrer">
            Github
          </a>
        </div>

        <p>{userInfo.bio}</p>

        <div className={styles.userSocialMedia}>
          <ProfileStats text={userInfo.username} icon={githubIcon} />
          <ProfileStats text={userInfo.company} icon={companyIcon} />
          <ProfileStats
            text={formatFollowersText(userInfo.followers)}
            icon={usersIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
