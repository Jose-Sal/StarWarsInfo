import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
const root = ReactDOM.createRoot(document.querySelector('#root'))

// we didnt have to create the scene
// scene is rendered on each frame
// didnt have to place a perspective camera (have a camera by default)
// didnt have to import the mesh
// will be using hooks which are specific to r3f
root.render(

    /* canvas parent is the root fropm the html file  and changing the camera FOV and position*/
        <Canvas camera={{fov:45}} >
            {/* creates the object*/}
            <Experience />
           
        </Canvas>

  
)