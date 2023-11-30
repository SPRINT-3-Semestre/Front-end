import React, { useEffect, useState } from "react";
import style from '../../../ui/styles/Side.module.css';
import defaultPhoto from '../../images/personicon.png'
import cart from '../../images/Cart.svg'
import grafico from '../../images/Grafico.svg'
import chat from '../../images/Vector-1.svg'
import logo from '../../images/logoAtt.png'
import SidebarIcon from "../SideBarIcon";
import { useNavigate } from 'react-router-dom';

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
          <SidebarIcon image={personPhoto} firstoption="Perfil" ref1="/editar-informacoes" thirdoptiion="Sair" ref3="/" />
          <SidebarIcon image={chat} firstoption="Conversas" ref1="/chat" />
          <SidebarIcon image={cart} firstoption="Meus Pedidos" ref1="/carrinho" />
          {sessionStorage.getItem('userType') === 'editor' && (
            <img src={grafico} alt="Grafico" />
          )}
        </div>
      </div>

    </>
  )};
export default Sidebar;