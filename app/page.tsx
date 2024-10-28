// "use client";

// import { BarChart } from "@/components/charts/BarChart";
// import { LineChart } from "@/components/charts/LineChart";
// import { PieChart } from "@/components/charts/PieChart";
// import { DataTable } from "@/components/DataTable";

// const containr_Width = 700
// const App = () => {
//   return (
//     <section className="h-dvh flex flex-col gap-10">
//       <div className=" bg-red-200 flex flex-wrap gap-5 max-sm:flex-col">
//         {/* <BarChart className="w-[100px]" /> */}
//         <LineChart className="bg-green-200"/>
//         {/* <PieChart className="w-[100px] flex items-center text-center"/> */}
//       </div>
//       <div className="">
//         <h3 className="text-2xl font-bold">Last 5 Quiz </h3><br/>
//         <DataTable/>
//       </div>
//     </section>
//   );
// };

// export default App;

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

export default Explore;
