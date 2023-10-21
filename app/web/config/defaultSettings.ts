import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'top',
  contentWidth: 'Fixed',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  headerHeight:60,
  splitMenus:false,
  title: 'AgoniBlog博客',
  logo: 'https://oss.agoniblog.com/f32f453e3588c80f3f496a1b2515411.jpg',
  iconfontUrl: '',
};

export default Settings;

