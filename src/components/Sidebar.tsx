// import React from 'react';
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./vite.svg" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./vite.svg" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
        </div>
      </div>
    </div>
    </>
  );
}

export default Sidebar;