import { useState } from "react";
import { Spring } from "react-spring/renderprops-universal";

import venus from "../assets/venus.png";


function Venus (){

    let [styleVenusText, setStyleVenusText] = useState(false);
    let [styleVenusText2, setStyleVenusText2] = useState(false);
    let [styleVenusText3, setStyleVenusText3] = useState(false);
    let [styleVenusText4, setStyleVenusText4] = useState(false);

    document.addEventListener('scroll', function(e) {
        if (window.scrollY > 1500) {
            setStyleVenusText(true);
        }
        if (window.scrollY > 1600) {
            setStyleVenusText2(true); 
        }
        if (window.scrollY > 1700) {
            setStyleVenusText3(true);
        }
        if (window.scrollY > 1800) {
            setStyleVenusText4(true);
        }
      });

    return(
        <div className="venus">
            {styleVenusText && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopLeft" style={props}>Vénus est la deuxième planète du Système solaire, c'est la sixième plus grosse aussi bien par la masse que le diamètre. Elle doit son nom à la déesse romaine de l'amour.</p>}
            </Spring>
            }
            {styleVenusText2 && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopRight" style={props}>Vénus orbite autour du Soleil à une distance moyenne d'environ 108 millions de kilomètres et complète une orbite tous les 224,7 jours terrestres.</p>}
            </Spring>
            }
             {styleVenusText3 && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotLeft" style={props}>La température de surface de Vénus (462°C) varie peu selon les latitudes et longitudes.</p>}
            </Spring>
            }
            {styleVenusText4 && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotRight" style={props}>L'exploration de Vénus à l'aide de sondes spatiales commence au début des années 1960, peu après l'envoi du premier satellite artificiel en orbite, Spoutnik 1.</p>}
              </Spring>
            }
            <span className="textTitre">Venus</span>      
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={venus} alt="venus"></img>
            </div> 
        </div>
    )
}

export default Venus;