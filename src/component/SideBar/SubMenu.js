import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavItem } from "react-bootstrap";
import styled from "styled-components";

const SubMenu = ({ item, isOpen }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const activeLink = "nav-link active";
  const normalLink = "nav-link";
  const DropdownLink = styled(NavLink)`
    height: 40px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.1);
    }
  `;
  return (
    <>
      <NavItem className="nav-item" style={{ textAlign: "left" }}>
        <NavLink
          to={`${item.path}`}
          key={item.name}
          onClick={item.subnav && showSubnav}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <span className="icon"> {item.icon}</span>
          {isOpen ? <span className="capitalize">{item.name}</span> : ""}
          {isOpen ? (
            <span>
              {item.subnav && subnav
                ? item.iconOpened
                : item.subnav
                ? item.iconClosed
                : null}
            </span>
          ) : (
            ""
          )}
        </NavLink>
        {subnav &&
          item.subnav?.map((item, index) => {
            return (
              <DropdownLink to={item.path} key={index}>
                <span className="capitalize">{item.name}</span>
              </DropdownLink>
            );
          })}
      </NavItem>
    </>
  );
};

export default SubMenu;
