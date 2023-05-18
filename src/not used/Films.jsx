import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
// import { TorusKnotGeometry } from 'three'
import {Html, Sparkles,useTexture, useGLTF, OrbitControls, ScrollControls} from '@react-three/drei'
// dont forget to add jsx right after the Experience import
import FilmExperience from './FilmsExperience.jsx'
// import Interface from './Interface.jsx'
import { FilmOverlay } from './FilmOverlay.jsx'
const root = ReactDOM.createRoot(document.querySelector('#root'))

// will be using hooks which are specific to r3f
root.render(
    /* canvas parent is the root fropm the html file  and changing the camera FOV and position*/
        <Canvas camera={{position: [0,1,5]}} >
           <FilmExperience />
           
        </Canvas>
        
)
