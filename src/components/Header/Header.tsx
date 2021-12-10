import React, {useState} from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, ArrowLeftOutlined, QuestionCircleOutlined, CloseOutlined, MenuOutlined } from "@ant-design/icons";
import {publicPaths} from "../../routes/paths";
import hr4it_small from "../../assets/img/hr4it_small.png";

const AntHeader = Layout.Header;

export interface HeaderProps {
  hasBackButton?: boolean;
};

const menuDropdown = (
  <Menu>
    <Menu.Item>
      <Link to="/signin">My profile</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/dashboard">Settings</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to="/signin">Logout</Link>
    </Menu.Item>
  </Menu>
);

export const Header: React.FC<HeaderProps> = ({ hasBackButton = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (
    <div className="headerContainer">
      <AntHeader className="header">
        {!!hasBackButton && (
          <Link className="nav" to={publicPaths.dashboard}>
            <ArrowLeftOutlined className="arrow" />
          </Link>
        )}
        <div className="logo">
          <img className="logoSmall" src={hr4it_small} alt="" />
        </div>
        <div className="menu menu--desktop">
          <Link className="item" to={publicPaths.dashboard}>
            <QuestionCircleOutlined />
          </Link>
          <Dropdown
            overlay={menuDropdown}
            placement="bottomCenter"
            trigger={["click"]}
            overlayStyle={{ width: "120px" }}>
            <div className="item avatar">
              <Avatar size="large" icon={<UserOutlined />} />
            </div>
          </Dropdown>
        </div>
        <div className="menu menu--mobile">
          <div className="item" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </div>
        </div>
      </AntHeader>
    </div>
  );
};

