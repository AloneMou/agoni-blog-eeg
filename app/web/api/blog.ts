import {request} from '@/utils/request';
import {METHOD} from "@/enums/constants";

export async function blogArticleDetail(id: string) {
  return request<CommonResult<BlogArticleDetailRespVO>>(`/web/blog/article/detail/${id}`, {
    method: METHOD.GET,
  });
}

export async function blogArticleList(data: BlogArticleListReqVO) {
  return request<CommonResult<PageResult<BlogArticle>>>(`/web/blog/article/record`, {
    method: METHOD.GET,
    params: data,
  });
}

