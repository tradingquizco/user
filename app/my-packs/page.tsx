"use client";

import useLoading from "@/store/useLoading";
import usePacks from "@/store/usePckes";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { Empty, Flex, Layout, Spin } from "antd";
import PackCard from "@/components/PackCard";

const page = () => {
  const {loading, error} = useLoading();
  const { getAccountPacks, accountPacks } = usePacks();

  useEffect(() => {
    const cookies = Cookies.get("session");
    if (!cookies) redirect("/login");
    const session = JSON.parse(cookies);

    getAccountPacks(session.currentAccountId);
  }, []);
  return (
    <Layout
      className="bg-white"
      style={{ height: "calc(100vh - 3.5rem - 24px)" }}
    >
      <Flex wrap align="start" justify="center" className="w-full">
      {loading && <Spin fullscreen />}
        {!loading && !error && accountPacks?.length === 0 && <Empty />}
        {!loading && !error &&  accountPacks?.length !== 0 && accountPacks?.map((pack) => <PackCard key={pack.id} pack={pack} isPackAdded/>)}
      </Flex>
    </Layout>
  );
};

export default page;
