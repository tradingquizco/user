"use client";

import { Button, Flex, Form, Input, Spin, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";
import React, { useState } from "react";
import { UploadButton } from "./UploadButton";
import { useFormState } from "react-dom";
import { accountSettingAction } from "@/lib/actions/accountSettingAction";
import { ActionState } from "@/types";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const  initialState: ActionState = { isError: false, message: "" };
export const AccountSetting = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [actionState, action] = useFormState(accountSettingAction, initialState);

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  console.log("first", imageUrl);
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
        label="profile"
        name="profile"
        validateTrigger="onBlur"
        className="w-full md:w-3/5 "
        rules={[{ min: 3, type: "email", required: true }]}
      >
        <Flex gap="middle" wrap>
          <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{
                  width: "100%",
                }}
              />
            ) : (
              <UploadButton loading={loading} />
            )}
          </Upload>
        </Flex>
      </FormItem>

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
        label="Username"
        name="username"
        className="w-full md:w-3/5"
        validateTrigger="onBlur"
        rules={[{ min: 7, required: true }]}
      >
        <Password
          placeholder="username..."
          type="username"
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
