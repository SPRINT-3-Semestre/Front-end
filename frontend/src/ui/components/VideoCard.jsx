import { useEffect, useState } from "react";

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
        <div className="card">
            <div className="card-title text-center">
                <h5>{props.title}</h5>
            </div>
            <div className="card-body">
                <iframe
                    title={props.title}
                    src={`https://www.youtube.com/embed/${video}`}
                    allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default VideoCard;
