import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar}/>}
      <div className="headerOption__title">{title}</div>
    </div>
  );
}

export default HeaderOption;
