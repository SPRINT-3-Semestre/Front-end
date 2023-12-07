import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../ui/components/surfaces/SideBar";
import VideoCard from "../../ui/components/VideoCard";
import NovoVideo from "../../ui/components/modals/NovoVideo";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from "axios";

import defaultPhoto from '../../ui/images/personicon.png';

function Portfolio() {
    const [videos, setVideos] = useState([]);
    const [editorInfo, setEditorInfo] = useState({});

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const id = params.get("id");

    const navigate = useNavigate();


    console.log("id" , id)


    useEffect(() => {
        axios
            .get(`http://localhost:8080/portfolios/editor/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('authToken'),
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                console.log(response.data);
                setEditorInfo(response.data);
                setVideos(response.data.videos);
            })
            .catch((error) => {
                console.error('Erro ao carregar o portfolio:', error);
                alert('Erro ao carregar o portfolio. Por favor, tente novamente mais tarde.');
                navigate('/exposicao-editor');
            });
    }, [id, navigate]); 

    return (
        <>
            <Helmet title={`Portfolio de ${editorInfo.nome}`} />
            <Sidebar />

            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5 text-center">
                        <img src={editorInfo.photoProfileData ? `data:image/jpeg;base64,${editorInfo.photoProfileData}` : defaultPhoto} alt="Foto do editor" width={200} />
                        <h2>{editorInfo.nome}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="mt-4">Habilidades</h3>
                        <div className="row">
                            {editorInfo.skills && editorInfo.skills.map((skill, index) => (
                                <div key={index} className="col-md-4">
                                    <p className="mt-2">{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr />
                    {sessionStorage.getItem('editor') && (
                        <div className="col-md-12 mt-4">
                            <NovoVideo videos={videos} setVideos={setVideos} />
                        </div>
                    )}
                    <div className="row text-center">
                        <div className="col-md-12">
                            <h3 className="mt-4">Videos</h3>
                        </div>
                        {videos.map((video, index) => (
                            <div key={index} className="col-md-4 mt-4">
                                <VideoCard link_video={video.link_video} title={video.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
