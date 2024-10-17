"use client";

import { BarChart } from "@/components/charts/BarChart";
import { LineChart } from "@/components/charts/LineChart";
import { PieChart } from "@/components/charts/PieChart";
import { DataTable } from "@/components/DataTable";

const containr_Width = 700
const App = () => {
  return (
    <section className="h-dvh flex flex-col gap-10">
      <div className=" bg-red-200 flex flex-wrap gap-5 max-sm:flex-col">
        {/* <BarChart className="w-[100px]" /> */}
        <LineChart className="bg-green-200"/>
        {/* <PieChart className="w-[100px] flex items-center text-center"/> */}
      </div>
      <div className="">
        <h3 className="text-2xl font-bold">Last 5 Quiz </h3><br/>
        <DataTable/>
      </div>
    </section>
  );
};

export default App;
