import React, { PureComponent } from "react";

export default class CloseModalIcon extends PureComponent {
  render() {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.60006 1.39994L1.40004 3.59996L5.80008 8L1.40004 12.4L3.60006 14.6001L8.00011 10.2L12.4001 14.6001L14.6002 12.4L10.2001 8L14.6002 3.59996L12.4001 1.39994L8.00011 5.79998L3.60006 1.39994Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
}
