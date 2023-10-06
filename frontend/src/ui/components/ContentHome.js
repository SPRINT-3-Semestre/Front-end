import style from '../styles/ContentHome.module.css'
import { Link } from 'react-router-dom';
function ContentHome() {
    return (
        <>
            <div className='container'>

                <div className="row">
                    <div className="col-md-6">
                        <div className={style.home_box}>
                            <p className={style.home_text}>
                                Navegue pelo nosso Dashboard de Editores
                                e descubra o talento que você precisa para
                                oferecer os melhores resultados em seus projetos.
                                Editores habilidosos estão ao seu alcance, prontos para serem contratados!
                            </p>
                            <Link to="/login" className={`btn ${style.home_button}`}>Encontre ou seja um Editor</Link>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className={style.home_boxright}>
                            <div className={style.home_box_reduced_1}></div>
                            <div className={style.home_box_reduced_2}></div>
                            <img className={style.home_image}></img>
                        </div>
                    </div>
                    
                </div>


                <div className="row">
                    <div className='col-md-6'>
                        <div className={style.home_box2}>
                            <div className={style.home_box_reduced_3}></div>
                            <div className={style.home_box_reduced_4}></div>
                            <img className={style.home_image2}></img>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className={style.home_boxright2}>
                            <div class="text-center">
                                <h3 className="mt-4">O que você está esperando?</h3>
                                <p className="fs-4">
                                    Junte-se á nossa comunidade de clientes satistfeitos!
                                    Confira nosso incrivel portfolio de editores e dê a vida aos seus projetos com a ajuda de nossos talentosos editores de video freelancers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`row ${style.common_questions}`}>
                    <h3 className="text-center">PERGUNTAS FREQUENTES</h3>
                    <div className="col-md-6">

                        <div className="fs-5 mt-4 text-center">
                            <h4>Como posso contratar um editor?</h4>
                            <p>Basta acessar o site com suas credenciais e ir na aba de exposição de editores e ter um contato direto com ele!</p>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className="fs-5 mt-4 text-center">
                            <h4 className="">Como posso prestar serviço de edição?</h4>
                            <p>
                                Basta cadastrar-se na nossa plataforma e preencher seu portfolio, assim, você será exibido na aba de exposição de editores.
                                Você também pode enviar propostas para os clientes na aba de exposição de clientes.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default ContentHome;