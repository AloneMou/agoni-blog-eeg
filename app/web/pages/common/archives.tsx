import {GridContent} from "@ant-design/pro-layout";
import React from "react";
import {Helmet} from "react-helmet";


const Archives: React.FC = () => {

  return (
    <GridContent>
      <Helmet encodeSpecialCharacters={false}>
        <meta charSet="utf-8"/>
        <title>归档</title>
      </Helmet>
      <div>
        <h1>归档</h1>
      </div>
    </GridContent>
  )
}

export default Archives;
