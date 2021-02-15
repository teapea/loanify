import React from 'react';
import { Form, Input, Button, Card, Row, Col,message} from 'antd';
import { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
import axios from 'axios'

message.config({
  top: 200,
  duration: 2,
  maxCount: 3,
  rtl: true,
});

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




const Login = () => {

  const history = useHistory();
  
   
  const [load_mode, setload_mode] = React.useState(false);

 



  const onFinish = (values) => {

    setload_mode(true);

     

      const apiUrl = 'http://localhost:3000/api/getUser';
      axios.post(apiUrl,{username:values.username,password:values.password}).then((response) => {

        setTimeout(() => {
          setload_mode(false);
        }, 3000);

        const data = response.data;
        console.log(data);
        

        if(data.user_id === values.username.toLowerCase() && data.password ===values.password)
        {    
        let session = data;
        localStorage.setItem("session",JSON.stringify(session));
     
        console.log('Success',JSON.stringify(session));
     
         history.push("/home");
        }
        else
        {
        
       
        message.error('Invalid Username or Password');
       
     
        }

       

     
      });

    };
    


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };





  return (


      <Row justify="center" style={{ margin: '10% 0' }} >
    
      <Col span={8}>
      <Card title="Welcome">
         
        
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
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item {...tailLayout}>
        <a href='/forgot_password'>Forgot Password?</a>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button  type="primary" loading={load_mode}   htmlType="submit">
          SIGN IN
        </Button>
      </Form.Item>
    </Form>
    </Card>
    </Col></Row>

  );
};




export default Login;
