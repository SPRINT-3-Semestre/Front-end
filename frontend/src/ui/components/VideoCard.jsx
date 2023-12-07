import { useEffect, useState } from "react";

import style from "../../ui/styles/VideoCard.module.css";

function VideoCard(props) {
    const [video, setVideo] = useState();

    const tratamento = (url) => {
        const urlTratada = url.split('watch?v=')
        return urlTratada[1]
    }

    const linkVideo = () => {
        setVideo(tratamento(props.link_video))
    }

    useEffect(() => {
        linkVideo()
    }, [])

    return (
        <div className={style.card}>
            <div className="card">
                <div className="card-header text-center">
                    <h5 className="card-title mb-0">{props.title}</h5>
                </div>
                <div className="card-body embed-responsive embed-responsive-16by9">
                    <iframe
                        title={props.title}
                        className="embed-responsive-item"
                        src={`https://www.youtube.com/embed/${video}`}
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
