import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
const { SubMenu } = Menu;

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
        <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Navigation Three</span></span>}>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
          <SubMenu key="sub1-2" title="Submenu">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="setting" /><span>Navigation Four</span></span>}>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
        </SubMenu>
      </Menu>  
    );
  }
}
export default Sider;

