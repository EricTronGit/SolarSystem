import { useState } from "react";
import { Spring } from "react-spring/renderprops-universal";

import venus from "../assets/venus.png";


function Venus (){


    let [appearTextTopLeftVenus, setAppearTextTopLeftVenus] = useState(false);
    let [appearTextTopRightVenus, setAppearTextTopRightVenus] = useState(false);
    let [appearTextBotLeftVenus, setAppearTextBotLeftVenus] = useState(false);
    let [appearTextBotRightVenus, setAppearTextBotRightVenus] = useState(false);

    document.addEventListener('scroll', function(e) {
        if (window.scrollY > 1600) {
            setAppearTextTopLeftVenus(true);
        }
        if (window.scrollY > 1700) {
            setAppearTextTopRightVenus(true); 
        }
        if (window.scrollY > 1800) {
            setAppearTextBotLeftVenus(true);
        }
        if (window.scrollY > 1900) {
            setAppearTextBotRightVenus(true);
        }
      });

    return(
        <div className="venus">
            <span className="textTitre">Venus</span>     
            {appearTextTopLeftVenus && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoVenusTopLeft" style={props}>Vénus est la deuxième planète du Système solaire, c'est la sixième plus grosse aussi bien par la masse que le diamètre. Elle doit son nom à la déesse romaine de l'amour.</p>}
            </Spring>
            }
            {appearTextTopRightVenus && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopRight" style={props}>Vénus orbite autour du Soleil à une distance moyenne d'environ 108 millions de kilomètres et complète une orbite tous les 224,7 jours terrestres.</p>}
            </Spring>
            }
             {appearTextBotLeftVenus && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotLeft" style={props}>La température de surface de Vénus (462°C) varie peu selon les latitudes et longitudes.</p>}
            </Spring>
            }
            {appearTextBotRightVenus && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotRight" style={props}>L'exploration de Vénus à l'aide de sondes spatiales commence au début des années 1960, peu après l'envoi du premier satellite artificiel en orbite, Spoutnik 1.</p>}
              </Spring>
            }
             
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={venus} alt="venus"></img>
            </div> 
        </div>
    )
}

export default Venus;