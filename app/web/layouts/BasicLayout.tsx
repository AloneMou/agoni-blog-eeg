import type {BasicLayoutProps as ProLayoutProps} from '@ant-design/pro-layout';
import ProLayout from '@ant-design/pro-layout';
import React from 'react';
import {useEffect} from 'react';
import defaultSettings from '../config/defaultSettings';
import {BackTop} from 'antd';
import {Link} from 'umi';

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
  useEffect(() => {
  }, []);
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
