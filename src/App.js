import './App.css';
import NavBar from "./components/NavBar";
import VideoPlayer from "./components/VideoPlayer";
import Map from "./components/Map";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const App = () => {
  return(
      <>
          <BrowserRouter>
              <NavBar/>
              <Routes>
                  <Route exact path="/" element={<VideoPlayer/>}/>
                  <Route exact path="/google-map" element={<Map/>}/>
                  <Route path="*" element={ <p>"404 NOT FOUND"</p>} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App;
