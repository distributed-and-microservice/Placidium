import React from 'react';
import { connect } from 'dva';
import { Card, Button, Radio, Form, Input, message, Row, Col } from 'antd';

const FormItem = Form.Item;
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

  handleSubmitHigher = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      const rpcConfig = this.state.rpcConfig;
      const newRpcConfig = { ...rpcConfig, ...values };
      const newData = { ...this.state.rpcInfo, rpcConfig: newRpcConfig };
      if (!err) {
        this.props.dispatch({
          type: 'rpc/updateRpc',
          payload: newData,
          success: () => {
            message.success("保存成功");
          },
          error: (err) => {
            message.err("保存失败：" + err);
          }
        });
      }
    });
  }

  handleSubmitBase = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      const rpcInfo = this.state.rpcInfo;
      const newRpcInfo= { ...rpcInfo, ...values };
      if (!err) {
        this.props.dispatch({
          type: 'rpc/updateRpc',
          payload: newRpcInfo,
          success: () => {
            message.success("保存成功");
          },
          error: (err) => {
            message.err("保存失败：" + err);
          }
        });
      }
    });
  }

  changeLimit = (e) => {
    let limitConfig = this.state.limitConfig;
    limitConfig.limit = e.target.value;
    this.setState({ limitConfig })
  }

  changeCache  = (e) => {
    let cacheConfig = this.state.cacheConfig;
    cacheConfig.cache = e.target.value;
    this.setState({ cacheConfig })
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
              <Form onSubmit={this.handleSubmitBase}>
                <FormItem
                  {...formItemLayout}
                  label="描述"
                >
                  {getFieldDecorator('des', {
                    initialValue: this.state.rpcInfo.des,
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
                  label="开启"
                >
                  {getFieldDecorator('open', {
                    initialValue: this.state.rpcInfo.open,
                  })(
                    <RadioGroup>
                      <Radio value={true}>开启</Radio>
                      <Radio value={false}>关闭</Radio>
                    </RadioGroup>
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
              <Form onSubmit={this.handleSubmitHigher}>
                <FormItem
                  {...formItemLayout}
                  label="验签"
                >
                  {getFieldDecorator('needSign', {
                    initialValue: this.state.rpcConfig.needSign,
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
                  label="缓存"
                >
                  {getFieldDecorator('cacheConfig.cache', {
                    initialValue: this.state.cacheConfig.cache,
                    rules: [],
                  })(
                    <RadioGroup onChange={this.changeCache}>
                      <Radio value={true}>开启</Radio>
                      <Radio value={false}>关闭</Radio>
                    </RadioGroup>
                  )}
                </FormItem>
                {
                  this.state.cacheConfig.cache ? 
                    <div>
                      <FormItem
                        {...formItemLayout}
                        label="缓存时间"
                      >
                        {getFieldDecorator('cacheConfig.cacheTime', {
                          initialValue: this.state.cacheConfig.cacheTime,
                          rules: [{
                            required: true, message: 'Please input your cacheTime!',
                          }],
                        })(
                          <Input addonAfter="ms"/>
                        )}
                      </FormItem>
                    </div>
                  :
                    null
                }
                <FormItem
                  {...formItemLayout}
                  label="限流"
                >
                  {getFieldDecorator('limitConfig.limit', {
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
                        {getFieldDecorator('limitConfig.frequency', {
                          initialValue: this.state.limitConfig.frequency,
                          rules: [{
                            required: true, message: 'Please input your frequency!',
                          }],
                        })(
                          <Input addonAfter="次/s"/>
                        )}
                      </FormItem>
                      <FormItem
                        {...formItemLayout}
                        label="响应模板"
                      >
                        {getFieldDecorator('limitConfig.limitTemplate', {
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