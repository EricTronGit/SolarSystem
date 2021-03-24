import './App.css';
import { Parallax } from "react-parallax";

import Soleil from './pages/soleil.jsx';
import Mercure from './pages/mercure.jsx';
import Venus from './pages/venus.jsx';
import Terre from './pages/terre.jsx';
import Mars from './pages/mars.jsx';
import Asteroid from './pages/asteroid.jsx';
import Jupiter from './pages/jupiter.jsx';
import Saturne from './pages/saturne.jsx';
import Uranus from './pages/uranus.jsx';
import Neptune from './pages/neptune.jsx';

import background from "./assets/backgroundG.png";


function App() {

  return (
    <div className="App">         
      <Parallax bgImage={background} strength={4000}>
        <div className="backgroundStyle">

            <Parallax strength={-400}> 
              <Soleil></Soleil>   
            </Parallax>

            <Parallax strength={-400}>
              <Mercure></Mercure>
            </Parallax>

            <Parallax strength={-400}>
              <Venus></Venus>
            </Parallax>

            <Parallax strength={-400}>
              <Terre></Terre>
            </Parallax>

            <Parallax strength={-400}>
              <Mars></Mars>
            </Parallax>

            <Parallax strength={-400}>
              <Asteroid></Asteroid>
            </Parallax>

            <Parallax strength={-400}>
              <Jupiter></Jupiter>
            </Parallax>

            <Parallax strength={-400}>
              <Saturne></Saturne>
            </Parallax>

            <Parallax strength={-400}>
              <Uranus></Uranus>
            </Parallax>

            <Parallax strength={-400}>
              <Neptune></Neptune>
            </Parallax>

        </div>

      </Parallax>

    </div>
  );
}

export default App;
