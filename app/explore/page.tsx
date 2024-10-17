"use client";

import usePacks from "@/store/usePckes";
import { Flex, Layout } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect } from "react";

const Explore = () => {
  const { allPacks, getAllPacks } = usePacks();

  useEffect(() => {
    getAllPacks();
  }, []);

  useEffect(() => {
    console.log(allPacks);
  }, [allPacks?.length]);
  return (
    <Layout
      className="bg-white"
      style={{ height: "calc(100vh - 3.5rem - 24px)" }}
    >
      <Flex>
        <Title>test</Title>
      </Flex>
    </Layout>
  );
};

export default Explore;
