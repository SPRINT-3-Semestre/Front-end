import { Helmet } from "react-helmet";
import defaultPhoto from '../../ui/images/personicon.png'
import Sidebar from "../../ui/components/surfaces/SideBar";

function Portfolio() {
    return (
        <>
            <Helmet title="Portfolio" />
            <Sidebar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <img src={defaultPhoto} alt="Foto do editor" width={200} />
                        <p className={`${style.Editor_name}`}>Nome do editor</p>
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
            </div>
        </>
    )
}
export default Portfolio;