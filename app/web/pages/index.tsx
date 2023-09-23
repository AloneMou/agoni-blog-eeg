import React from 'react';
// @ts-ignore
import {connect, useIntl, getLocale, setLocale} from 'umi';
import {Button} from 'antd';
import {Helmet} from "react-helmet";
import {GridContent} from "@ant-design/pro-layout";


const Home: React.FC = (props) => {
  // @ts-ignore
  const {children, title} = props;
  const changeLangs = () => {

    const lang = getLocale()
    const change = lang === 'zh-CN' ? 'en-US' : 'zh-CN'
    // 刷新页面
    // setLocale('zh-TW', true);
    // 不刷新页面
    setLocale(change, true);
  }
  const intl = useIntl();
  return (
    <GridContent>

      <Helmet encodeSpecialCharacters={false}>
        <meta charSet="utf-8"/>
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example"/>
      </Helmet>
      <div>
        <h1>测试-PROLAYOUT</h1>
        <h2>{intl.formatMessage(
          {
            id: 'umi',
          }
        )}</h2>
        <Button onClick={changeLangs}>切换语言</Button>
      </div>
    </GridContent>
  )
}
// @ts-ignore
Home.getInitialProps = (async ({store, isServer, history, match, route}) => {
  if (!isServer) {
    return
  }
  await store.dispatch({type: 'test/test'})
  const {test} = store.getState()
  return {test}
})

export default connect((({test}) => ({title: test.title})))(Home)
