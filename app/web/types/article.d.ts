type BlogArticle = {
  id: string,
  title: string,
  isOriginal: boolean,
  author: string,
  provenanceLink: string,
  creator: string,
  createTime?: Date | undefined | null,
}

type BlogArticleCreateReqVO = {
  title: string,
  summary: string,
  content: string,
  status: string,
  isOriginal: boolean,
  author: string,
  provenanceLink: string,
  editor: string,
}

interface BlogArticleEditReqVO extends BlogArticleCreateReqVO {
  id: string,
}

interface BlogArticleListReqVO extends PageParam {
  title: string,
}


interface BlogArticleDetailRespVO extends BlogArticle {
  content: string,
}
