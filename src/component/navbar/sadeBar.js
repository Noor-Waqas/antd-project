import { useState, useEffect } from "react";
import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import style from "../../component/navbar/style.module.scss";
import { menusList } from "../../utils/manu";
import { UPPER_O_BET } from "../../utils/hooks/const";
import Logo from "../assets/icons/logo.png";

const Sidebar = ({ collapsed }) => {
  const [activeElement, setActiveElement] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveElement(location?.pathname);
  }, [location?.pathname]);

  const menuList = menusList ?? [];

  menuList?.map((item) => {
    item?.menu?.map((menuItem, index) => {
      if (menuItem.name === "Leave Approval") {
        item.menu.splice(index, 1);
      }
      return null;
    });
    return null;
  });

  return (
    <Menu
      className={style.mainMenu}
      theme="dark"
      mode="inline"
      inlineCollapsed={collapsed}
      selectedKeys={[window?.location?.pathname]}
      defaultSelectedKeys={[window?.location?.pathname]}
    >
      <div className={style.brandLogo}>
        <img src={Logo} alt="Logo" />
        <h1>
          1<i>{UPPER_O_BET}</i>
        </h1>
      </div>

      {menuList.map((val, key1) => {
        const element = val.menu.map((menu, key2) => {
          const Icon = menu.icon;
          return (
            <Menu.Item
              className={
                menu.link === activeElement
                  ? "ant-menu-item-selected"
                  : "ant-menu-item-back"
              }
              key={`submenu-${key1.toString()}-${key2.toString()}`}
              icon={
                <img style={{ width: "18px", height: "18px" }} src={Icon} />
              }
            >
              <NavLink
                key={`nav-${key1.toString()}-${key2.toString()}`}
                to={menu.link}
              >
                {menu.name}
              </NavLink>
            </Menu.Item>
          );
        });
        return (
          <>
            {val?.menuTitle && (
              <Menu.Item key={`menu-${key1.toString()}`} title={val.menuTitle}>
                {val.menuTitle}
              </Menu.Item>
            )}
            {element}
          </>
        );
      })}
    </Menu>
  );
};

export default Sidebar;
