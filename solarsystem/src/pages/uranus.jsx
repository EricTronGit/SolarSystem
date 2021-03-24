import uranus from "../assets/uranus.png";

function Uranus(){
    return (
        <div className="uranus">
            <span className="textTitre">Uranus</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={uranus} alt="uranus"></img>
            </div> 
        </div>
    )
}
export default Uranus;