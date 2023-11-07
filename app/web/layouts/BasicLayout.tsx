import {BasicLayoutProps as ProLayoutProps, DefaultFooter} from '@ant-design/pro-layout';
import ProLayout from '@ant-design/pro-layout';
import React from 'react';
import defaultSettings from '../config/defaultSettings';
import {BackTop} from 'antd';
import {Link} from 'umi';
import {GithubOutlined} from '@ant-design/icons';

export interface BasicLayoutProps extends ProLayoutProps {
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
}


/**
 * 基础布局
 * @param props
 * @constructor
 * @author liyupi
 */
const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  return (
    <>
      <ProLayout
        className="basic-layout"
        {...props}
        {...defaultSettings}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || !menuItemProps.path) {
            return defaultDom;
          }
          // @ts-ignore
          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        footerRender={() => {
          return <DefaultFooter
            copyright="@2023 AgoniBlog博客"
            links={[
              {
                key: 'AgoniBlog博客',
                title: 'AgoniBlog博客',
                href: 'https://www.agoniblog.com',
                blankTarget: true,
              },
              {
                key: '我的GitHub',
                title: <GithubOutlined/>,
                href: 'https://github.com/AloneMou',
                blankTarget: true,
              },
              {
                key: 'CSDN',
                title: '我的CSDN',
                href: 'https://alonemou.blog.csdn.net',
                blankTarget: true,
              },
            ]}
          />;
        }}
        // @ts-ignore
        childrenRender={(children, props) => {
          return (
            <>
              {children}
              <BackTop/>
            </>
          );
        }}
      >
      </ProLayout>
    </>
  );
};

export default BasicLayout;
