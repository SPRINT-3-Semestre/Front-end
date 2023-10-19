import React, { useState } from "react";

import style from '../styles/Side.module.css';

const SidebarIcon = ({image,firstoption,secondoption,thirdoptiion}) => {
  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
<>
    <img src={image} alt="Icone de pessoa" onClick={handleClick}  />
      {open && (
        <div className={style.sidebar_content}>
          <ul>
            <li><a href="#">{firstoption}</a></li>
            <li><a href="#">{secondoption}</a></li>
            <li><a href="#">{thirdoptiion}</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SidebarIcon;
