import React from 'react';
import { connect } from 'dva';
import { Table, Divider, Button, Modal, Form, Input, message} from 'antd';

const { Column } = Table;
const FormItem = Form.Item;


class System extends React.Component {

  state = {
    registerVisible: false,
    editVisible: false
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'system/fetchAll',
    });
  }

  handleCancelRegister = () => {
    this.setState({ registerVisible: false });
  }

  handleOpenRegister = () => {
    this.setState({ registerVisible: true });
  }

  handleSubmitRegister = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'system/addSystem',
          payload: values,
          success: () => {
            message.success("注册成功");
            this.setState({ registerVisible: false })
          },
          error: (err) => {
            message.err("注册失败：" + err);
            this.setState({ registerVisible: false })
          }
        });
        
      }
    });
  }

  render () {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    return (
      <div style={{ padding: "8px 8px 8px" }} >
        <Button type="primary" onClick={this.handleOpenRegister}>添加系统</Button>
        <Table dataSource={this.props.system.systemInfos} style={{ marginTop: "8px" }}>
          <Column
            title="系统名"
            dataIndex="name"
            rowKey="name"
          />
          <Column
            title="Rpc 协议"
            dataIndex="upstreamType"
            rowKey="upstreamType"
          />
          <Column
            title="注册中心"
            dataIndex="registerUrl"
            rowKey="registerUrl"
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
                <a href="javascript:;">编辑</a>
                <Divider type="vertical" />
                <a href="javascript:;">删除</a>
              </span>
            )}
          />
      </Table>
      <Modal
        title="注册系统"
        visible={this.state.registerVisible}
        onCancel={this.handleCancelRegister}
      >
        <Form onSubmit={this.handleSubmitRegister}>
          <FormItem
            {...formItemLayout}
            label="系统名"
          >
            {getFieldDecorator('sysName', {
              rules: [{
                required: true, message: 'Please input your sysName!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="注册中心"
          >
            {getFieldDecorator('registerUrl', {
              rules: [{
                required: true, message: 'Please input your registerUrl!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Rpc协议"
          >
            {getFieldDecorator('upstreamType', {
              rules: [{
                required: true, message: 'Please input your upstreamType!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem {...formItemLayoutWithOutLabel}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </Modal>
      
    </div>
    );
  }
};

System.propTypes = {
};

function mapStateToProps(state) {
  return {
    system: state.system,
  };
}

const WrappedSystem = Form.create()(System);

export default connect(mapStateToProps)(WrappedSystem);;