import {GridContent} from "@ant-design/pro-layout";
import React from "react";
import {Helmet} from "react-helmet";
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {coldarkDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {blogArticleDetail} from "@/api/blog";
import CodeCopyButton from './codeCopyBtn'
import {Alert, Card, Col, Layout, Row, Space} from "antd";
// @ts-ignore
import {connect} from "umi";

const {Content} = Layout;
const ArticleHome: React.FC = (props) => {
  // // @ts-ignore
  // const id = props.match.params.id;
  console.log(props)
  const Pre = ({children}) => <pre className="blog-pre">
        <CodeCopyButton>{children}</CodeCopyButton>
    {children}
    </pre>
  // @ts-ignore
  const {article} = props;
  // const [article, setArticle] = useState<BlogArticleDetailRespVO>(detail)
  // setArticle(detail);

  // const getDetail = (id: string) => {
  //   blogArticleDetail(id).then(res => {
  //     setArticle(res.data)
  //   })
  // }
  //
  // useEffect(() => {
  //   // @ts-ignore
  //   if (id) {
  //     // @ts-ignore
  //     getDetail(id)
  //   }
  // }, [id])

  return (
    <GridContent>
      <Helmet encodeSpecialCharacters={false}>
        <meta charSet="utf-8"/>
        <title>{article.title} | AgoniBlog博客</title>
      </Helmet>
      <Layout>
        <Row>
          <Col xs={24} sm={12} md={16} lg={16} xl={16} xxl={16}>
            <Content>
              <Card>
                <h2>{article.title}</h2>
                <Alert message="本文为AgoniBlog博客原创文章，转载无需和我联系，但请注明来自AgoniBlog博客 https://www.agoniblog.com" type="info"
                       showIcon/>
                {article.type === 2 &&
                <ReactMarkdown
                  components={{
                    pre: Pre,
                    code: function (prop) {
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      const {children, className, node, ...rest} = prop
                      const match = /language-(\w+)/.exec(className || '')
                      return match ? (
                        <SyntaxHighlighter
                          {...rest}
                          showLineNumbers={true}
                          style={coldarkDark}
                          language={match[1]}
                          PreTag="div"
                        >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                      ) : (
                        <code {...rest} className={className}>
                          {children}
                        </code>
                      )
                    }
                  }
                  }
                >{article.content}</ReactMarkdown>
                }
                {article.type === 1 &&
                <div dangerouslySetInnerHTML={{__html: article.content}}/>
                }
              </Card>
            </Content>
          </Col>
          <Col span={8}>
            <div style={{marginLeft: '20px'}}>
              <Card title={'关于我'}>
                <div>
                  个人对于新框架比较感兴趣，遇到比较好的项目或者工具包会进行实践
                </div>
                <Space>
                  <div>
                    A
                  </div>
                  <div>
                    A
                  </div>
                  <div>
                    A
                  </div>
                </Space>
              </Card>
            </div>
          </Col>
          {/*</Space>*/}
        </Row>
      </Layout>
    </GridContent>
  )
}


// @ts-ignore
ArticleHome.getInitialProps = (async ({store, isServer, history, match, route}) => {
  if (!isServer) {
    return
  }
  const res = await blogArticleDetail(match.params.id);
  await store.dispatch({type: 'article/detail', payload: res.data})
  const {article} = store.getState()
  console.log(article)
  return {article};
})

// @ts-ignore
export default connect((({article}) => ({article: article.detail})))(ArticleHome);
