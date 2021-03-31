import React, { PureComponent } from "react";

export default class ActivateIcon extends PureComponent {
  render() {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3.5" y="0.5" width="9" height="14" rx="1.5" stroke="white" />
        <path
          d="M6 7.5L7.6 9L10 6"
          stroke="white"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
