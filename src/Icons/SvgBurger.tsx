import React, { FunctionComponent } from "react";

export class IProps {}

export default (props => {
  return (
    <svg viewBox="0 0 24 24" focusable="false" role="presentation">
      <path d="M5 15h14v2H5zm0-8h14v2H5zm0 4h14v2H5z"/>
    </svg>
  );
}) as FunctionComponent<IProps>;
