import logo from './logo.svg';
import './App.css';
import { Parallax, Background } from "react-parallax";
import {Spring, config} from 'react-spring/renderprops'



import background from "./assets/backgroundG.png";
import  sun  from "./assets/sun.png";
import  mercury  from "./assets/mercury.png";
import venus from "./assets/venus.png";
import earth from "./assets/earth.png";
import mars from "./assets/mars.png";
import jupiter from "./assets/jupiter.png";
import saturne from "./assets/saturn.png";
import uranus from "./assets/uranus.png";
import neptune from "./assets/neptune.png";
import asteroid from "./assets/ceintureAsteroid.png";
import { useState } from 'react';


function App() {

  let [styleMercuryText, setStyleMercuryText] = useState(false);
  

  document.addEventListener('scroll', function(e) {
    if(window.scrollY > 700){
      setStyleMercuryText(true);
    } 
  });

  return (
    <div className="App">         
      <Parallax bgImage={background} strength={4000}>
        <div className="backgroundStyle">

        <Parallax strength={-400}> 
            <span className="textTitre">Soleil</span>      
            <Spring config={{delay: 1200}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopLeft" style={props}>Le Soleil est l'étoile de notre système.<br />Il est à 149 597 870 700 mètres de la Terre</p>}
              </Spring>
              <Spring config={{delay: 2400}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopRight" style={props}>D'une épaisseur de 2000 km, sa température varie de 6000 à 20 000°C. Mieux vaut éviter de trop s'approcher du Soleil.</p>}
              </Spring>
              <div className="imgSunContainer">
                <img className="imgSun" src={sun} alt="Soleil"></img>
              </div> 
            </Parallax>
        

        <Parallax strength={-400}>
            <span className="textTitre">Mercure</span>
            {styleMercuryText && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopLeft" style={props}>Le Soleil est l'étoile de notre système.<br />Il est à 149 597 870 700 mètres de la Terre</p>}
            </Spring>
            }
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={mercury} alt="Mercure"></img>
            </div> 
        </Parallax>

        <Parallax strength={-400}>
            <span className="textTitre">Venus</span>      
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={venus} alt="Mercure"></img>
            </div> 
        </Parallax>

        <Parallax strength={-400}>
            <span className="textTitre">La Terre</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={earth} alt="Mercure"></img>
            </div> 
        </Parallax>

        <Parallax strength={-400}>
            <span className="textTitre">Mars</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={mars} alt="Mercure"></img>
            </div> 
        </Parallax>

        <Parallax strength={-400}>
            <span className="textTitre">Ceinture d'asteroïds</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={asteroid} alt="Mercure"></img>
            </div> 
        </Parallax>

        <Parallax strength={-400}>
            <span className="textTitre">Jupiter</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={jupiter} alt="Mercure"></img>
            </div> 
        </Parallax>

        <Parallax strength={-400}>
            <span className="textTitre">Saturne</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={saturne} alt="Mercure"></img>
            </div> 
        </Parallax>

        <Parallax strength={-400}>
            <span className="textTitre">Uranus</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={uranus} alt="Mercure"></img>
            </div> 
        </Parallax>

        <Parallax strength={-400}>
            <span className="textTitre">Neptune</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={neptune} alt="Mercure"></img>
            </div> 
        </Parallax>

        </div>

      </Parallax>

    </div>
  );
}

export default App;
