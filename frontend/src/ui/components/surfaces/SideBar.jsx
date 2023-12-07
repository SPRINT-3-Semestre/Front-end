import React, { useEffect, useState } from "react";
import style from '../../../ui/styles/Side.module.css';
import { useNavigate } from 'react-router-dom';


import defaultPhoto from '../../images/personicon.png'
import cart from '../../images/Cart.svg'
import grafico from '../../images/Grafico.svg'
import chat from '../../images/Vector-1.svg'
import logo from '../../images/logoAtt.png'
import SidebarIcon from "../SideBarIcon";
import services from '../../images/person-workspace.svg'

const Sidebar = () => {

  const navigate = useNavigate();

  const [personPhoto, setPersonPhoto] = useState(defaultPhoto);

  useEffect(() => {
    const photo = sessionStorage.getItem('userPhoto');
    if (photo) {
      setPersonPhoto(photo);
    }
  }, []);

  const handleClick = () => {
    navigate('/exposicao-editor');
  };

  return (
    <>
      <div className={style.side}>
        <div className={style.icons}>
          <img src={logo} alt="Logo da editmatch" width={40} height={50} onClick={handleClick} />
          <SidebarIcon
            image={personPhoto}
            firstoption="Perfil"
            ref1="/editar-informacoes"
            secondoption="Sair"
            ref2="/"
            thirdoption={sessionStorage.getItem("editor") ? "portfolio" : undefined}
            ref3={sessionStorage.getItem("editor") ? "/portfolio/editor" : undefined}
            />

          <SidebarIcon image={services} firstoption="Pedidos" ref1="/exposicao-pedidos" secondoption="Meus pedidos" ref2="/meus-pedidos" thirdoptiion="Contratar editores" ref3="/exposicao-editor" />
          <SidebarIcon image={chat} firstoption="Conversas ativas" ref1="/conversas-ativas" />
          <SidebarIcon image={cart} firstoption="Meu carrinho" ref1="/carrinho" />
          {/* {sessionStorage.getItem('editor') === 'true' && (
            <SidebarIcon image={grafico} firstoption="Ganhos mensais" ref1="/ganhos-mensais" />
          )} */}
        </div>
      </div>

    </>
  )
};
export default Sidebar