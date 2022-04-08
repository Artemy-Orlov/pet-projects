
export class RepoModel {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  owner: {
    avatar_url: string;
    html_url: string;
  };
}
