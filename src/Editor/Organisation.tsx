import React, { FunctionComponent, useState, useEffect } from "react";
import TextBox from "../TextBox/TextBox";

class IProps {}

export default (props => {
  const [value, setValue] = useState("");

  return (
    <div className="page">
      <div className="toolbar">
        <button>New</button>
        <button>Load</button>
        <button className="good">Save</button>
      </div>
      <div className="split-row">
        <div className="split-6">
          <section>
            <TextBox
              label="What is your pen called?"
              placeholder="Pen name"
              value={value}
              onChange={v => setValue(v)}
            />
            <TextBox
              label="What colour is your pen?"
              placeholder="Pen colour"
              value={value}
              onChange={v => setValue(v)}
            />
            <TextBox
              label="What shape is this pen?"
              placeholder="Pen shapely shape"
              value={value}
              onChange={v => setValue(v)}
            />
          </section>
          <section />
          <section />
          <section />
          <section />
        </div>
        <div className="split-6">
          <section />
          <section />
          <section />
        </div>
      </div>
    </div>
  );
}) as FunctionComponent<IProps>;
