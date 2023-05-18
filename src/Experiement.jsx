import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {Sparkles} from '@react-three/drei'
import { Mesh } from 'three'
import { useStore } from './store'

export default function App() {
  return (
    <Canvas eventSource={document.getElementById('Filmroot')} eventPrefix="client" camera={{ position: [1, 0, 4], fov:60 }}>
        <color args={['#030202']} attach ="background"/>
      {/* <ambientLight intensity={0.7} /> */}
      <directionalLight position={[1,2,3]} intensity={1}/>
        {/* <ambientLight intensity={0.5} /> */}
        <ambientLight intensity={1} />
        <Sparkles size={6} scale={[200,200,400]}  speed={2} count={1000}/>

      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
      <Selector>
        <BoxFilm position={[-1,0,0]}/>
      </Selector>
      
     </Canvas>
  )
}

function Selector({ children }) {
  const store = useStore()

  return (
    <>

      <group
        // onPointerOver={() => (store.open = true)}
        // onPointerEnter={() => (store.open = true)}

        // onPointerOut={() => (store.open = false)}
        onPointerDown={() => (store.open = true)}
        // onPointerUp={() => (store.open = false)}
        >
        {children}
      </group>
    </>
  )
}

function BoxFilm(props) {
  const ref = useRef()
  const MeshRef = useRef<Mesh>(null)

  useFrame(() =>{
    if(!ref.current){
      return;
    }
    ref.current.rotation.x += .01;
    ref.current.rotation.y += .01;
  })
  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
        {/* <meshBasicMaterial attach="material" map={'./Images/RevengeoftheSith.jpg'} /> */}
      </mesh>

    </group>
  )
}