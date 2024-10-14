"use client";

import { BarChart } from "@/components/charts/BarChart";
import { LineChart } from "@/components/charts/LineChart";
import { PieChart } from "@/components/charts/PieChart";
import { DataTable } from "@/components/DataTable";

const App: React.FC = () => {
  return (
    <section className="h-dvh flex flex-col gap-10">
      <div className="flex flex-wrap gap-5 max-sm:flex-col">
        <BarChart className="w-full" />
        <LineChart className="w-full" />
        <PieChart className="w-full flex items-center text-center"/>
      </div>
      <div className="">
        <h3 className="text-2xl font-bold">Last 5 Quiz </h3><br/>
        <DataTable/>
      </div>
    </section>
  );
};

export default App;
