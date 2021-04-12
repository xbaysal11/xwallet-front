import React, { PureComponent } from "react";

export default class UpDown extends PureComponent {
  render() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4.00098V18.001"
          stroke="#212529"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.002 14.001L12.001 19.002L7 14.001"
          stroke="#212529"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.99902 9.001L12 4L17.001 9.001"
          stroke="#212529"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
