import { ReactNode, useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

type MenuItemProps = {
  path: string;
  name: string;
  icon: ReactNode;
};

type SideBarProps = {
  children?: ReactNode;
  title: string;
  menuItem: MenuItemProps[];
};

function Sidebar({ children, title, menuItem }: SideBarProps) {
  const [isOpen, setIsOpen] = useState(true);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="container">
        <div
          style={{
            width: isOpen ? "250px" : "60px",
          }}
          className="sidebar"
        >
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              {title}
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link">
              <div
                style={{ paddingLeft: isOpen ? "5px" : "16px" }}
                className="icon"
              >
                {item.icon}
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Sidebar;
