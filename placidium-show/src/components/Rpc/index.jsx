import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Table, Divider, Form } from 'antd';

const { Column } = Table;

class Rpc extends React.Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'rpc/fetchAll',
    });
  }

  render() {
    return(
      <div style={{ padding: "8px 8px 8px" }} >
        <Table dataSource={this.props.rpc.rpcInfos} style={{ marginTop: "8px" }}>
          <Column
            title="rpcValue"
            dataIndex="rpcValue"
            rowKey="rpcValue"
          />
          <Column
            title="rpcName"
            dataIndex="name"
            rowKey="name"
          />
          <Column
            title="状态"
            dataIndex="open"
            rowKey="open"
            render={(text, record) => (
              <span>
                {text ? "开启" : "关闭"}
              </span>
            )}
          />
          <Column
            title="系统"
            dataIndex="sysName"
            rowKey="sysName"
          />
          <Column
            title="创建时间"
            dataIndex="createTime"
            rowKey="createTime"
          />
          <Column
            title="操作"
            rowKey="action"
            render={(text, record) => (
              <span>
                <Link to={`/rpc/${record.id}`}>编辑</Link>
                <Divider type="vertical" />
                <a href="javascript:;">删除</a>
              </span>
            )}
          />
        </Table>
      </div>
    )
  }
}

Rpc.propTypes = {
};

function mapStateToProps(state) {
  return {
    rpc: state.rpc,
  };
}

const WrappedRpc = Form.create()(Rpc);

export default connect(mapStateToProps)(WrappedRpc);;