import {request} from '@/utils/request';
import {METHOD} from "@/enums/constants";

export async function blogArticleDetail(id: string) {
  return request<CommonResult<BlogArticleDetailRespVO>>(`/web/blog/article/detail/${id}`, {
    method: METHOD.GET,
  });
}
