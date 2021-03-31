import React, { PureComponent } from "react";

export default class AddImageButtonIcon extends PureComponent {
  render() {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="13" cy="13" r="12.5" fill="#6F4CC4" stroke="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 7.99988H12V11.9999H8V13.9999H12V17.9999H14V13.9999H18V11.9999H14V7.99988Z"
          fill="white"
        />
      </svg>
    );
  }
}
