import {Button} from "antd";
import {ReactComponent as IconHome} from '@/assets/icon/zip.svg';
import Icon from "@ant-design/icons";

const Index: React.FC = () => {

  return (
    <>
      <Icon component={IconHome} style={{fontSize: '50px'}}/>
      <Button> 个人中心</Button>
    </>
  )
}

export default Index;
