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

          <SidebarIcon image={personPhoto} firstoption="Perfil" thirdoptiion="Sair" />
          <SidebarIcon image={chat} firstoption="Minhas conversas" />
          <SidebarIcon image={cart} firstoption="Meus Pedidos" secondoption="Carrinho" thirdoptiion="Favoritos" />
          <img src={grafico} alt="Logo da editmatch" width={40} height={50} />

        </div>

      </div>

    </>
  )
}
export default Sidebar;