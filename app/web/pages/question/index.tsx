import {GridContent} from "@ant-design/pro-layout";
import React from "react";
import {Helmet} from "react-helmet";


const ArticleHome: React.FC = () => {

  return (
    <GridContent>
      <Helmet encodeSpecialCharacters={false}>
        <meta charSet="utf-8"/>
        <title>问答</title>
      </Helmet>
      <div>
        <h1>问答</h1>
      </div>
    </GridContent>
  )
}

export default ArticleHome;
