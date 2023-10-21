import {Avatar, Button, Card, Carousel, Col, Row, Space, Image, Layout} from "antd";
import {GridContent} from "@ant-design/pro-layout";
import {EditOutlined, SettingOutlined} from "@ant-design/icons";
import {Helmet} from "react-helmet";


const {Meta} = Card;
const {Header, Footer, Sider, Content} = Layout;

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
              <SettingOutlined/>,
              <SettingOutlined/>,
              <SettingOutlined/>,
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

          <Row gutter={16}>
            <Col span={6}>
              <Card title={"JavaGuide"}
                    actions={[
                      <Button icon={<SettingOutlined/>}>访问</Button>,
                    ]}
              >
                <Meta
                  avatar={<Avatar src="https://www.github-zh.com/github_avatars/Snailclimb?size=35"/>}
                  description="「Java学习+面试指南」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide！"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card title={"JavaGuide"}
                    actions={[
                      <Button icon={<SettingOutlined/>}>访问</Button>,
                    ]}
              >
                <Meta
                  avatar={<Avatar src="https://www.github-zh.com/github_avatars/Snailclimb?size=35"/>}
                  description="「Java学习+面试指南」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide！"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card title={"JavaGuide"}
                    actions={[
                      <Button icon={<SettingOutlined/>}>访问</Button>,
                    ]}
              >
                <Meta
                  avatar={<Avatar src="https://www.github-zh.com/github_avatars/Snailclimb?size=35"/>}
                  description="「Java学习+面试指南」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide！"
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card title={"JavaGuide"}
                    actions={[
                      <Button icon={<SettingOutlined/>}>访问</Button>,
                    ]}
              >
                <Meta
                  avatar={<Avatar src="https://www.github-zh.com/github_avatars/Snailclimb?size=35"/>}
                  description="「Java学习+面试指南」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide！"
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>

    </GridContent>
  )
}

export default Home;
