import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { actLogout } from "./../../AuthPage/modules/actions";
import { connect } from "react-redux";
import {
  AppstoreOutlined,
  UserAddOutlined,
  LogoutOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;
class Navbar extends Component {
  render() {
    return (
      <>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo mt-2"></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item>
              <NavLink className="btn" to="/">
                <span>Home</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="1" icon={<AppstoreOutlined />}>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/dashboard"
              >
                <span>Dashboard</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserAddOutlined />}>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/add-user"
              >
                <span>Thêm thành viên</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined />}>
              <NavLink activeClassName="active" className="nav-link" to="/film">
                <span>Quản lý phim</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="6" icon={<VideoCameraAddOutlined />}>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/addnew"
              >
                <span>Thêm phim</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="5" icon={<LogoutOutlined />}>
              <button
                className="btn btn-danger w-100 "
                onClick={() => {
                  this.props.logout(this.props.history);
                }}
              >
                Logout
              </button>
            </Menu.Item>
          </Menu>
        </Sider>
      </>

      // {/* <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      //   {/* Brand */}
      //   <a className="navbar-brand" href="#s">
      //     Navbar
      //   </a>
      //   {/* Toggler/collapsibe Button */}
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#collapsibleNavbar"
      //   >
      //     <span className="navbar-toggler-icon" />
      //   </button>
      //   {/* Navbar links */}
      //   <div className="collapse navbar-collapse" id="collapsibleNavbar">
      //     <ul className="navbar-nav">
      //       <li className="nav-item">
      //         <NavLink
      //           activeClassName="active"
      //           className="nav-link"
      //           to="/dashboard"
      //         >
      //           Dashboard
      //         </NavLink>
      //       </li>
      //       <li className="nav-item">
      //         <NavLink
      //           activeClassName="active"
      //           className="nav-link"
      //           to="/add-user"
      //         >
      //           Add user
      //         </NavLink>
      //       </li>
      //       <li className="nav-item">
      //         <button
      //           className="btn btn-info"
      //           onClick={() => {
      //             this.props.logout(this.props.history);
      //           }}
      //         >
      //           Logout
      //         </button>
      //       </li>
      //     </ul>
      //   </div>
      // </nav> */}
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (history) => {
      dispatch(actLogout(history));
    },
  };
};

const ConnectedComponent = connect(null, mapDispatchToProps)(Navbar);

export default withRouter(ConnectedComponent);
