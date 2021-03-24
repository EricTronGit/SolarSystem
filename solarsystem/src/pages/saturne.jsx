import saturne from "../assets/saturn.png";

function Saturne(){

    return(
        <div className="saturne">
            <span className="textTitre">Saturne</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={saturne} alt="saturne"></img>
            </div> 
        </div>
    )
}
export default Saturne;