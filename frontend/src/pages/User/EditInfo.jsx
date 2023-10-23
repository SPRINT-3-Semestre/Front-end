import personIcon from '../../ui/images/personicon.png'
import Sidebar from '../../ui/components/surfaces/SideBar';
import style from '../../ui/styles/EditInfo.module.css'

function EditInfo() {
    return (
        <>
            <Sidebar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <div className={style.configCard}>
                        <form onSubmit="" method='POST' typeof='multipart/form-data' >
                            <div className="row">
                                <div className="col-1 col-md-2">
                                    <img src={personIcon} alt="Foto da pessoa" width={150}/>
                                    <input type="file" name="" id="" className={`form-control mt-2 ${style.input}`} />
                                </div>

                                <div className="col-11 col-md-10">
                                    <div className="content">
                                        <h5 className='mt-5'>Dados pessoais</h5>
                                            <div className="row">
                                                <div className="col-6 col-md-6">
                                                    <label className='form-label'>Nome</label>
                                                    <input type="text" className='form-control' />
                                                </div>
                                                <div className="col-6 col-md-6">
                                                    <label className='form-label'>Email</label>
                                                    <input type="text" className='form-control' />
                                                </div>
                                            </div>
                                            <div className="row mt-5">
                                                <div className="col-6 col-md-6">
                                                    <label className='form-label'>Codigo postal</label>
                                                    <input type="text" className='form-control' />
                                                    <label className='form-label'>Logradouro</label>
                                                    <input type="text" className='form-control' />
                                                    <label className='form-label'>Bairro</label>
                                                    <input type="text" className='form-control' />
                                                    <label className='form-label'>Numero</label>
                                                    <input type="text" className='form-control' />
                                                </div>
                                                <div className="col-6 col-md-6">
                                                    <label className='form-label'>Complemento</label>
                                                    <input type="text" className='form-control' />
                                                    <label className='form-label'>Cidade</label>
                                                    <input type="text" className='form-control' />
                                                    <label className='form-label'>Estado</label>
                                                    <input type="text" className='form-control' />
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col-6 col-md-6">
                                                    <label className='form-label'>Senha atual</label>
                                                    <input type="text" className='form-control' />
                                                </div>
                                                <div className="col-6 col-md-6">
                                                    <label className='form-label'>Confirmar senha</label>
                                                    <input type="text" className='form-control' />
                                                </div>
                                            </div>
                                          <input type="submit" className={`btn btn-success ${style.button}`}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditInfo;