"use client";

import PackCard from "@/components/PackCard";
import useLoading from "@/store/useLoading";
import usePacks from "@/store/usePckes";
import { Empty, Flex, Layout, Spin } from "antd";
import React, { useEffect, useState } from "react";

const Explore = () => {
  const {error, loading} = useLoading();
  const {getAllPacks, allPacks} = usePacks();


  useEffect(() => {
    getAllPacks();
  }, []);

  return (
    <Layout
      className="bg-white"
      style={{ height: "calc(100vh - 3.5rem - 24px)" }}
    >
      <Flex wrap align="start" justify="center" className="w-full">
        {loading && <Spin fullscreen />}
        {!loading && !error && allPacks?.length === 0 && <Empty />}
        {!loading && !error &&  allPacks?.length !== 0 && allPacks?.map((pack) => <PackCard key={pack.id} pack={pack}/>)}
      </Flex>
    </Layout>
  );
};

export default Explore;
