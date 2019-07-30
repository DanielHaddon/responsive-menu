import React, { FunctionComponent, useState } from "react";

import ReactDOM from "react-dom";

import "./styles.scss";
import SvgCalendar from "./svg/SvgCalendar";
import SvgMap from "./svg/SvgMap";
import SvgInfo from "./svg/SvgInfo";
import SvgImages from "./svg/SvgImages";
import SvgTicket from "./svg/SvgTicket";
import SvgDiscount from "./svg/SvgDiscount";
import SvgOrganisation from "./svg/SvgOrganisation";
import SvgBurger from "./svg/SvgBurger";
import SvgClose from "./svg/SvgClose";
import SvgCollapseSidebar from "./svg/SvgCollapseSidebar";
import SvgExpandSidebar from "./svg/SvgExpandSidebar";

export class IProps {}

interface INavButton {
  icon: any;
  text: string;
  subText?: string;
}

const navButtons: Array<INavButton> = [];
navButtons.push({
  icon: <SvgOrganisation />,
  text: "Organisation",
  subText: "JCB Ltd"
});
navButtons.push({ icon: <SvgCalendar />, text: "Orders" });
navButtons.push({ icon: <SvgMap />, text: "Rectification" });
navButtons.push({ icon: <SvgInfo />, text: "Reports" });
navButtons.push({ icon: <SvgImages />, text: "OES" });
navButtons.push({ icon: <SvgTicket />, text: "Log Ticket" });

const App = (props => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedNav, setSelectedNav] = useState(navButtons[3]);
  const [collapsed, setCollapsed] = useState(false);

  const items = navButtons.map(n => (
    <li
      className={`${selectedNav === n && "selected"}`}
      key={n.text}
      onClick={() => {
        setSelectedNav(n);
        setShowMenu(false);
        document.getElementById("content").scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      {n.icon}
      <label>{n.text}</label>
      {n.subText && <label className="sub-text">{n.subText}</label>}
    </li>
  ));

  return (
    <div
      className={`app ${showMenu && "nav-open"} ${collapsed && "collapsed"}`}
    >
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
            <SvgCalendar />
            <label>Orders</label>
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
