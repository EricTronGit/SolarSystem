import { useState } from "react";
import { Spring } from "react-spring/renderprops-universal";
import jupiter from "../assets/jupiter.png";
import ModalTemplate from "../modal/modal";

function Jupiter(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [appearTextTopLeft, setAppearTextTopLeft] = useState(false);
    let [appearTextTopRight, setAppearTextTopRight] = useState(false);
    let [appearTextBotLeft, setAppearTextBotLeft] = useState(false);
    let [appearTextBotRight, setAppearTextBotRight] = useState(false);

    document.addEventListener('scroll', function(e) {
        if (window.scrollY > 6000) {
            setAppearTextTopLeft(true);
        }
        if (window.scrollY > 6200) {
            setAppearTextTopRight(true); 
        }
        if (window.scrollY > 6400) {
            setAppearTextBotLeft(true);
        }
        if (window.scrollY > 6500) {
            setAppearTextBotRight(true);
        }
      });

    return(
        <div className="jupiter">
            <span className="textTitre">Jupiter</span>   
            <ModalTemplate close={handleClose} textHeader="Jupiter" textBody="pouet Jupiter" show={show}></ModalTemplate>
            {appearTextTopLeft &&
            <Spring config={{delay: 900}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopLeft" style={props}>Jupiter est une planète géante gazeusea. Il s'agit de la plus grosse planète du Système solaire, plus volumineuse et massive que toutes les autres planètes réunies.</p>}
              </Spring>
            }
            {appearTextTopRight &&
              <Spring config={{delay: 900}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopRight" style={props}>Visible à l'œil nu dans le ciel nocturne, Jupiter est habituellement le quatrième objet le plus brillant de la voûte céleste, après le Soleil, la Lune et Vénus.</p>}
              </Spring>
                }
                {appearTextBotLeft &&
              <Spring config={{delay: 900}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotLeft" style={props}>Comme sur les autres planètes gazeuses, des vents violents, de près de 600 km/h, parcourent les couches supérieures de la planète.</p>}
              </Spring>
                }
                {appearTextBotRight &&
              <Spring config={{delay: 900}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotRight" style={props}>Regroupant Jupiter et les objets se trouvant dans sa sphère d'influence, le système jovien est une composante majeure du Système solaire externe.</p>}
              </Spring>  
                }
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={jupiter} alt="jupiter" onClick={handleShow}></img>
            </div> 
        </div>
    )
}

export default Jupiter;