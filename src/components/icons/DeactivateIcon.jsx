import React, { PureComponent } from "react";

export default class DeactivateIcon extends PureComponent {
  render() {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 2L14 15" stroke="white" />
        <path
          d="M11 0H5C3.96207 0 3.1088 0.790648 3.00963 1.80252L4 2.79289V2C4 1.44772 4.44772 1 5 1H11C11.5523 1 12 1.44772 12 2V10.7929L13 11.7929V2C13 0.895431 12.1046 0 11 0Z"
          fill="white"
        />
        <path
          d="M12.9904 13.4904C12.6036 13.1036 12.3868 12.8868 12 12.5L12 13C12 13.5523 11.5523 14 11 14H5C4.44772 14 4 13.5523 4 13L4 4.31009L3 3.31009L3 13C3 14.1046 3.89543 15 5 15H11C12.0379 15 12.8912 14.5022 12.9904 13.4904Z"
          fill="white"
        />
      </svg>
    );
  }
}
