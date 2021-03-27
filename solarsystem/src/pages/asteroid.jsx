import { useState } from "react";
import { Spring } from "react-spring/renderprops-universal";
import asteroid from "../assets/ceintureAsteroid.png";
import Modal from "../modal/modal.jsx";


function Asteroid(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    let [styleTexteAsteroid, setStyleTexteAsteroid] = useState(false);
    let [styleTexteAsteroid2, setStyleTexteAsteroid2] = useState(false);
    let [styleTexteAsteroid3, setStyleTexteAsteroid3] = useState(false);

    document.addEventListener('scroll', function(e) {
        if (window.scrollY > 5000) {
            setStyleTexteAsteroid(true);
        }
        if (window.scrollY > 5300) {
            setStyleTexteAsteroid2(true);
        }
        if (window.scrollY > 5300) {
            setStyleTexteAsteroid3(true);
        }
    });

    return (
        <div className="asteroid">
             <span className="textTitre">Ceinture d'asteroïds</span>     
             <Modal close={handleClose} textHeader="les Astéroïds" textBody="pouet" show={show}></Modal>
             {styleTexteAsteroid && 
                <Spring config={{delay: 800}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoAsteroidTop" style={props}>La ceinture d'astéroïdes contient plusieurs centaines de milliers d'astéroïdes connus, et probablement plusieurs millions, d'une taille allant du grain de poussière au planétoïde de quelques centaines de kilomètres de diamètre.</p>}
                </Spring>
                }
                {styleTexteAsteroid2 && 
                <Spring config={{delay: 800}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoAsteroidBotLeft" style={props}>Le premier astéroïde fut découvert par Giuseppe Piazzi le 1er janvier 1801.</p>}
                </Spring>
                }
                {styleTexteAsteroid3 && 
                <Spring config={{delay: 800}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoAsteroidBotRight" style={props}>Le premier vaisseau spatial à avoir traversé la ceinture d'astéroïdes fut Pioneer 10, qui y entra le 16 juillet 1972.</p>}
                </Spring>
                }   
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={asteroid} alt="asteroid"  onClick={handleShow}></img>
            </div> 
        </div>
    )
}

export default Asteroid;