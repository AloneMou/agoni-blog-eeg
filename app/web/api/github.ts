import {request} from '@/utils/request';

// 刷新访问令牌
export async function githubList(data: GithubRepositoryListReqVo) {
  return request<CommonResult<PageResult<GithubRepository>>>('/web/github/repository/list',
    {
      method: 'GET',
      params: data
    });
}
