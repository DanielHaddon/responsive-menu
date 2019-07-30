import React, { FunctionComponent } from "react";

export class IProps {}

export default (props => {
  return (
    <svg viewBox="0 0 19 19" version="1.1">
      <g>
        <path d="M 15.832031 3.167969 L 3.167969 3.167969 C 2.292969 3.167969 1.582031 3.875 1.582031 4.75 L 1.582031 14.25 C 1.582031 15.125 2.292969 15.832031 3.167969 15.832031 L 15.832031 15.832031 C 16.707031 15.832031 17.417969 15.125 17.417969 14.25 L 17.417969 4.75 C 17.417969 3.875 16.707031 3.167969 15.832031 3.167969 Z M 7.917969 6.332031 C 8.355469 6.332031 8.707031 6.6875 8.707031 7.125 C 8.707031 7.5625 8.355469 7.917969 7.917969 7.917969 C 7.480469 7.917969 7.125 7.5625 7.125 7.125 C 7.125 6.6875 7.480469 6.332031 7.917969 6.332031 Z M 15.042969 13.457031 L 3.957031 13.457031 L 6.726562 9.898438 L 8.707031 12.277344 L 11.480469 8.710938 Z M 15.042969 13.457031 " />
      </g>
    </svg>
  );
}) as FunctionComponent<IProps>;