import React from 'react';
// @ts-ignore
import {Helmet} from "react-helmet";
import {GridContent} from "@ant-design/pro-layout";


const Home: React.FC = () => {
  return (
    <GridContent>
      <Helmet encodeSpecialCharacters={false}>
        <meta charSet="utf-8"/>
        <title>测试-PROLAYOUT</title>
        <link rel="canonical" href="http://mysite.com/example"/>
      </Helmet>
      <div>
        <h1>测试-PROLAYOUT</h1>
      </div>
    </GridContent>
  )
}
export default Home;
