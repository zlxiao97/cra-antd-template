import { Form, Input, Button } from "antd";

import styles from "./index.module.less";

const Stateless = (props) => {
  const tableLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 16 }
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Form
          {...tableLayout}
          name="basic"
          requiredMark={false}
          labelAlign="left"
          layout="vertical"
          autoComplete="off"
          onFinish={props.handleSubmit}
        >
          <Form.Item
            label="账号"
            name="username"
            rules={[{ required: true, message: "请输入账号!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码！" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout} style={{ textAlign: "left" }}>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginButton}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Stateless;
