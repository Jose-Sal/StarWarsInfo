import {Html, Sparkles,useTexture, useGLTF, OrbitControls, ScrollControls} from '@react-three/drei'
import { FilmOverlay } from './components/FilmOverlay'
// import { Overlay } from './components/Overlay'
import { Overlay } from './components/Overlay'
import { Canvas, useFrame } from '@react-three/fiber'


export default function FilmExperience()
{

    return<>
        <color args={['#030202']} attach ="background"/>
        {/* directional light to have a glare on the planet  */}
        <directionalLight position={[1,2,3]} intensity={1}/>
        <ScrollControls >
            <Sparkles size={6} scale={[200,200,400]}  speed={2} count={1000}/>
            {/* creates the object*/}
            <mesh  position={[-2,0,0]}>
                <boxGeometry />
                <meshStandardMaterial color={"red"}/>
                
                {/* onPointerOver={(e) => console.log('over')} */}
            </mesh>
            <mesh  position={[0,0,0]}>
                <boxGeometry />
                <meshStandardMaterial color={"green"}/>
            </mesh>
            <mesh  position={[2,0,0]}>
                <boxGeometry />
                <meshStandardMaterial color={"green"}/>
            </mesh>
            <mesh  position={[-2,-2,0]}>
                <boxGeometry />
                <meshStandardMaterial color={"green"}/>
            </mesh>
            <mesh  position={[0,-2,0]}>
                <boxGeometry />
                <meshStandardMaterial color={"green"}/>
            </mesh>
            <mesh  position={[2,-2,0]}>
                <boxGeometry />
                <meshStandardMaterial color={"green"}/>
                
            </mesh>
            {/* <Overlay /> */}
            {/* <Interface /> */}
            <OrbitControls />
        {/* <FilmOverlay /> */}
        </ScrollControls>
        
    </>
}