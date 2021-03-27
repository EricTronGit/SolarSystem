import { Spring } from "react-spring/renderprops-universal";
import satellite from "../assets/satellite.png";
import earth from "../assets/earth.png";
import moon from "../assets/moon.png";
import iss from "../assets/iss.png";
import { useState } from "react";
import Modal from "../modal/modal.jsx";


function Terre(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    let [textBodyGeneric, settextBodyGeneric] = useState("");
    let [textHeaderGenric, settextHeaderGenric] = useState("");

    let [imgSatellite, setImgSatellite] = useState(false);
    let [imgMoon, setImgMoon] = useState(false);
    let [styleTerreText, setStyleTerreText] = useState(false);
    let [styleTerreText2, setStyleTerreText2] = useState(false);
    let [styleTerreText3, setStyleTerreText3] = useState(false);
    let [styleTerreText4, setStyleTerreText4] = useState(false);

    document.addEventListener('scroll', function(e) {
        if (window.scrollY > 2500) {
            setStyleTerreText(true);
        }
        if (window.scrollY > 2700) {
            setStyleTerreText2(true);
            setImgMoon(true);
        }
        if (window.scrollY > 2900) {
            setStyleTerreText3(true);
            setImgSatellite(true);
        }
        if (window.scrollY > 3000) {
            setStyleTerreText4(true);
        }
    });

    const openModal = (elementClique) => {
        switch (elementClique.currentTarget.alt) {
            case "lune":
                settextBodyGeneric("je suis la lune");
                settextHeaderGenric("la Lune")
                break;
            case "earth":
                settextBodyGeneric("je suis la terre");
                settextHeaderGenric("la Terre")
                break;    
            case "iss":
                settextBodyGeneric("je suis la station spatiale");
                settextHeaderGenric("la Station Spatiale")
                break;  
            case "satellite":
                settextBodyGeneric("je suis un satellite");
                settextHeaderGenric("les Satellites")
                break;      
            default:
                console.log("ERREUR LORS DU CLIC POUR LA MODAL")
                break;
        }        
        handleShow();
    }

    return (
        <div className="terre">
            <span className="textTitre">La Terre</span>     
            <Modal close={handleClose} textHeader={textHeaderGenric} textBody={textBodyGeneric} show={show}></Modal>
            {styleTerreText && 
            <Spring config={{delay: 600}} 
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopLeft" style={props}>La terre est une planète tellurique sur laquelle nous vivons. Par ailleurs, elle est le seul objet céleste connu pour abriter la vie. </p>}
            </Spring>
            }
              {imgMoon && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <img className="imgMoon" style={props} src={moon} alt="lune" onClick={openModal}></img>}
            </Spring>
            }
            {styleTerreText2 && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopRight" style={props}>La Lune est l'unique satellite naturel permanent de notre planète Terre. Il s'agit du cinquième plus grand satellite naturel du Système solaire.</p>}
            </Spring>
            }          
             {styleTerreText3 && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotLeft" style={props}>Sur les 2.063 satellites en orbite terrestre, 38 % (788) sont dédiés à l'observation de la Terre (étude du climat, des précipitations, surveillance...) et 37 % (773) aux services de communication.</p>}
            </Spring>
            }
            {styleTerreText4 && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotRight textInfosTerreBotRight" style={props}>La Station spatiale internationale est une station spatiale placée en orbite terrestre basse, occupée en permanence par un équipage international</p>}
              </Spring>
            }
            {styleTerreText4 && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <img className="imgIss" style={props} src={iss} alt="iss" onClick={openModal}></img>}
              </Spring>
            }
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={earth} alt="earth" onClick={openModal}></img>
                {imgSatellite && 
                    <Spring config={{delay: 600}}
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}>
                        {props =>  <img className="imgSatellite" style={props} src={satellite} alt="satellite" onClick={openModal}></img> }
                    </Spring>
                    }
            
            </div> 
        </div>
    )
}

export default Terre;