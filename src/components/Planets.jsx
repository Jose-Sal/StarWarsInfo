import React, { useLayoutEffect, useRef } from 'react'
import gsap from "gsap";
import { Text, Html, useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export const PLANET_HEIGHT=2.5;
export const NB_PLANETS=9;

export function Planets(props) {
  const { nodes, materials } = useGLTF('./models/alltogether.glb')
  const ref = useRef();
  const tl = useRef();
  const MeshRef= useRef()
  //curent scorll of the page
  const scroll = useScroll();
  const tatooine = useRef();
  const Bespin = useRef();
  const Dagobah = useRef();
  const YavinIV = useRef();
  const Alderaan = useRef();
  const Hoth = useRef();

  // this is how the planets will animate
  useFrame(()=>{
    tl.current.seek(scroll.offset * tl.current.duration());
    // MeshRef.current.rotation.x += .01;
    // MeshRef.current.rotation.y += .01;
  });
 
  useLayoutEffect(()=> {
    tl.current = gsap.timeline();
    // vertical animation
    tl.current.to(ref.current.position, {
        duration:5, y: -PLANET_HEIGHT * (NB_PLANETS-1),
    },
    0
    );
  }, []);

  return (
    <group {...props} dispose={null} ref={ref}>
      {/* each model object are in serperate group for the animation */}
      
      <Text position={[0,20,0]}>COMING SOON</Text>

      <mesh geometry={nodes.Endor.geometry} material={materials['Material.003']} position={[1, 0, 0]} ref={MeshRef}>
      <Text position={[-4,0,0]}>Endor</Text>
      </mesh>
      
      <group position={[1, 3, 0]} >
        <group ref={Bespin}>
          <mesh geometry={nodes.Bespin.geometry} material={materials['Material.001']}>
      <Text position={[-4,0,0]}>Bespin</Text>
          </mesh>
        </group>
      </group>

      <group position={[1, 6, 0]}>
        <group ref={Dagobah}>
          <mesh geometry={nodes.Dagobah.geometry} material={materials['Material.002']}> 
          <Text position={[-3.5,0,0]}>Dagobah</Text>
          </mesh>
        </group>
        
      </group>
      
      <group position={[1, 9, 0]}>
        <group ref={Hoth}>
          <mesh geometry={nodes.Hoth.geometry} material={materials['Material.004']}>
          <Text position={[-4,0,0]}>Hoth</Text>  
          </mesh>
        </group>
        
      </group>
      
      <group position={[1, 12, 0]}>
        <group ref={YavinIV}>
          <mesh geometry={nodes.YavinIV.geometry} material={materials['Material.005']}>
          <Text position={[-4,0,0]}>YavinIV</Text>
          </mesh>
        </group>
        
      </group>
      
      <group position={[1, 15, 0]}>
        <group ref={Alderaan}>
          <mesh geometry={nodes.Alderaan.geometry} material={materials['Material.001']}>
          <Text position={[-3.5,0,0]}>Alderaan</Text>
          </mesh>
        </group>
        
      </group>
      
      <group position={[1, 18, 0]} >
        <group ref={tatooine}>
          <mesh geometry={nodes.tatooine.geometry} material={materials['Material.007']}>
          <Text position={[-3.5,0,0]}>tatooine</Text>
          </mesh>
        </group>
        
      </group>
      
    </group>
  );
}

useGLTF.preload('/models/alltogether.glb')
