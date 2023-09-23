type GithubRepositoryListReqVo = {
  name?: string
  pageNo?: number,
  pageSize?: number
}

type GithubRepositoryCreate = {
  username: string,
  repo: string,
}

type GithubRepository = {
  id: string,
  name: string,
  fullName: string,
  description: string,
  htmlUrl: string,
  homepage: string
}
