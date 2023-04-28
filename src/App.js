import logo from './logo.svg';
import './App.css';
import ThreePointViz from './3D_Components/ThreePointViz';
import HoverInfo from './HoverInfo';
import React from 'react';
import Overlay from './Overlay/Overlay';


function App() {
  const [counter, setCounter] = React.useState(0)
  const [info, setInfo] = React.useState(null)
  const [info_page, setInfoPage] = React.useState(null)
  const [hoveringInfo, setHoveringInfo] = React.useState(null)
  const [playing, setPlaying] = React.useState(false)
  const shouldHide = !(info_page || hoveringInfo);
  const [hovered, setHovered] = React.useState(null)

    return (
    <div className="App">
      <div className = "game_container">

        {
          /*

          */
        }

        <div className="vis-container">
          <ThreePointViz counter = {counter} 
          setInfo = {setInfo} setInfoPage= {setInfoPage} 
          setPlaying = {setPlaying} playing = {playing} 
          hovered = {hovered} setHovered = {setHovered}/>
        </div>
        <Overlay setPlaying = {setPlaying} setCounter = {setCounter} 
        counter = {counter} info = {info_page} setInfoPage = {setInfoPage} 
        setHoveringInfo = {setHoveringInfo}
        hovered = {hovered} setHovered = {setHovered}></Overlay>
      
      </div>


    </div>
  );
}

export default App;
