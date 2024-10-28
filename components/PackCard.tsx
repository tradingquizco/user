"use client";
import { Button, Divider, Flex, message, Spin } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import P from "antd/es/typography/Paragraph";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { PlusOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import usePacks from "@/store/usePckes";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import useLoading from "@/store/useLoading";
import { IPack } from "@/types";
import useUser from "@/store/useUser";

const PackCard = ({
  pack,
  isPackAdded = false,
}: {
  pack: IPack;
  isPackAdded?: boolean;
}) => {
  const [msgApi, context] = message.useMessage();
  const { push } = useRouter();

  const { loading } = useLoading();
  const { addPackToUserPacks } = usePacks();
  const { isUserInvitesUsers, setIsUserInvitesUsers } = useUser();

  const [expanded, setExpanded] = useState<boolean>(false);

  const sessionId = Cookies.get("sessionId") ?? "";

  const buttonClick = () => {
    if (pack.isFree) {
      addPackToUserPacks({
        packId: pack.id,
        sessionId: sessionId,
        msgApi,
      });
    } else {
      if (isUserInvitesUsers) {
        addPackToUserPacks({
          packId: pack.id,
          sessionId: sessionId,
          msgApi,
        });
      } else {
        msgApi.error("you should Invite two people to use this pack");
      }
      //Pack with price
    }
  };

  useEffect(() => {
    setIsUserInvitesUsers();
  }, []);

  return (
    <Content className="w-[95%] h-[250px] rounded-md max-w-[650px] max-sm:h-[450px] border">
      <Flex
        className="w-full h-full p-3 max-sm:!flex-col"
        justify="space-between"
        align="start"
        gap={15}
      >
        {context}
        <div className="w-1/2 h-full max-sm:w-full max-sm:h-1/2">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_IMAGES_URL}/${pack.coverImageUrl}`}
            className="w-full h-full object-cover rounded-md"
            alt="cover-pack-image"
          />
        </div>
        <div className="w-1/2 h-full overflow-y-auto max-sm:w-full max-sm:h-[400px]">
          <Flex vertical className="w-full" align="start" justify="start">
            <Flex vertical gap={8} className="w-full">
              <Flex justify="space-between" align="center" className="w-full">
                <Title level={4} className="!m-0">
                  {pack.title}
                </Title>
                <Text className="text-primary">
                  {pack.isFree
                    ? "Free"
                    : isUserInvitesUsers
                    ? "Free"
                    : `Invite`}
                </Text>
              </Flex>
              <P
                type="secondary"
                ellipsis={{
                  rows: 3,
                  expandable: "collapsible",
                  symbol: expanded ? "Less" : "More",
                  expanded,
                  onExpand: (_, info) => setExpanded(info.expanded),
                }}
                className="text-justify"
              >
                {pack.description}
              </P>
            </Flex>
            <Flex vertical className="w-full">
              <Divider>
                <Text type="secondary" className="text-sm">
                  Information
                </Text>
              </Divider>
              <Flex justify="space-between">
                <Text type="secondary">Number of Quiz</Text>
                <Text type="secondary">{pack.quizNumber}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text type="secondary">Creator</Text>
                <Text type="secondary">{pack.username}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text type="secondary">Category</Text>
                <Text type="secondary">{pack.category}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text type="secondary">Level Of Pack</Text>
                <Text type="secondary" className="capitalize">
                  {pack.level}
                </Text>
              </Flex>
              <Flex className="mt-4">
                {!isPackAdded ? (
                  <Button
                    type="primary"
                    color="default"
                    className="w-full"
                    onClick={buttonClick}
                  >
                    <Flex gap={5}>
                      {!loading && pack.isFree ? (
                        <PlusOutlined className="scale-110" />
                      ) : (
                        <ShoppingCartOutlined className="scale-110" />
                      )}
                      {!loading && isUserInvitesUsers
                        ? "Add Pack"
                        : pack.isFree
                        ? "Add Pack"
                        : "Invite"}
                    </Flex>
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    color="default"
                    className="w-full"
                    onClick={() => push(`/my-packs/${pack.id}`)}
                  >
                    See Quizzes
                  </Button>
                )}
              </Flex>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </Content>
  );
};

export default PackCard;
