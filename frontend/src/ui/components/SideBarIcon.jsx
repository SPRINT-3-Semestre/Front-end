import React, { useState } from "react";

import style from '../styles/Side.module.css';

const SidebarIcon = (props) => {
  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    setOpen(!open);
  };

  const exit = () => {
    sessionStorage.clear();
  }
  
  return (
<>
    <img src={props.image} alt="Icone de pessoa" onClick={handleClick}  />
      {open && (
        <div className={style.sidebar_content}>
          <ul>
            <li><a href={props.ref1}>{props.firstoption}</a></li>
            <li><a href={props.ref2}>{props.secondoption}</a></li>
            <li><a href={props.ref3} onClick={props.thirdoptiion === "Sair" ? exit : ''}>{props.thirdoptiion}</a></li>

          </ul>
        </div>
      )}
    </>
  );
};

export default SidebarIcon;
