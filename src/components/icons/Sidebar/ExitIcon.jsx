import React, { PureComponent } from "react";

export default class ExitIcon extends PureComponent {
  render() {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17Z"
          fill="white"
          stroke="#C4C4C4"
        />
        <path d="M17 9H6.71429H17Z" fill="white" />
        <path
          d="M17 9H6.71429"
          stroke="#C4C4C4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 6.71429L6.25714 9.00001L9 11.2857" fill="white" />
        <path
          d="M9 6.71429L6.25714 9.00001L9 11.2857"
          stroke="#C4C4C4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}
