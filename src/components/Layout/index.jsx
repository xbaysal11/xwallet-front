import React, { useState } from "react";
import PT from "prop-types";

import { Sidebar } from "..";
import "./styles.scss";

export default function Layout(props) {
  const { children } = props;
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="layout">
      <div className="layout__sidebar">
        <Sidebar />
      </div>
      <div className="layout__content">
        <div className={`responsive-sidebar ${sidebar && "open"}`}>
          {/* <button onClick={() => setSidebar(!sidebar)}>test</button> */}
          <label htmlFor="hamburger">&#9776;</label>
          <input
            type="checkbox"
            id="hamburger"
            onClick={() => setSidebar(!sidebar)}
          />
          <Sidebar />
        </div>
        {children}
      </div>
    </div>
  );
}
Layout.propTypes = {
  children: PT.any,
};
