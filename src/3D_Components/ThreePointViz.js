import * as React from 'react';
import {Canvas} from 'react-three-fiber';
import { useRef } from "react";

import { useLoader, useFrame  } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import ProprietaryCamera from './ProprietaryCamera';
import AnimOverlay from './AnimOverlay';
import * as THREE from 'three'
//import Model from './Model';
import Anim from './Biomass_animation';
import { Html, Box, Plane, Float, SoftShadows, CameraControls } from '@react-three/drei';


import { Selection, Select, EffectComposer, Outline} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing';
const ThreePointViz = (props) => {
    let WIDTH = window.innerWidth;
    let HEIGHT = window.innerHeight;
    const camRef = useRef()
    const { enabled, ...config } = {
        enabled: true,
        size: 50,
        focus: 0,
        samples:2
      }
    return (
        <Canvas  camera={{ position: [2, 5, 5], fov: 50, rotation: [0, 0,0]}} shadows>
        {/*<Canvas camera={{ fov: 50, position: [2, 5, -20], } shadows > */}

            <SoftShadows size = {50} focus = {0} samples = {10}/>
            <directionalLight position={[2, 3, 8]} castShadow intensity={1} shadow-mapSize={2048} shadow-bias={-0.001}>
        <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20, 0.1, 60]} />
      </directionalLight>
      <ambientLight intensity={0.1}/>
      <ProprietaryCamera counter = {props.counter} camRef = {camRef}/>

            <fog attach="fog" color="#FFFFFF" near={50} far={60} />
            {/*
      <CameraControls makeDefault/>

            <pointLight position={[-8, 20, 10]} intensity={.8} castShadow />

            <hemisphereLight
                color="#ffffff"
                skyColor="#ffffbb"
                groundColor="#080820"
                intensity={0.5}
            />

            <group>
                <Box castShadow receiveShadow position={[2, 5, -17]}>
                    <meshStandardMaterial attach="material" color="white" />
                </Box>
            </group>
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>
            <pointLight position={[20, 5, 0]} intensity={.3} castShadow />

                            */}

<pointLight position={[10, 10, 0]} intensity={.3}  />

            <Selection>
            <EffectComposer multisampling={8} autoClear={false}>
            <Outline blur blendFunction ={BlendFunction.ALPHA} hiddenEdgeColor={0xd6d029}  visibleEdgeColor={0xd6d029} edgeStrength={50} width={2000} />
            </EffectComposer>
            <group position={[0, 0, 0]}>
            {props.playing ? null : <AnimOverlay counter = {props.counter} playing = {props.playing}></AnimOverlay> 
            }
            

            
            <Anim counter = {props.counter} setInfo = {props.setInfo} 
            setInfoPage = {props.setInfoPage}
             setPlaying = {props.setPlaying} playing = {props.playing} 
             camRef = {camRef} hovered = {props.hovered}
             setHovered = {props.setHovered}/>
            <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 1, 0]} args={[1000, 1000]}>
                <meshStandardMaterial attach="material" color="white" />
            </Plane>
            <Plane  rotation={[0,0, -Math.PI / 2]} position={[0, 0, -40]} args={[1000, 1000]}>
                <meshStandardMaterial attach="material" color="white" />
            </Plane>
            </group>
            </Selection>


        </Canvas>
    )
}




export default ThreePointViz;