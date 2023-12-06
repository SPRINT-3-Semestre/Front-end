import React, { useState } from "react";

import style from '../styles/Side.module.css';
const SidebarIcon = (props) => {
  const exit = () => {
    sessionStorage.clear();
  };
  
  return (
    <span className={style.sidebarIcon}>
      <img src={props.image} alt="Icon" className={style.iconImage} width={40}/>
      <div className={style.sidebarContent}>
        <ul>
          <li><a href={props.ref1}>{props.firstoption}</a></li>
          <li><a href={props.ref2}>{props.secondoption}</a></li>
          <li><a href={props.ref3} onClick={props.thirdoptiion === "Sair" ? exit : ''}>{props.thirdoptiion}</a></li>
        </ul>
      </div>
    </span>
  );
};

export default SidebarIcon;