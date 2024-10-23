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
import { redirect, useRouter } from "next/navigation";
import useLoading from "@/store/useLoading";
import Link from "next/link";
import { IPack } from "@/types";

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

  const [expanded, setExpanded] = useState<boolean>(false);

  const cookies = Cookies.get("session");
  if (!cookies) redirect("/login");

  const session = JSON.parse(cookies);
  const buttonClick = () => {
    if (pack.isFree) {
      addPackToUserPacks({
        packId: pack.id,
        accountId: session.currentAccountId,
        msgApi,
      });
    } else {
      //Pack with price
    }
  };

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
            <Flex vertical gap={8}>
              <Flex justify="space-between" align="center">
                <Title level={4} className="!m-0">
                  {pack.title}
                </Title>
                <Text className="text-primary">
                  {pack.isFree ? "Free" : `$${pack.price}`}
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                nemo, recusandae officiis rerum mollitia odit deleniti
                asperiores et incidunt quisquam!
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
                      {!loading && pack.isFree ? "Add Pack" : "Buy Pack"}
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
