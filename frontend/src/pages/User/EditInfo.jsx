import personIcon from '../../ui/images/personicon.png'
import Sidebar from '../../ui/components/surfaces/SideBar';
import style from '../../ui/styles/EditInfo.module.css'
import React, { useState } from 'react';
import axios from 'axios';

function EditInfo() {

    // Código da API ViaCep
        const [cep, setCep] = useState('');
        const [logradouro, setLogradouro] = useState('');
        const [bairro,setBairro] = useState('');
        const [localidade, setLocalidade] = useState('');
        const [uf, setUf] = useState('');
      
        const handleCepChange = (event) => {
          setCep(event.target.value);
        };
      
        const handleSubmit = async (event) => {
          event.preventDefault();
      
          try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            setLogradouro(response.data.logradouro);
            setBairro(response.data.bairro);
            setLocalidade(response.data.localidade);
            setUf(response.data.uf);
            console.log(response.data)
          } catch (error) {
            console.error(error);
            setLogradouro('Endereço não encontrado');
            setBairro('Bairro nao encontrado');

          }
        };

    return (
        <>
            <Sidebar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <div className={style.configCard}>
                            <form  method='POST' typeof='multipart/form-data' >
                                <div className="row">
                                    <div className="col-1 col-md-2 float-start">
                                        <img src={personIcon} alt="Foto da pessoa" width={150} />
                                        <input type="file" name="" id="" className={`form-control mt-2 ${style.input}`} />
                                    </div>

                                    <div className="col-11 col-md-10">
                                        <div className="content">
                                            <h5 className='mt-5'>Dados pessoais</h5>
                                            <div className="row">
                                                <div className="col-6 col-md-6">
                                                    <label className='form-label'>Nome</label>
                                                    <input type="text" className='form-control'  />
                                                </div>
                                                <div className="col-6 col-md-6">
                                                    <label className='form-label'>Email</label>
                                                    <input type="text" className='form-control' />
                                                </div>
                                            </div>
                                            <div className="row mt-5">
                                                <div className="col-6 col-md-6">

                                                    <label className='form-label'>Codigo postal</label>
                                                    <input type="text" onChange={handleCepChange} className='form-control' />
                                                    <><button onClick={handleSubmit} > Pesqisar</button></>

                                                    <label className='form-label'>Cidade</label>
                                                    <input type="text" className='form-control' defaultValue={localidade}/>

                                                    <label className='form-label'>Logradouro</label>
                                                    <input type="text" className='form-control' defaultValue={logradouro} />
                                                    
                                                    <label className='form-label'>Complemento</label>
                                                    <input type="text" className='form-control' />
                                                    

                                                </div>
                                                <div className="col-6 col-md-6">
                                                    <label className='form-label'>Estado</label>
                                                    <input type="text" className='form-control' defaultValue={uf}/>

                                                    <label className='form-label'>Bairro</label>
                                                    <input type="text" className='form-control' defaultValue={bairro}/>

                                                    <label className='form-label'>Numero</label>
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
                                            <div className="row mt-4">
                                                <div className="col-md-12">
                                                    <input type="submit" className={`btn btn-success`} />
                                                </div>
                                            </div>
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