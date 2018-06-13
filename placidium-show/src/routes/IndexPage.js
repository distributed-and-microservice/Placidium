import React, { Component } from 'react';
import { Route, Switch } from 'dva/router';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout } from 'antd';
import SiderMenu from '../components/SiderMenu.jsx';
import System from '../components/System';
import Rpc from '../components/Rpc';
import RpcEdit from '../components/RpcEdit';
const { Header, Sider, Content } = Layout;

class IndexPage extends Component {

  render() {
    return (
      <Layout className={styles.root}>
        <Header style={{ color: '#fff'}}>Placidium</Header>
        <Layout>
          <Sider>
            <SiderMenu></SiderMenu>
          </Sider>
          <Content>
            <Switch>
              <Route path="/system" component={System} />
              <Route path="/rpc" exact component={Rpc} />
              <Route path="/rpc/:id" component={RpcEdit} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
