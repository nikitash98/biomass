import logo from './logo.svg';
import './App.css';
import ThreePointViz from './ThreePointViz';
import React from 'react';
function sayHello() {
  alert('You clicked me!');
}
/*


*/

function App() {
  const [playing, setPlaying] = React.useState(true);
  const [counter, setCounter] = React.useState(0)

  return (
    <div className="App">

      <div class = "game_container">
        <div className="vis-container">
          <ThreePointViz playing = {playing} counter = {counter}/>
        </div>
      </div>
      <button type="button" onClick={()=>setCounter(counter - 1)}>RIGHT!</button>

      <button type="button" onClick={()=>setCounter(counter + 1)}>LEFT!</button>

    </div>
  );
}

export default App;
