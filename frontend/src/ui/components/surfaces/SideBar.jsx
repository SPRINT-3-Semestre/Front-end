import React, { useState } from "react";
import style from '../../../ui/styles/Side.module.css';
import defaultPhoto from '../../images/personicon.png'
import cart from '../../images/Cart.svg'
import grafico from '../../images/Grafico.svg'
import chat from '../../images/Vector-1.svg'
import logo from '../../images/logo.png'
import SidebarIcon from "../SideBarIcon";

const Sidebar = () => {
  const [personPhoto, setPersonPhoto] = useState(defaultPhoto);
  const API_URL = 'http://localhost:8080/api/v1';



  return (
    <>
      <div className={style.side}>

        <div className={style.icons}>
          <img src={logo} alt="Logo da editmatch" width={40} height={50} />
          <SidebarIcon image={personPhoto} firstoption="Perfil" ref2="/perfil" thirdoptiion="Sair" ref3="/" />
          <SidebarIcon image={chat} firstoption="Conversas" ref1="/chat"/>
          <SidebarIcon image={cart} firstoption="Meus Pedidos" />
          <a href="#"><img src={grafico} alt="Grafico"/></a>

        </div>

      </div>

    </>
  )
}
export default Sidebar;