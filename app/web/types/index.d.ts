/**
 *  T | null 包装
 */
type Nullable<T> = T | null;

type CommonResult<T extends any> = {
  code: number,
  message: string,
  data: T,
}

type PageResult<T extends any> = {
  list: T[],
  total: number
}

interface CommonPageResult<T extends any> {
  code: number,
  message: string,
  data: PageResult<T>,
}

type PageParam = {
  pageNo: number,
  pageSize: number,
}


