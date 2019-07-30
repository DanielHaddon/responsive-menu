import React, { FunctionComponent, useState } from "react";

import SvgCollapseSidebar from "./svg/SvgCollapseSidebar";
import SvgExpandSidebar from "./svg/SvgExpandSidebar";
import SvgBurger from "./svg/SvgBurger";
import SvgClose from "./svg/SvgClose";

class IProps {
  navButtons: Array<INavButton>;
}

export interface INavButton {
  icon: any;
  text: string;
  subText?: string;
}

export default (props => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedNav, setSelectedNav] = useState(props.navButtons[3]);
  const [collapsed, setCollapsed] = useState(false);

  const items = props.navButtons.map(n => (
    <li
      className={`${selectedNav === n && "selected"}`}
      key={n.text}
      onClick={() => {
        setSelectedNav(n);
        setShowMenu(false);
        document
          .getElementById("content")
          .scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {n.icon}
      <label>{n.text}</label>
      {n.subText && <label className="sub-text">{n.subText}</label>}
    </li>
  ));

  return (
    <div className={`${showMenu && "nav-open"} ${collapsed && "collapsed"}`}>
      <div id="content" className="content">
        <header>
          <label>
            {selectedNav && selectedNav.icon}
            {selectedNav && selectedNav.text}
          </label>
        </header>
        <div className="stuff" />
        <div className="stuff" />
        <div className="stuff" />
        <div className="stuff" />
        <div className="stuff" />
        <div className="stuff" />
        <div className="stuff" />
      </div>

      {!collapsed && (
        <nav className={`vertical sub`}>
          <ul>{items}</ul>
        </nav>
      )}

      <nav className={`vertical main`}>
        <ul>
          <li className="brand">
            <SvgCollapseSidebar />
            <label>Home</label>
          </li>
          {collapsed && items}
        </ul>
        <ul className={`bottom hide-mobile`}>
          {!collapsed && (
            <li
              onClick={() => {
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
