import NavBar from "./components/NavBar";
import VideoPlayer from "./components/VideoPlayer";
import MapComponent from "./components/MapComponent";
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';

const App = () => {
  return(
      <>
          <HashRouter basename="/">
              <NavBar/>
              <Routes>
                  <Route exact path="/" element={<VideoPlayer/>}/>
                  <Route exact path="/calculate-map-distance" element={<MapComponent/>}/>
                  <Route path="*" element={ <p>"404 NOT FOUND"</p>} />
              </Routes>
          </HashRouter>
      </>
  )
}

export default App;
