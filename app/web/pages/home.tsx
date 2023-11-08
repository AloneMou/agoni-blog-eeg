import {Avatar, Card, Carousel, Image, Layout} from "antd";
import {GridContent} from "@ant-design/pro-layout";
import {SettingOutlined} from "@ant-design/icons";
import {Helmet} from "react-helmet";


const {Meta} = Card;
const {Sider, Content} = Layout;

const Home: React.FC = () => {

  return (
    <GridContent>
      <Helmet encodeSpecialCharacters={false}>
        <meta charSet="utf-8"/>
        <title>首页</title>
      </Helmet>
      <Layout>
        <Sider width={280} theme={"light"} style={{backgroundColor: "#f0f2f5"}} breakpoint="xs">
          <Card
            cover={
              <img
                alt="AgoniBlog"
                src="https://oss.agoniblog.com/text.png"
              />
            }
            actions={[
              <SettingOutlined key={'1'}/>,
              <SettingOutlined key={'2'}/>,
              <SettingOutlined key={'3'}/>,
            ]}
          >
            <Meta
              avatar={<Avatar
                src="https://oss.agoniblog.com/czp/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230130114316.jpg"/>}
              description="个人对于新框架比较感兴趣，遇到比较好的项目或者工具包会进行实践"
            />
          </Card>
        </Sider>
        <Content style={{marginLeft: '20px'}}>
          <Carousel autoplay>
            <div>
              <Image
                width={"100%"}
                preview={false}
                src="https://oss.agoniblog.com/czp/20220325/16.png"
              />
            </div>
            <div>
              <Image
                width={"100%"}
                preview={false}
                src="https://oss.agoniblog.com/czp/20220325/16.png"
              />
            </div>
            <div>
              <Image
                width={"100%"}
                preview={false}
                src="https://oss.agoniblog.com/czp/20220325/3.png"
              />
              {/*<h3 style={contentStyle}></h3>*/}
            </div>
            <div>
              <Image
                width={"100%"}
                preview={false}
                src="https://oss.agoniblog.com/czp/20220325/3.png"
              />
            </div>
          </Carousel>
        </Content>
      </Layout>

    </GridContent>
  )
}

export default Home;
