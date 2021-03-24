import { Spring } from "react-spring/renderprops-universal";
import satellite from "../assets/satellite.png";
import earth from "../assets/earth.png";
import { useState } from "react";


function Terre(){

    let [imgSatellite, setImgSatellite] = useState(false);

    document.addEventListener('scroll', function(e) {
        if (window.scrollY > 2500) {
            setImgSatellite(true);
        }
    });
    return (
        <div className="terre">
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
        </div>
    )
}

export default Terre;