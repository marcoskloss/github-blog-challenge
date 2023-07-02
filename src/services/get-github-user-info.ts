import api, { ApiResult } from './api';

const { log } = console;

export type GithubUser = {
  name: string;
  bio: string;
  avatar_url: string;
  followers: number;
  html_url: string;
  company: string;
  username: string;
};

async function getGithubUserInfo(
  username: string
): Promise<ApiResult<GithubUser>> {
  try {
    const { data } = await api.get(`/users/${username}`);
    return { data: { ...data, username } };
  } catch (ex: unknown) {
    log(ex);
    return { error: true };
  }
}

export default getGithubUserInfo;
