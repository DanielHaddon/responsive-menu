import React, { FunctionComponent } from "react";

export class IProps {}

export default (props => {
  return (
    <svg viewBox="0 0 24 24" version="1.1">
      <g>
        <path d="M 6 1 L 8 1 L 8 5 L 6 5 Z M 16 1 L 18 1 L 18 5 L 16 5 Z M 16 1 " />
        <path d="M 19 3 L 5 3 C 3.898438 3 3 3.898438 3 5 L 3 19 C 3 20.101562 3.898438 21 5 21 L 19 21 C 20.101562 21 21 20.101562 21 19 L 21 5 C 21 3.898438 20.101562 3 19 3 Z M 19 19 L 5 19 L 5 9 L 19 9 Z M 19 7 L 5 7 L 5 5 L 19 5 Z M 19 7 " />
        <path d="M 13 13 L 17 13 L 17 17 L 13 17 Z M 13 13 " />
      </g>
    </svg>
  );
}) as FunctionComponent<IProps>;
