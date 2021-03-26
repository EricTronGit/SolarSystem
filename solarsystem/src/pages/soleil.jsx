import  sun  from "../assets/sun.png";
import  fleche  from "../assets/fleche.png";
import soleil from "../json/soleil.json";

import ModalSoleil from "../modal/modal.jsx";

import {Spring} from 'react-spring/renderprops'

import {Tooltip, OverlayTrigger} from 'react-bootstrap';
import { useState } from "react";


function Soleil() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let textModal = soleil.jsonSoleil[4].modalBody;

    return (
        <div className="Soleil">
            <span className="textTitre">Le Soleil</span>      
            <ModalSoleil close={handleClose} textBody={textModal} show={show}></ModalSoleil>      
            <Spring config={{delay: 900}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopLeft" style={props}>Le Soleil est l'étoile de notre système.<br />Il est à 149 597 870 700 mètres de la Terre.</p>}
              </Spring>
              <Spring config={{delay: 1500}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopRight" style={props}>D'un diamètre de 1,3927 Million de kilomètres, avec une température de surface de 5 505 °C. Mieux vaut éviter de trop s'approcher du Soleil.</p>}
              </Spring>
              <Spring config={{delay: 2100}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotLeft" style={props}>Le Soleil est une étoile naine jaune qui se compose de 74 % d’hydrogène, de 24 % d’hélium et d’une fraction d’éléments plus lourds.</p>}
              </Spring>
              <Spring config={{delay: 2700}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotRight" style={props}>Le Soleil est une étoile âgée d'environ 4,57 milliards d’années, soit un peu moins de la moitié de son chemin sur
                   <OverlayTrigger  
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                        <strong>La séquence principale désigne aussi le stade principal de l'évolution d'une étoile : c'est pendant cette période que ses caractéristiques correspondent à celles de la séquence principale du diagramme Hertzsprung-Russell et qu'elle s'y trouve effectivement représentée.</strong>.
                        </Tooltip>
                    }>
                        <u> la séquence principale </u>
                    </OverlayTrigger>
                    .</p>}
              </Spring>
              <Spring config={{delay: 3300}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props =>  <img className="imgFleche" style={props} src={fleche} alt="Flecheclick" ></img> }
              </Spring>
              
              <div className="imgSunContainer">       
                <img className="imgSun" src={sun} alt="Soleil" onClick={handleShow}></img>               
            </div>                        
        </div>
    );
}

export default Soleil;