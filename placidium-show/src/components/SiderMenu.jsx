import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

class Sider extends React.Component {
  render() {
    return (
      <Menu
        style={{ height: '100%' }}
        defaultSelectedKeys={['1']}
        theme='dark'
      >
        <Menu.Item key="1">
          <Icon type="mail" />
          系统管理
          <Link to="/system"></Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="calendar" />
          Rpc 管理
          <Link to="/rpc"></Link>
        </Menu.Item>
      </Menu>  
    );
  }
}
export default Sider;

