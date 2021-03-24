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
import satellite from "./assets/satellite.png";
import { useState } from 'react';


function App() {

  let [styleMercuryText, setStyleMercuryText] = useState(false);
  let [styleMercuryText2, setStyleMercuryText2] = useState(false);
  let [styleMercuryText3, setStyleMercuryText3] = useState(false);
  let [styleMercuryText4, setStyleMercuryText4] = useState(false);
  let [styleVenusText, setStyleVenusText] = useState(false);
  let [styleVenusText2, setStyleVenusText2] = useState(false);
  let [styleVenusText3, setStyleVenusText3] = useState(false);
  let [styleVenusText4, setStyleVenusText4] = useState(false);

  let [imgSatellite, setImgSatellite] = useState(false);



  

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
    if(window.scrollY > 2800) {
        setImgSatellite(true);
    }
  });

  return (
    <div className="App">         
      <Parallax bgImage={background} strength={4000}>
        <div className="backgroundStyle">

        <Parallax strength={-400}> 
            <span className="textTitre">Soleil</span>      
            <Spring config={{delay: 900}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopLeft" style={props}>Le Soleil est l'étoile de notre système.<br />Il est à 149 597 870 700 mètres de la Terre.</p>}
              </Spring>
              <Spring config={{delay: 1800}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopRight" style={props}>D'une épaisseur de 2000 km, sa température varie de 6000 à 20 000°C. Mieux vaut éviter de trop s'approcher du Soleil.</p>}
              </Spring>
              <Spring config={{delay: 2700}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotLeft" style={props}>Le Soleil est une étoile naine jaune qui se compose de 74 % d’hydrogène, de 24 % d’hélium et d’une fraction d’éléments plus lourds.</p>}
              </Spring>
              <Spring config={{delay: 3600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotRight" style={props}>Le Soleil est une étoile âgée d'environ 4,57 milliards d’années, soit un peu moins de la moitié de son chemin sur la séquence principale.</p>}
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
        </Parallax>

        <Parallax strength={-400}>
        {styleMercuryText && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopLeft" style={props}>Vénus est la deuxième planète du Système solaire, c'est la sixième plus grosse aussi bien par la masse que le diamètre. Elle doit son nom à la déesse romaine de l'amour.</p>}
            </Spring>
            }
            {styleMercuryText2 && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopRight" style={props}>Vénus orbite autour du Soleil à une distance moyenne d'environ 108 millions de kilomètres et complète une orbite tous les 224,7 jours terrestres.</p>}
            </Spring>
            }
             {styleMercuryText3 && 
            <Spring config={{delay: 600}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunBotLeft" style={props}>La température de surface de Vénus (462°C) varie peu selon les latitudes et longitudes.</p>}
            </Spring>
            }
            {styleMercuryText4 && 
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
        </Parallax>

        <Parallax strength={-400}>
            <span className="textTitre">La Terre</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={earth} alt="earth"></img>
                {imgSatellite && 
                    <Spring config={{delay: 600}}
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}>
                        {props =>  <img className="imgSatellite" style={props} src={satellite} alt="satellite"></img> }
                    </Spring>
                    }
               
            </div> 
                      
                                   
            
            

        </Parallax>

        <Parallax strength={-400}>
            <span className="textTitre">Mars</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={mars} alt="mars"></img>
            </div> 
        </Parallax>

        <Parallax strength={-400}>
            <span className="textTitre">Ceinture d'asteroïds</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={asteroid} alt="asteroid"></img>
            </div> 
        </Parallax>

        <Parallax strength={-400}>
            <span className="textTitre">Jupiter</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={jupiter} alt="jupiter"></img>
            </div> 
        </Parallax>

        <Parallax strength={-400}>
            <span className="textTitre">Saturne</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={saturne} alt="saturne"></img>
            </div> 
        </Parallax>

        <Parallax strength={-400}>
            <span className="textTitre">Uranus</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={uranus} alt="uranus"></img>
            </div> 
        </Parallax>

        <Parallax strength={-400}>
            <span className="textTitre">Neptune</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={neptune} alt="neptune"></img>
            </div> 
        </Parallax>

        </div>

      </Parallax>

    </div>
  );
}

export default App;
