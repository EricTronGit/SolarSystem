import { useState } from "react";
import { Spring } from "react-spring/renderprops-universal";
import mars from "../assets/mars.png";

function Mars() {

    let [appearTextTopLeft, setAppearTextTopLeft] = useState(false);
    let [appearTextTopRight, setAppearTextTopRight] = useState(false);
    let [appearTextBotLeft, setAppearTextBotLeft] = useState(false);
    let [appearTextBotRight, setAppearTextBotRight] = useState(false);

    document.addEventListener('scroll', function(e) {
        if (window.scrollY > 3900) {
            setAppearTextTopLeft(true);
        }
        if (window.scrollY > 4000) {
            setAppearTextTopRight(true); 
        }
        if (window.scrollY > 4100) {
            setAppearTextBotLeft(true);
        }
        if (window.scrollY > 4200) {
            setAppearTextBotRight(true);
        }
      });


    return (
        <div className="Mars">
            <span className="textTitre">Mars</span>     
            {appearTextTopLeft && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoVenusTopLeft" style={props}>Mars est une planète tellurique, comme le sont Mercure, Vénus et la Terre, environ dix fois moins massive que la Terre mais dix fois plus massive que la Lune.</p>}
            </Spring>
            }
            {appearTextTopRight && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopRight" style={props}>La période de rotation de Mars est du même ordre que celle de la Terre et son obliquité lui confère un cycle des saisons similaire à celui que nous connaissons.</p>}
            </Spring>
            }
             {appearTextBotLeft && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotLeft" style={props}>Mars possède deux petits satellites naturels, <u>Phobos et Déimos</u>.</p>}
            </Spring>
            }
            {appearTextBotRight && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotRight" style={props}>L'eau liquide en surface et que des formes de vie similaires à celles existant sur Terre pouvaient s'y être développées, thème très fécond en science-fiction.</p>}
              </Spring>
            }
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={mars} alt="mars"></img>
            </div> 
        </div>
    );
}

export default Mars;