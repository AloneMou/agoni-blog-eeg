import {GridContent} from "@ant-design/pro-layout";
import React from "react";
import {Helmet} from "react-helmet";


const GithubHome: React.FC = () => {

  return (
    <GridContent>
      <Helmet encodeSpecialCharacters={false}>
        <meta charSet="utf-8"/>
        <title>Github仓库推荐</title>
      </Helmet>
      <div>
        <h1>Github仓库推荐</h1>
      </div>
    </GridContent>
  )
}

export default GithubHome;
