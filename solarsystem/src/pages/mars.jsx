import mars from "../assets/mars.png";

function Mars() {
    return (
        <div className="Mars">
            <span className="textTitre">Mars</span>     
            <div className="imgMercuryContainer">
                <img className="imgMercury" src={mars} alt="mars"></img>
            </div> 
        </div>
    );
}

export default Mars;