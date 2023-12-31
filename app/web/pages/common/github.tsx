import {GridContent} from "@ant-design/pro-layout";
import React from "react";
import {Helmet} from "react-helmet";
import {githubList} from "@/api/github";
import {Button, Card, Col, Row} from "antd";
import '@/pages/common/github.css'
// @ts-ignore
import {connect} from "umi";

const GithubHome: React.FC = (props) => {
  // @ts-ignore
  const {records} = props;
  // const [queryParam] = useState<GithubRepositoryListReqVo>({
  //   name: '',
  //   pageNo: 1,
  //   pageSize: 20,
  // });
  // const [list, setList] = useState<GithubRepository[]>([]);
  // setList(github.list)
  // const githubNode = ;

  // const getList = () => {
  //   githubList(queryParam).then(res => {
  //     setList(res.data.list)
  //   })
  // }

  // useEffect(() => {
  //   // getList();
  // }, [queryParam])

  return (
    <GridContent>
      <Helmet encodeSpecialCharacters={false}>
        <meta charSet="utf-8"/>
        <title>Github仓库推荐</title>
      </Helmet>
      <div>
        <h1>Github仓库推荐</h1>
        <Row>
          {
            records.map((item) => (
              <Col span={12} key={item.id}>
                <Card title={<Button type='link' target='_blank' key={item.id} href={item.htmlUrl}>{item.name}</Button>}

                      style={{marginTop: '20px', marginLeft: '20px', textOverflow: 'ellipsis'}}>
                  <div className='githubList' key={item.id}>
                    {item.description}
                  </div>
                </Card>
              </Col>
            ))
          }
        </Row>
      </div>
    </GridContent>
  )
}

// @ts-ignore
GithubHome.getInitialProps = (async ({store, isServer, history, match, route}) => {
  if (!isServer) {
    return
  }
  const res = await githubList({pageNo: 1, pageSize: 20});
  await store.dispatch({type: 'github/list', payload: res.data.list})
  const {github} = store.getState()
  return {github};
})

// @ts-ignore
export default connect((({github}) => ({records: github.list})))(GithubHome);
