import neptune from "../assets/neptune.png";

function Neptune(){
    return(
        <div className="neptune">
            <span className="textTitre">Neptune</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={neptune} alt="neptune"></img>
            </div> 
        </div>
    )
}

export default Neptune;