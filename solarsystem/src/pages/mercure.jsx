import { useState } from "react";
import {Spring} from 'react-spring/renderprops'
import  mercury  from "../assets/mercury.png";


function Mercure() {

    let [styleMercuryText, setStyleMercuryText] = useState(false);
    let [styleMercuryText2, setStyleMercuryText2] = useState(false);
    let [styleMercuryText3, setStyleMercuryText3] = useState(false);
    let [styleMercuryText4, setStyleMercuryText4] = useState(false);

    document.addEventListener('scroll', function(e) {
        if (window.scrollY > 600) {
            setStyleMercuryText(true);
        }
        if (window.scrollY > 700) {
            setStyleMercuryText2(true);
        }
        if (window.scrollY > 800) {
            setStyleMercuryText3(true);
        }
        if (window.scrollY > 900) {
            setStyleMercuryText4(true);
        }
    });

    return (
        <div className="mercure">
            <span className="textTitre">Mercure</span>
            {styleMercuryText && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopLeft" style={props}>Mercure est la planète la plus proche du Soleil et la moins massive du Système solaire.</p>}
            </Spring>
            }
            {styleMercuryText2 && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopRight" style={props}>C'est une planète tellurique. Elle est près de trois fois plus petite et presque vingt fois moins massive que la Terre mais presque aussi dense qu'elle.</p>}
            </Spring>
            }
             {styleMercuryText3 && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotLeft" style={props}>Mercure est composée d'environ 70 % de métaux (principalement dans le noyau) et de 30 % de silicate (principalement dans son manteau).</p>}
            </Spring>
            }
            {styleMercuryText4 && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotRight" style={props}>A sa surface, les températures vont de 400°C, dans la partie où brille le soleil, à -150°C, dans celle qui se trouve dans la pénombre.</p>}
              </Spring>
            }
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={mercury} alt="Mercure"></img>
            </div> 
        </div>
    );
}

export default Mercure;