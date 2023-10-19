import React, { useState } from "react";

import style from '../styles/Side.module.css';

const SidebarIcon = ({image,firstoption,secondoption,thirdoptiion,ref1,ref2,ref3}) => {
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
            <li><a href={ref1}>{firstoption}</a></li>
            <li><a href={ref2}>{secondoption}</a></li>
            <li><a href={ref3}>{thirdoptiion}</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SidebarIcon;
