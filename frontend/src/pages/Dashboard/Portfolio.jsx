import { Helmet } from "react-helmet";
import { useState } from "react";

import defaultPhoto from '../../ui/images/personicon.png'
import Sidebar from "../../ui/components/surfaces/SideBar";
import VideoCard from "../../ui/components/VideoCard";
import NovoVideo from "../../ui/components/modals/NovoVideo";

function Portfolio() {

    const [videos, setVideos] = useState([]);

    return (
        <>
            <Helmet title="Portfolio" />
            <Sidebar />

            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5 text-center">
                        <img src={defaultPhoto} alt="Foto do editor" width={200} />
                        <h2>Nome do editor</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="mt-4">Habilidades</h3>
                        <div className="row">
                            <div className="col-md-4">
                                <p className="mt-2">Design Gráfico</p>
                            </div>
                            <div className="col-md-4">
                                <p className="mt-2">Edição de Vídeo</p>
                            </div>
                            <div className="col-md-4">
                                <p className="mt-2">Programação</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                        {sessionStorage.getItem('editor') &&
                            <div className="col-md-12 mt-4">
                                <NovoVideo videos={videos} setVideos={setVideos} />
                            </div>
                        }
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
            </div >
        </>
    )
}
export default Portfolio;