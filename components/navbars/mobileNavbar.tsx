import React, { useState } from "react";
import { Avatar, Button, Divider, Drawer, Flex } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MenuOutlined } from "@ant-design/icons";
import { navLinks } from "./desktopNavbar";
import Link from "next/link";
import clsx from "clsx";
import AccountsList from "../accounts";
import Cookies from "js-cookie";
import Invite from "../Invite";

const MobileNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const { push } = useRouter();
  const pathname = usePathname();

  const openDrawer = () => {
    setShowDrawer(true);
  };

  const onClose = () => {
    setShowDrawer(false);
  };

  return (
    <nav className="w-full h-full flex items-center justify-between px-5 md:hidden">
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
      </div>

      {/* <div className="flex items-center justify-center gap-3 h-full w-auto">
          <AccountsList />
          <Avatar size={45} shape="square" src="https://avatars.githubusercontent.com/u/88265699?v=4"/>
      </div> */}
      <Button
        onClick={() => openDrawer()}
        type="dashed"
        icon={<MenuOutlined size={45} />}
      ></Button>
      <Drawer
        onClose={onClose}
        open={showDrawer}
        title="TradingQuiz"
        size="default"
      >
        <div className="w-full flex items-center justify-between flex-col h-full">
          <ul className="flex items-center justify-center gap-3 flex-col w-full">
            {navLinks.map(({ name, path, icon }) => (
              <li className="w-full" key={path}>
                <Link href={path} className="w-full flex">
                  <Text
                    type="secondary"
                    className={clsx(
                      "w-full h-3/4 hover:!text-primary transition-all capitalize hover:bg-primary/20 p-3 rounded-lg",
                      { "!text-primary bg-primary/20": path === pathname }
                    )}
                  >
                    {name}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>

          <Flex className="w-full" justify="space-between" align="center">
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
          </Flex>
        </div>
      </Drawer>
    </nav>
  );
};

export default MobileNavbar;
