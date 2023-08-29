import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const FormValidation = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <h4>Form Validation</h4>
      <Form autoComplete="off" labelCol={{ span: 5 }} wrapperCol={{ span: 24 }}>
        <Form.Item
          name="fullName"
          label="Full Name "
          rules={[
            {
              required: true,
              message: "please enter your name",
            },
            { whitespace: true },
            { min: 4 },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "please enter your email",
            },
            { type: "email", message: "please enter a valid email" },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          name="password"
          label=" Password"
          rules={[
            {
              required: true,
            },
            {
              min: 8,
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Your password dose not match");
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Enter Your Confirm Password" />
        </Form.Item>

        <Form.Item name="gender" label=" Gander" requiredMark="optional">
          <Select placeholder="select your gander">
            <Select.Option value="male"> Male</Select.Option>
            <Select.Option value="female"> Female</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="dob" label=" date of birth ">
          <DatePicker
            picker="date"
            style={{ width: "100%" }}
            placeholder=" Chose date of birth  "
          />
        </Form.Item>

        <Form.Item name="website" label="Website ">
          <Input placeholder="Add your website Url" />
        </Form.Item>
      </Form>

      <Form.Item name="agreement" wrapperCol={{ span: 24 }}>
        <Checkbox>
          Agree to your <a href="">terms and conditions</a>
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button block type="primary" htmlType="submit">
          Submit
        </Button>
        <Link to={"/"}>
          <Button block type="primary" style={{ marginTop: "10px" }}>
            {" "}
            Back{" "}
          </Button>
        </Link>
      </Form.Item>
    </div>
  );
};

export default FormValidation;
