import jupiter from "../assets/jupiter.png";

function Jupiter(){
    return(
        <div className="jupiter">
             <span className="textTitre">Jupiter</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={jupiter} alt="jupiter"></img>
            </div> 
        </div>
    )
}

export default Jupiter;