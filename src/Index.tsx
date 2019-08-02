import "./Index.scss";

import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import Navigator, { INavButton } from "./Navigator/Navigator";

import SvgCalendar from "./Icons/SvgCalendar";
import SvgMap from "./Icons/SvgMap";
import SvgInfo from "./Icons/SvgInfo";
import SvgImages from "./Icons/SvgImages";
import SvgTicket from "./Icons/SvgTicket";
import SvgDiscount from "./Icons/SvgDiscount";
import SvgOrganisation from "./Icons/SvgOrganisation";
import Organisation from "./Editor/Organisation";

const navButtons: Array<INavButton> = [];
navButtons.push({
  icon: <SvgOrganisation />,
  text: "Organisation",
  subText: "JCB Ltd",
  component: <Organisation />
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
