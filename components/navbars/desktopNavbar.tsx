"use client";

import React, { ReactNode, useState } from "react";
// import LogoSvg from "/logo.svg";
import Image from "next/image";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import useToken from "antd/es/theme/useToken";
import Link from "next/link";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import {
  BookOutlined,
  DashboardOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Divider, Flex, Modal } from "antd";
import AccountsList from "../accounts";
import Cookies from "js-cookie";
import DropdownButton from "antd/es/dropdown/dropdown-button";
import Paragraph from "antd/es/typography/Paragraph";
import OTP from "antd/es/input/OTP";
import Invite from "../Invite";

export const navLinks: { path: string; name: string; icon: ReactNode }[] = [
  { path: "/", name: "Explore", icon: <UnorderedListOutlined /> },
  // { path: "/explore", name: "Explore", icon: <UnorderedListOutlined />},
  { path: "/payments", name: "Payments", icon: <BookOutlined /> },
  { path: "/my-packs", name: "My Packs", icon: <BookOutlined /> },
];

const DesktopNavbar = () => {
  const {
    "1": { colorPrimary },
  } = useToken();
  const pathname = usePathname();
  const { push } = useRouter();

  return (
    <nav className="w-full h-full flex items-center justify-between px-5 max-md:hidden">
      <div className="links flex gap-5">
        <div
          className="flex items-center justify-center gap cursor-pointer"
          onClick={() => push("/")}
        >
          <Image src={"/logo.svg"} alt="logo" width={35} height={35} />
          <Title level={4} className="!m-0">
            TradingQuiz
          </Title>
        </div>
        <ul className="flex items-center justify-center gap-2">
          {navLinks.map(({ name, path, icon }) => (
            <li
              className={`hover:text-${colorPrimary} cursor-pointer`}
              key={path}
            >
              <Link href={path}>
                <Text
                  type="secondary"
                  className={clsx(
                    "h-3/4 hover:!text-primary transition-all capitalize hover:bg-primary/20 p-3 rounded-lg",
                    { "!text-primary bg-primary/20": path === pathname }
                  )}
                >
                  {name}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center gap-3 h-full w-auto">
        <Invite />
        <Button
          danger
          onClick={() => {
            Cookies.remove("sessionToken");
            Cookies.remove("sessionId");
          }}
        >
          Log Out
        </Button>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
