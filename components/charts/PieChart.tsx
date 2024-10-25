import { Pie } from "@ant-design/plots";
import React from "react";

export const PieChart = ({ className }: { className: string }) => {
  const config = {
    data: [
      { type: "分类一", value: 20 },
      { type: "分类二", value: 80 },
    ],
    angleField: "value",      
    colorField: "type",
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
  };
  return <Pie {...config} className={className} />;
};
