import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  const recentItem = (topic) =>(
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
  )

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Iceberg_in_the_Arctic_with_its_underside_exposed.jpg/1920px-Iceberg_in_the_Arctic_with_its_underside_exposed.jpg" alt="" />
        <Avatar
          className="sidebar__avatar"
          src="https://upload.wikimedia.org/wikipedia/en/c/c7/Wikipedia_profile_photo_%28Tronic2%29.jpg"
        />
        <h2>Yohenba Kshetrimayum</h2>
        <h4>test123@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <div className="sidebar__statNumber">1,234</div>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <div className="sidebar__statNumber">4,321</div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('HTML')}
        {recentItem("JAVASCRIPT")}
        {recentItem("BLOCKCHAIN")}
        {recentItem("REACTJS")}
      </div>
    </div>
  );
}

export default Sidebar;
