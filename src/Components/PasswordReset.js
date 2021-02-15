
import { Form, Input, Button, Card, Row, Col} from 'antd';
import 'antd/dist/antd.css';



const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const PasswordReset = () => {

  
 

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {

    var session = JSON.parse(localStorage.getItem("session"));
    console.log('Failed:', session.userID);
  };

  return (


      <Row justify="center" style={{ margin: '10% 0' }} >
    
      <Col span={8}>
      <Card title="Password Reset">
         
        
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please enter the email associated with your profile!',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item {...tailLayout} style={{ position: 'center' }}>
        <Button type="primary" htmlType="submit" >
          SEND
        </Button>
      </Form.Item>
    </Form>
    </Card>
    </Col></Row>

  );
};




export default PasswordReset;
