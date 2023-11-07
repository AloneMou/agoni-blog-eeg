import React from 'react';
// @ts-ignore
import {connect} from 'umi';
import {Helmet} from "react-helmet";
import {GridContent} from "@ant-design/pro-layout";


const Home: React.FC = (props) => {
  // @ts-ignore
  const {children, title} = props;
  return (
    <GridContent>

      <Helmet encodeSpecialCharacters={false}>
        <meta charSet="utf-8"/>
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example"/>
      </Helmet>
      <div>
        <h1>测试-PROLAYOUT</h1>
      </div>
    </GridContent>
  )
}
export default Home;
