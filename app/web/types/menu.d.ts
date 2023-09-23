//菜单
type MenuListReqVO = {
  name?: string | undefined | null
  status?: number | undefined | null
}

interface Menu extends MenuBase {
  id: string,
  createTime?: Date,
  children?: Menu[]
}

interface MenuUpdateReqVO extends MenuBase {
  id?: string,
}

interface MenuBase {
  name: string,
  permission?: string,
  type?: number,
  sort?: number,
  parentId?: string,
  path: string,
  icon: string,
  component: string,
  componentName?: string,
  visible?: boolean,
  keepAlive?: boolean,
  alwaysShow?: boolean,
  status?: number,
}

type MenuTypeOption = {
  value: number,
  label: string
}
