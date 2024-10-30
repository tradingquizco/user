"use client";

import useInvite from "@/store/useInvite";
import useLoading from "@/store/useLoading";
import { UserAddOutlined } from "@ant-design/icons";
import { Button, Divider, Flex, Modal, Skeleton, Spin } from "antd";
import OTP from "antd/es/input/OTP";
import Typography from "antd/es/typography";

import React, { useEffect, useState } from "react";
import useMessage from "antd/es/message/useMessage";

const Invite = () => {
  const [msgApi, context] = useMessage();

  const { getInviteCode, inviteCode, postInvite, message, isError } =
    useInvite();
  const { loading, error } = useLoading();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inviterCode, setInviterCode] = useState<string>("");

  const { Text, Title, Paragraph } = Typography;
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (text: any) => {
    setInviterCode(text);
  };

  useEffect(() => {
    getInviteCode();
  }, []);

  return (
    <>
      <Button type="text" onClick={showModal} icon={<UserAddOutlined />}>
        Invite
      </Button>
      <Modal
        title="Invite Your Friends"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[]}
      >
        {context}
        <Flex className="w-full" justify="space-between" align="center">
          <Text>Your Invite Code</Text>
          {loading ? <Spin /> : <Paragraph copyable>{inviteCode}</Paragraph>}
        </Flex>
        <Divider variant="dashed" className="!my-8">
          <Text type="secondary" className="text-sm">
            Have Aother Invite Code
          </Text>
        </Divider>
        <Flex vertical gap={15}>
          <Flex className="w-full" justify="space-between" align="center">
            <Text>Invite Code</Text>
            <OTP onChange={onChange} size="small" />
          </Flex>
          <Button
            type="primary"
            onClick={() => {
              postInvite(inviterCode, msgApi);
            }}
          >
            Invite
          </Button>
        </Flex>

        {isError && message && (
          <Paragraph type="danger" className="text-sm">
            {message}
          </Paragraph>
        )}
        {!isError && message && (
          <Paragraph type="success" className="text-sm">
            Invited Successfully!
          </Paragraph>
        )}
      </Modal>
    </>
  );
};

export default Invite;
