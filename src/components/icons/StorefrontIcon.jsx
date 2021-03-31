import React, { PureComponent } from "react";

export default class StorefrontIcon extends PureComponent {
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
            d="M5.81818 5H2V14H14V5H10.1818"
            stroke="white"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
          <path d="M8 3V10" stroke="white" strokeWidth="1.1" />
          <path d="M8 0L10.5981 3H5.40192L8 0Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(16) rotate(90)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
}
