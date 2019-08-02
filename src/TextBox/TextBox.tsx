import React, { FunctionComponent, useState, useEffect } from "react";

import "./TextBox.scss";

class IProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export default (props => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`textbox${props.value.length > 0 ? " has-value" : ""}${focused? " focused" : ""}`}>
      {props.label && <label className="description">{props.label}</label>}
      <div className="input-container">
        {props.placeholder && <label>{props.placeholder}</label>}
        <input
          onFocus={f => setFocused(true)}
          onBlur={f => setFocused(false)}
          type="text"
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        />
      </div>
    </div>
  );
}) as FunctionComponent<IProps>;
