import asteroid from "../assets/ceintureAsteroid.png";

function Asteroid(){
    return (
        <div className="asteroid">
             <span className="textTitre">Ceinture d'asteroïds</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={asteroid} alt="asteroid"></img>
            </div> 
        </div>
    )
}

export default Asteroid;