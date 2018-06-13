import React from 'react';
import { connect } from 'dva';
import { Table, Card, Button, Radio, Form, Input, message, Row, Col } from 'antd';

const { Column } = Table;
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class RpcEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rpcInfo: {},
      rpcConfig: {},
      limitConfig: {},
      cacheConfig: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch({
      type: 'rpc/fetchOne',
      payload: id,
      success: (data) => {
        console.log(data)
        this.setState({ 
          rpcInfo: data, 
          rpcConfig: data.rpcConfig,
          limitConfig: data.rpcConfig.limitConfig,
          cacheConfig: data.rpcConfig.cacheConfig,
        })
       
      },
    });
  }

  changeLimit = (e) => {
    let limitConfig = this.state.limitConfig;
    limitConfig.limit = e.target.value;
    this.setState({ limitConfig })
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 8 },
        sm: { span: 4 },
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
    return(
      <div style={{ padding: "4px 4px 4px" }} >
        <Row>
          <Col span={12}>
            <Card title="基本配置" style={{ margin: '4px' }}>
              <Form onSubmit={this.handleSubmitRegister}>
                <FormItem
                  {...formItemLayout}
                  label="描述"
                >
                  {getFieldDecorator('des', {
                    initialValue: this.state.rpcInfo.des,
                    rules: [{
                     
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="名字"
                >
                  {getFieldDecorator('name', {
                    initialValue: this.state.rpcInfo.name,
                    rules: [],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="是否开启"
                >
                  {getFieldDecorator('open', {
                    initialValue: this.state.rpcInfo.open,
                    rules: [{
                      required: true, message: 'Please input your registerUrl!',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem {...formItemLayoutWithOutLabel}>
                  <Button type="primary" htmlType="submit">保存</Button>
                </FormItem>
              </Form>
            </Card>
            <Card title="Rpc 信息" style={{ margin: '4px'  }}>
              <p>
                <label>系统名：</label>{this.state.rpcConfig.appName}
                <br />
                <label>接口名：</label>{this.state.rpcConfig.itfName}
                <br />
                <label>方法名：</label>{this.state.rpcConfig.methodName}
                <br />
                <label>rpcValue：</label>{this.state.rpcConfig.rpcValue}
                <br />
                <label>rpcName：</label>{this.state.rpcConfig.rpcName}
                <br />
                <label>rpc 描述：</label>{this.state.rpcConfig.des}
              </p>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="高级配置" style={{ margin: '4px'  }}>
              <Form onSubmit={this.handleSubmitRegister}>
                <FormItem
                  {...formItemLayout}
                  label="缓存"
                >
                  {getFieldDecorator('cache', {
                    initialValue: this.state.cacheConfig.cache,
                    rules: [],
                  })(
                    <RadioGroup>
                      <Radio value={true}>开启</Radio>
                      <Radio value={false}>关闭</Radio>
                    </RadioGroup>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="限流"
                >
                  {getFieldDecorator('limit', {
                    initialValue: this.state.limitConfig.limit,
                    rules: [],
                  })(
                    <RadioGroup onChange={this.changeLimit}>
                      <Radio value={true}>开启</Radio>
                      <Radio value={false}>关闭</Radio>
                    </RadioGroup>
                  )}
                </FormItem>
                {
                  this.state.limitConfig.limit ? 
                    <div>
                      <FormItem
                        {...formItemLayout}
                        label="限流值"
                      >
                        {getFieldDecorator('frequency', {
                          initialValue: this.state.limitConfig.frequency,
                          rules: [{
                            required: true, message: 'Please input your frequency!',
                          }],
                        })(
                          <Input addonAfter="次/min"/>
                        )}
                      </FormItem>
                      <FormItem
                        {...formItemLayout}
                        label="响应模板"
                      >
                        {getFieldDecorator('limitTemplate', {
                          initialValue: this.state.limitConfig.limitTemplate,
                          rules: [{
                            required: true, message: 'Please input your frequency!',
                          }],
                        })(
                          <Input />
                        )}
                      </FormItem>
                    </div>
                  :
                    null
                }
               
                <FormItem {...formItemLayoutWithOutLabel}>
                  <Button type="primary" htmlType="submit">保存</Button>
                </FormItem>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

RpcEdit.propTypes = {
};

function mapStateToProps(state) {
  return {
    rpc: state.rpc,
  };
}

const WrappedRpc = Form.create()(RpcEdit);

export default connect(mapStateToProps)(WrappedRpc);;