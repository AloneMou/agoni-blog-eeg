import {GridContent} from "@ant-design/pro-layout";
import React from "react";
import {Helmet} from "react-helmet";


const ArticleHome: React.FC = () => {

  return (
    <GridContent>
      <Helmet encodeSpecialCharacters={false}>
        <meta charSet="utf-8"/>
        <title>面试题</title>
      </Helmet>
      <div>
        <h1>面试题</h1>
      </div>
    </GridContent>
  )
}

export default ArticleHome;
