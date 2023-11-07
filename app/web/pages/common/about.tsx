import {GridContent} from "@ant-design/pro-layout";
import React from "react";
import {Helmet} from "react-helmet";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import remarkGemoji from 'remark-gemoji'
import {Card} from "antd";
import './about.less'

const About: React.FC = () => {

  const about = '### Hi there 👋\n' +
    // '![AgoniBlog博客](https://oss.agoniblog.com/wechat.png)\n' +
    '\n' +
    '\n' +
    '\n' +
    '## 个人信息\n' +
    '\n' +
    '| 姓名： | 缪佳文            | 性别：     | 男             |\n' +
    '| ------ | ----------------- | ---------- | -------------- |\n' +
    '| 年龄： | 22                | 学历：     | 本科           |\n' +
    '| 民族： | 汉                | 工作经验： | 4年            |\n' +
    '| 邮箱： | 2627045617@qq.com | 职业方向： | Java开发工程师 |\n' +
    '\n' +
    '## 我的社交\n' +
    ':tada: [CSDN](https://blog.csdn.net/qq_41322460)\n' +
    '\n' +
    '## 技术栈\n' +
    '\n' +
    '**:pushpin:技能** \n' +
    '```\n' +
    'Java、MySQL、Redis、Vue2、JQuery、Element-UI\n' +
    '```\n' +
    '**:pushpin:框架**\n' +
    '```\n' +
    'Spring、SpringMvc、Mybatis、SpringBoot、SpringCloud、SpringSecurity\n' +
    '```\n' +
    '**:pushpin:中间件**\n' +
    '```\n' +
    'Elasticsearch、RabbitMQ、RocketMQ\n' +
    '```\n' +
    '**:pushpin:工具**\n' +
    '\n' +
    '```\n' +
    'IDEA、Webstrom、Maven、Git、Postman\n' +
    '```\n' +
    '**:pushpin:部署**\n' +
    '\n' +
    '```\n' +
    'Nginx、Linux、Tomcat\n' +
    '```\n' +
    '\n' +
    '## 👨‍💻 Java Development Engineer\n' +
    '\n' +
    '\n' +
    '![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=AloneMou&show_icons=true&theme=merko&locale=cn)\n' +
    '\n' +
    '## My GitHub\n' +
    '![AgoniMou GitHub stats](https://github-readme-stats.vercel.app/api?username=AloneMou&show_icons=true&theme=radical&locale=cn)\n' +
    '\n' +
    '\n' +
    '[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=AloneMou&repo=mou-rouyi-mybatis-plus)](https://github.com/AloneMou/mou-rouyi-mybatis-plus)\n' +
    '\n' +
    '[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=AloneMou&repo=mou-ruoyi-ant-design-vue)](https://github.com/AloneMou/mou-ruoyi-ant-design-vue)\n'

  return (
    <GridContent>
      <Helmet encodeSpecialCharacters={false}>
        <meta charSet="utf-8"/>
        <title>关于我</title>
      </Helmet>
      <Card>

        <ReactMarkdown
          className={'markdown-body'}
          remarkPlugins={[remarkGfm, remarkGemoji]}
        >
          {about}
        </ReactMarkdown>

        {/*<h1>Hi there </h1>*/}
        {/*<img src='https://github.com/AloneMou/AloneMou/raw/main/wechat.png' alt='AgoniBlog'/>*/}
      </Card>
    </GridContent>
  )
}

export default About;
