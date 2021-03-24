import  sun  from "../assets/sun.png";
import {Spring} from 'react-spring/renderprops'


function Soleil() {
    return (
        <div className="Soleil">
            <span className="textTitre">Soleil</span>      
            <Spring config={{delay: 900}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopLeft" style={props}>Le Soleil est l'étoile de notre système.<br />Il est à 149 597 870 700 mètres de la Terre.</p>}
              </Spring>
              <Spring config={{delay: 1800}}
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}>
                  {props => <p className="textInfoSunTopRight" style={props}>D'un diamètre de 1,3927 Million de kilomètres, avec une température de surface de 5 505 °C. Mieux vaut éviter de trop s'approcher du Soleil.</p>}
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
        </div>
    );
}

export default Soleil;