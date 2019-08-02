import React, { FunctionComponent, useState, useEffect } from "react";

import SvgCollapseSidebar from "../Icons/SvgCollapseSidebar";
import SvgExpandSidebar from "../Icons/SvgExpandSidebar";
import SvgBurger from "../Icons/SvgBurger";
import SvgClose from "../Icons/SvgClose";

import "./Navigator.scss";

class IProps {
  navButtons: Array<INavButton>;
}

export interface INavButton {
  icon: any;
  text: string;
  subText?: string;
  component?: any;
}

const getCookie = cname => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const setCookie = (cname, cvalue, exdays) => {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + "; path=/";
};

export default (props => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedNav, setSelectedNav] = useState(null);
  const [collapsed, setCollapsed] = useState(true);
  const [navHistory, setNavHistory] = useState<Array<INavButton>>([]);

  useEffect(() => {
    let collapseSidebar = getCookie("collapse_sidebar");
    setCollapsed(collapseSidebar === "true");

    const n = props.navButtons[0];
    setSelectedNav(n);
    setNavHistory([n]);
  }, []);

  const items = props.navButtons.map(n => (
    <li
      className={`${selectedNav === n && "selected"}`}
      key={n.text}
      onClick={() => {
        if (navHistory[0].text !== n.text) {
          setNavHistory([n, navHistory[0]]);
          setSelectedNav(n);
        }
        setShowMenu(false);
        document.getElementById("header").scrollIntoView();
      }}
    >
      {n.icon}
      <label>{n.text}</label>
      {n.subText && <label className="sub-text">{n.subText}</label>}
    </li>
  ));

  return (
    <div
      className={`navigator ${showMenu && "nav-open"} ${collapsed &&
        "collapsed"}`}
    >
      <div id="content" className="content">
        <header id="header">
          {navHistory.map(n => {
            return (
              <label key={"NAV_" + n.text}>
                {n.icon}
                {n.text}
              </label>
            );
          })}
        </header>
        {selectedNav && selectedNav.component}
      </div>

      <nav className={`vertical sub`}>
        <ul>{items}</ul>
      </nav>

      <nav className={`vertical main`}>
        <ul>
          <li className="brand">
            <SvgCollapseSidebar />
            <label>Home</label>
          </li>
        </ul>
        <ul className="routes hide-mobile">{collapsed && items}</ul>
        <ul className={`bottom hide-mobile`}>
          {!collapsed && (
            <li
              onClick={() => {
                setCookie("collapse_sidebar", true, 1000);
                setCollapsed(true);
              }}
            >
              <SvgCollapseSidebar />
              <label>Collapse Sidebar</label>
            </li>
          )}
          {collapsed && (
            <li
              onClick={() => {
                setCookie("collapse_sidebar", false, 1000);
                setCollapsed(false);
              }}
            >
              <SvgExpandSidebar />
              <label>Expand Sidebar</label>
            </li>
          )}
        </ul>
      </nav>

      <div
        className="nav-toggle"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        {!showMenu && <SvgBurger />}
        {showMenu && <SvgClose />}
      </div>
    </div>
  );
}) as FunctionComponent<IProps>;
