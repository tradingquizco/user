import { AccountSetting } from "@/components/setting/AccountSetting";
import { UserSetting } from "@/components/setting/UserSetting";
import { Divider } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

function Setting() {
  return (
    <div className="h-dvh">
      <header className="flex items-center justify-center flex-col text-center">
        <Title level={3}>Account Setting</Title>
      </header>
      <div className=" h-fit py-3">
        <AccountSetting />
      </div>
      <Divider dashed className="text-4xl">
        User Setting
      </Divider>
      <div className=" h-fit">
        <UserSetting />
      </div>
    </div>
  );
}

export default Setting;
