import { Link } from 'react-router-dom';



import Footer from "../../ui/components/surfaces/Footer";
import style from '../../ui/styles/ContentHome.module.css'
import logo from '../../ui/images/logoAtt.png'
import Helmet from 'react-helmet'
import Header from "../../ui/components/surfaces/Header";
import image1 from "../../ui/images/home-image1.png";
import image2 from "../../ui/images/home-image2.png";
import network from "../../ui/images/icons-home/carbon_network-1.svg";
import people from "../../ui/images/icons-home/bi_people.svg";
import shield from "../../ui/images/icons-home/ant-design_safety-outlined.svg";
import smile from "../../ui/images/icons-home/streamline_happy-face.svg";

function Home() {
    return (
        <>
            <Helmet title="EditMatch - Home" />
            <Header />
            <header className={style.header}>
                <div className={style.logo}>
                    <div className={style.boxImage}><img src={logo}></img></div>
                    <h1 className={style.text}>Boas vindas a <span className={style.textColor}>EditMatch</span></h1>
                    <p><b>Encontre os Melhores Editores de Vídeo ou Ganhe Dinheiro Editando!</b></p>
                </div>
            </header>
            <div className='container'>
                <div className="row">
                    <div className="col-6 col-md-6">
                        <h1 className={style.title}>Você é um Editor em Busca de Trabalho?</h1>
                        <p className={style.subtitle}>
                            Se você é apaixonado por edição de vídeo e está em busca de oportunidades para mostrar seu talento e ganhar dinheiro,
                            o EDITMATCH é o lugar certo para você. Conecte-se a uma variedade de projetos emocionantes e encontre oportunidades para
                            mostrar suas habilidades de edição. Cadastre-se agora e comece a criar!</p>
                        <Link to="/register-seletor" className={style.button}>Cadastre-se como editor </Link>
                    </div>

                    <div className="col-6 col-md-6">
                        <img src={image1} alt="editor de video" className={style.image} />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-6 col-md-6">
                        <img src={image2} alt="editor de video" className={style.image2} />
                    </div>

                    <div className="col-6 col-md-6 ">
                        <h1 className={style.title}>Precisa de um Editor de Vídeo Profissional?</h1>
                        <p className={style.subtitle}>
                            Encontre os melhores editores de vídeo para o seu projeto aqui no EDITMATCH.
                            Nossa plataforma conecta você a uma comunidade de editores talentosos e experientes.
                            Desde vídeos pessoais a produções profissionais, temos o editor perfeito para transformar sua visão em realidade.
                            Comece agora e encontre o editor certo para o seu projeto!</p>
                        <Link to="/register-seletor" className={style.button}>Encontre um editor </Link>
                    </div>
                </div>

                <div className="row text-center mt-5">
                    <h1 className='text-warning'>Por que escolher o EDITMATCH?</h1>
                    <div className={style.benefits}>
                        <div className="row mt-4">
                            <div className="col-md-2">
                                <img src={network} alt="" />
                            </div>
                            <div className="col-md-10">
                                <b>Conexões Precisas:</b> Correspondemos
                                você aos editores que melhor atendem às suas necessidades.
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-2">
                                <img src={people} alt="" />
                            </div>
                            <div className='col-md-10' >
                                <b>Variedade de Talentos:</b> Temos uma comunidade diversificada de editores com habilidades únicas.
                            </div >
                        </div>
                        <div className="row mt-4">
                            <div className='col-md-2'>
                                <img src={shield} alt="" />
                            </div>
                            <div className="col-md-10">
                                <b>Segurança Garantida:</b> Processo seguro e confiável para transações e contratações.
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className='col-md-2'>
                                <img src={smile} alt="" />
                            </div>
                            <div className="col-md-10">
                                <b>Facilidade de Uso:</b> Navegue facilmente por projetos e perfis de editores.
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <Footer />
        </>
    )
}

export default Home;