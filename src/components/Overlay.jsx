import { Scroll } from "@react-three/drei"
// shows the header withint the canvas
export const Overlay=()=>{
    return (
    <Scroll html >
        <header>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        
      </ul>
    </nav>
  </header>
    </Scroll>
    );
};
