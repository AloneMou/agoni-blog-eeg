import {GridContent} from "@ant-design/pro-layout";
import React from "react";
import {Helmet} from "react-helmet";


const About: React.FC = () => {

  return (
    <GridContent>
      <Helmet encodeSpecialCharacters={false}>
        <meta charSet="utf-8"/>
        <title>关于我</title>
      </Helmet>
      <div>
        <h1>Hi there </h1>
        <img src='https://github.com/AloneMou/AloneMou/raw/main/wechat.png' alt='AgoniBlog'/>
      </div>
    </GridContent>
  )
}

export default About;
