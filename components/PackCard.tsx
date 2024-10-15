"use client";

import { CreditCardTwoTone } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

type Props = {
  packTitle: string;
  packDesc: string;
  packLevel: string;
  packCategory: string;
  creatorImg: string;
  price: string;
};

export const PackCard = ({ data }: { data: Props[] }) => {
  return (
    <div className="flex flex-wrap gap-5">
      {data.map((item, index) => (
        <Card
          key={index}
          hoverable
          className="w-80  flex flex-col justify-between"
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <div
              key="pa"
              className="flex justify-around  items-center text-black"
            >
              <span
                key="level"
                className="bg-[#d89614] px-2 py-1 rounded-md tracking-wider hover:bg-slate-800 hover:text-[#d89614]"
              >
                {item.packLevel}
              </span>
              <span
                key="category"
                className="bg-[#d89614] px-2 py-1 rounded-md tracking-wider hover:bg-slate-800 hover:text-[#d89614]"
              >
                {item.packCategory}
              </span>
              <span
                key="price"
                className="bg-[#d89614] px-2 py-1 rounded-md tracking-wider hover:bg-slate-800 hover:text-[#d89614]"
              >{`${item.price}$`}</span>
              <CreditCardTwoTone
                key="perent"
                style={{ fontSize: "26px" }}
                twoToneColor="#d89614"
              />
            </div>,
          ]}
        >
          <Meta
            avatar={<Avatar src={item.creatorImg} />}
            title={item.packTitle}
            description={item.packDesc}
          />
        </Card>
      ))}
    </div>
  );
};
