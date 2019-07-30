import "./styles.scss";

import React, { FunctionComponent, useState } from "react";
import ReactDOM from "react-dom";
import Navigator, { INavButton } from "./Navigator";

import SvgCalendar from "./svg/SvgCalendar";
import SvgMap from "./svg/SvgMap";
import SvgInfo from "./svg/SvgInfo";
import SvgImages from "./svg/SvgImages";
import SvgTicket from "./svg/SvgTicket";
import SvgDiscount from "./svg/SvgDiscount";
import SvgOrganisation from "./svg/SvgOrganisation";

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
navButtons.push({ icon: <SvgDiscount />, text: "Stock Control" });

const App = (() => {
  return (
    <div className={`app`}>
      <Navigator navButtons={navButtons} />
    </div>
  );
}) as FunctionComponent;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
