import style from '../../styles/Header-home.module.css'

function Header(){
return(
    <>
    <header className={style.header}>
    <div className={style.boxImage}><img></img></div>
    <h1 className={style.text}>Bem vindo a <span className={style.textColor}>EditMatch</span></h1>
    </header>
    </>
    )
}

export default Header