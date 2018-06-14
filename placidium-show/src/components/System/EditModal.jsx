import React from 'react';
import { connect } from 'dva';
import { Table, Divider, Button, Modal, Form, Input, message } from 'antd';

const { Column } = Table;
const { TextArea } = Input;
const FormItem = Form.Item;


class EditModal extends React.Component {

  handleSubmitEdit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      const currentSystem = this.props.currentSystem;
      const newData = { ...currentSystem, ...values };
      console.log(newData)
      this.props.handleSubmitEdit(newData);
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 16 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 12 },
      },
    };

    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    return (
      <Modal
        title="系统配置"
        visible={this.props.editVisible}
        onCancel={this.props.handleCancelEdit}
        footer={null}
      >
        <Form onSubmit={this.handleSubmitEdit}>
          <FormItem
            {...formItemLayout}
            label="publicKey"
          >
            {getFieldDecorator('publicKey', {
              initialValue: this.props.currentSystem.publicKey,
            })(
              <TextArea type="textarea" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="注册中心"
          >
            {getFieldDecorator('registerUrl', {
              initialValue: this.props.currentSystem.registerUrl,
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
      </Modal>
    )
  }
}

EditModal.propTypes = {
};

export default Form.create()(EditModal)