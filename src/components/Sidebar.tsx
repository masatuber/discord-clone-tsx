// import React from 'react';
import "./sidebar.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

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
          <ExpandMoreIcon />
        </div>
        {/* sidebarChannels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              {/* 仮置きh4 */}
              <h4>プログラミングチャンネル</h4> 
              
            </div>
              <AddIcon className="sidebarAddIcon"/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Sidebar;