import React, { PureComponent } from "react";

export default class SuccessInputIcon extends PureComponent {
  render() {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="8.25" stroke="#ED2E7E" strokeWidth="2" />
        <path
          d="M10 6.25V10"
          stroke="#ED2E7E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 13V13.375"
          stroke="#ED2E7E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
