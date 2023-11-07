import {GridContent} from "@ant-design/pro-layout";
import React, {useState} from "react";
import {Helmet} from "react-helmet";
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {coldarkDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {blogArticleDetail} from "@/api/blog";
import CodeCopyButton from './codeCopyBtn'
import {Alert, Card, Col, Layout, Row, Space} from "antd";

const {Header, Footer, Sider, Content} = Layout;
const ArticleHome: React.FC = () => {
  const Pre = ({children}) => <pre className="blog-pre">
        <CodeCopyButton>{children}</CodeCopyButton>
    {children}
    </pre>
  const [markdown, setMarkdown] = useState<string>("```java \n" +
    "System.out.print \n" +
    "```"
  )
  const [article, setArticle] = useState<BlogArticleDetailRespVO>({
    id: '',
    title: '',
    isOriginal: true,
    author: '',
    provenanceLink: '',
    creator: '',
    content: '',
  })

  const getDetail = () => {
    blogArticleDetail('1718835990907367425').then(res => {
      setArticle(res.data)
      // setMarkdown(res.data.content);
    })
  }

  // useEffect(() => {
  //   getDetail()
  // }, [markdown])

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
                <ReactMarkdown
                  components={{
                    pre: Pre,
                    code(props) {
                      const {children, className, node, ...rest} = props
                      const match = /language-(\w+)/.exec(className || '')
                      return match ? (
                        <SyntaxHighlighter
                          {...rest}
                          showLineNumbers={true}
                          children={String(children).replace(/\n$/, '')}
                          style={coldarkDark}
                          language={match[1]}
                          PreTag="div"
                        />
                      ) : (
                        <code {...rest} className={className}>
                          {children}
                        </code>
                      )
                    }
                  }
                  }
                >{article.content}</ReactMarkdown>
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

export default ArticleHome;
