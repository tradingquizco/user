"use client";

import useLoading from "@/store/useLoading";
import usePacks from "@/store/usePckes";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { Col, Empty, Flex, Layout, Row, Spin } from "antd";
import PackCard from "@/components/PackCard";

const PacksPage = () => {
  const { loading, error } = useLoading();
  const { getAccountPacks, accountPacks } = usePacks();

  useEffect(() => {
    const sessionId = Cookies.get("sessionId") ?? "";

    getAccountPacks(sessionId);
  }, []);
  return (
    <Layout
      className="bg-white"
      style={{ height: "calc(100vh - 3.5rem - 24px)" }}
    >
      <Flex wrap align="start" justify="start" gap={10} className="w-full">
        {loading && <Spin fullscreen />}
        {!loading && !error && accountPacks?.length === 0 && <Empty />}
        {!loading &&
          !error &&
          accountPacks?.length !== 0 &&
          accountPacks?.map((pack) => (
            <PackCard key={pack.id} pack={pack} isPackAdded />
          ))}
        {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {!loading &&
            !error &&
            accountPacks?.length !== 0 &&
            accountPacks?.map((pack) => (
              <Col className="gutter-row" span={6} key={pack.id}>
                <PackCard key={pack.id} pack={pack} isPackAdded />
              </Col>
            ))}
        </Row> */}
      </Flex>
    </Layout>
  );
};

export default PacksPage;
