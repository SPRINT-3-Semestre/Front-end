import { Helmet } from "react-helmet";
import { useState } from "react";

import defaultPhoto from '../../ui/images/personicon.png'
import Sidebar from "../../ui/components/surfaces/SideBar";
import VideoCard from "../../ui/components/VideoCard";
import NovoVideo from "../../ui/components/modals/NovoVideo";

function Portfolio() {

    const [videos, setVideos] = useState([
        { link_video: 'https://www.youtube.com/watch?v=7Qgpasu3xSU' },
    ]);

    return (
        <>
            <Helmet title="Portfolio" />
            <Sidebar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <img src={defaultPhoto} alt="Foto do editor" width={200} />
                        <p className='{`${style.Editor_name}`}'>Nome do editor</p>
                    </div>

                    <div className="col-md-6">
                        <h3 className="mt-4">Sobre mim</h3>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Vel deserunt commodi aperiam laborum illum quis, vero,
                            odio voluptatum similique laudantium, numquam minus illo
                            nobis ipsa labore nostrum nulla accusantium rerum?
                        </p>
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

                    <div className="row">
                        <div className="col-md-9 text-center">
                            <h3 className="mt-4">Videos</h3>
                        </div>
                        {/* ... (seu código existente) */}
                        {sessionStorage.getItem('editor') === 'true' && (
                            <div className="col-md-3 mt-4">
                                <NovoVideo videos={videos} setVideos={setVideos} />
                            </div>
                        )}
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