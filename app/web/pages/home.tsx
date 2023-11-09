import {Avatar, Button, Card, Carousel, Col, Image, Layout, Row, Space} from "antd";
import {GridContent} from "@ant-design/pro-layout";
import {EyeOutlined, HeartOutlined, LikeOutlined, SettingOutlined, StarOutlined} from "@ant-design/icons";
import {Helmet} from "react-helmet";
import {blogArticleList} from "@/api/blog";
import {useEffect, useState} from "react";


const {Meta} = Card;
const {Sider, Content} = Layout;

const Home: React.FC = () => {

  const images = ['https://oss.agoniblog.com/czp/20220325/16.png', 'https://oss.agoniblog.com/czp/20220325/3.png'];
  const [queryParam] = useState<BlogArticleListReqVO>({
    pageNo: 1,
    pageSize: 20,
    title: '',
  })
  const [list, setList] = useState<BlogArticle[]>([]);

  const carouselList = images.map(image => {
    return (<>
      <div>
        <Image
          width={"100%"}
          height={500}
          preview={false}
          src={image}
        />
      </div>
    </>)
  })

  const getList = () => {
    blogArticleList(queryParam).then(res => {
      setList(res.data.list)
    })
  }

  useEffect(() => {
    getList()
  }, [queryParam])

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
            {carouselList}
          </Carousel>
          <div className={'blogsbox'}>
            {list.map((blog) => (
              <>
                <Card data-scroll-reveal="enter bottom over 1s" className="blogs">
                  <h3 className="blogtitle">
                    <Button type='link' style={{color: '#555'}} href={`/article/${blog.id}`}
                            target="_self">{blog.title}</Button>
                  </h3>
                  <Row>
                    <Col xs={5}>
                  <span>
                  <a href={`/article/${blog.id}`} target="_self" rel="noreferrer" style={{color: '#555'}}>
                    <Image
                      height={150}
                      width={150}
                      preview={false}
                      src="https://picture.moguit.cn/blog/chat/jpg/2022/3/21/1647823169730.jpg"/>
                  </a>
                  </span>
                    </Col>
                    <Col xs={19}>
                      <p className="blogtext">{blog.summary}</p>
                    </Col>
                  </Row>
                  <div>
                    <div className="bloginfo">
                      <Space wrap style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                          <Space>
                            <Avatar size={24}
                                    src={'https://picture.moguit.cn//blog/admin/jpg/2021/11/10/1636512049307.jpg'}/>
                            <div className="author"><span className="pointer lv2">{blog.author}</span></div>
                          </Space>
                        </div>
                        <div>
                          <Space size={12}>
                            <div>
                              <EyeOutlined/> 12
                            </div>
                            <div>
                              <HeartOutlined/>13
                            </div>
                            <div>
                              <LikeOutlined/>50
                            </div>
                            <div>
                              <StarOutlined/>12
                            </div>
                          </Space>
                        </div>
                      </Space>
                    </div>
                  </div>
                </Card>
              </>
            ))}
          </div>
        </Content>
      </Layout>
    </GridContent>
  )
}

export default Home;
