import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NovoVideo({ videos, setVideos }) {

    const [newTitleVideo, setTitleVideo] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [newVideoLink, setNewVideoLink] = useState('');

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        setNewVideoLink('');
        setTitleVideo('');
    };

    const handleAddVideo = () => {
        if (newVideoLink && newTitleVideo) {
            setVideos([...videos, { link_video: newVideoLink, title: newTitleVideo }]);
            handleCloseModal();
        } else {
            alert('Por favor, insira um link e título de vídeo do YouTube válidos.');
        }
    };

    return (
        <>
            {sessionStorage.getItem('editor') === 'true' && (
                <>
                    <div className="col-md-2 mt-4">
                        <button className="btn btn-primary" onClick={handleOpenModal}>
                            Adicionar vídeo
                        </button>
                    </div>
                    <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Adicionar Vídeo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Título do vídeo</label>
                                    <input
                                        type="text"
                                        value={newTitleVideo}
                                        onChange={(e) => setTitleVideo(e.target.value)}
                                    />
                                </div>
                           <div className="col-md-6">
                               <label>Link do Vídeo:</label>
                                <input
                                    type="text"
                                    value={newVideoLink}
                                    onChange={(e) => setNewVideoLink(e.target.value)}
                                    />
                                    </div>
                           </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Fechar
                            </Button>
                            <Button variant="primary" onClick={handleAddVideo}>
                                Adicionar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </>
    )
}

export default NovoVideo;
