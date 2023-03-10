import React, { useState } from "react";
import "./SideBar.css";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";
import { authRoute } from "../../routes/route";
import { FaBars } from "react-icons/fa";
import userImg from "../../assets/user.png";
import SubMenu from "./SubMenu";
const withLayout = (SideBar) => {
  return function WithPage() {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    return (
      <>
        <aside
          className="main-sidebar sidebar-light-maroon navbar-light elevation-4 sidebar-no-expand"
          style={{ width: isOpen ? "250px" : "70px", position: "fixed" }}
        >
          <>
            <div className="brand-link text-sm">
              {isOpen ? (
                <Link
                  to="/"
                  className="brand-link text-sm"
                  style={{ textDecoration: "none" }}
                >
                  <SiShopware
                    className={"brand-image img-circle elevation-3"}
                    style={{
                      opacity: ".8",
                      width: "1.5rem",
                      height: "1.5rem",
                      maxHeight: "unset",
                    }}
                  />
                  <span className="brand-text font-weight-light">College</span>
                </Link>
              ) : (
                <Link
                  to="/"
                  className="brand-link text-sm"
                  style={{ textDecoration: "none", paddingBottom: "1.3rem" }}
                >
                  <SiShopware
                    className={"brand-image img-circle elevation-3"}
                    style={{
                      opacity: ".8",
                      width: "1.5rem",
                      height: "1.5rem",
                      maxHeight: "unset",
                    }}
                  />
                </Link>
              )}
            </div>
            <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-transition os-host-scrollbar-horizontal-hidden">
              <div className="os-resize-observer-host observed">
                <div
                  className="os-resize-observer"
                  style={{ left: "0px", right: "auto" }}
                ></div>
              </div>
              <div
                className="os-size-auto-observer observed"
                style={{ height: "calc(100% + 1px)", float: "left" }}
              >
                <div className="os-resize-observer"></div>
              </div>
              <div
                className="os-content-glue"
                style={{ margin: "0px -8px", width: "249px" }}
              ></div>
              <div className="os-padding">
                <div className="os-viewport os-viewport-native-scrollbars-invisible">
                  <div
                    className="os-content"
                    style={{
                      padding: "0px 8px",
                      height: "100%",
                      width: "100%",
                    }}
                  ></div>
                  <div className="mt-4 ">
                    <ul
                      className="nav-pills nav-sidebar flex-column text-sm nav-compact nav-flat nav-child-indent nav-collapse-hide-child"
                      role="menu"
                      style={{ paddingLeft: "0px" }}
                    >
                      {authRoute.map((item, index) => {
                        return (
                          <SubMenu item={item} key={index} isOpen={isOpen} />
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        </aside>

        <nav
          className="main-header navbar navbar-expand navbar-light shadow text-sm"
          style={{
            marginLeft: isOpen ? "250px" : "70px",
            position: "sticky",
            top: "0",
          }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" role="button">
                <FaBars onClick={toggle} style={{ marginLeft: "10px" }} />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="btn-group nav-link">
                <span>
                  <img
                    src={userImg}
                    className="img-circle elevation-2 user-img"
                    alt="User Image"
                    style={{ height: "27px", width: "27px" }}
                  />
                </span>
                <span className="ml-3">Avni Zalavadiya</span>
              </div>
            </li>
            <li className="nav-item"></li>
          </ul>
        </nav>
        <SideBar />
      </>
    );
  };
};
export default withLayout;
