"use client";

import { Button,  Form, Input, Spin } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";


export const UserSetting = () => {

  return (
    <Form
      name="trigger"
      style={{ width: "100%" }}
      className="flex items-center justify-center flex-col "
      layout="vertical"
      //     onFinish={onFinish}
      autoComplete="off"
    >

      <FormItem
        hasFeedback
        label="Email"
        name="email"
        validateTrigger="onBlur"
        className="w-full md:w-3/5"
        rules={[{ min: 3, type: "email", required: true }]}
      >
        <Input
          placeholder="Email..."
          type="email"
          defaultValue="test@test.com"
          disabled
          size="large"
          variant="filled"
        />
      </FormItem>
    

      <FormItem
        hasFeedback
        label="Name"
        name="name"
        validateTrigger="onBlur"
        className="w-full md:w-3/5"
        rules={[{ min: 3, type: "email", required: true }]}
      >
        <Input
          placeholder="name..."
          type="name"
          size="large"
          variant="filled"
        />
      </FormItem>

      <FormItem
        hasFeedback
        label="current Password"
        name="currentPassword"
        className="w-full md:w-3/5"
        validateTrigger="onBlur"
        rules={[{ min: 7, required: true }]}
      >
        <Password
          placeholder="current Password..."
          type="currentPassword"
          size="large"
          variant="filled"
        />
      </FormItem>

      <FormItem
        hasFeedback
        label="New Password"
        name="newPassword"
        className="w-full md:w-3/5"
        validateTrigger="onBlur"
        rules={[{ min: 7, required: true }]}
      >
        <Password
          placeholder="new Password..."
          type="newPassword"
          size="large"
          variant="filled"
        />
      </FormItem>

      <FormItem className="w-full md:w-3/5 mt-4">
        <Spin spinning={false}>
          <Button
            type="primary"
            variant="filled"
            htmlType="submit"
            size="large"
            className="w-full"
          >
            {!false ? "Save Changes" : "Editing.."}
          </Button>
        </Spin>
      </FormItem>
    </Form>
  );
};
