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
import { Suspense, useEffect, useState } from 'react';
import Anim from './Biomass_animation';
import { Html, Box, Plane, Float, SoftShadows, CameraControls, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Vector3 } from "three";


import { Selection, Select, EffectComposer, Outline} from '@react-three/postprocessing'
import { BlendFunction,KernelSize } from 'postprocessing';
import Particles from './Particles';

import data from "../slides.json"

const ThreePointViz = (props) => {
    let WIDTH = window.innerWidth;
    let HEIGHT = window.innerHeight;
    const { enabled, ...config } = {
        enabled: true,
        size: 50,
        focus: 0,
        samples:2
    }
    const to_vector = (a) => {
    return new Vector3(a[0], a[1], a[2])
    }

    const cameraControlRef = useRef()
    
    const cameraRef = useRef();
    const meshRef1 = useRef()

    const [selectionSet, setSelectionSet] = useState([])
    useEffect(() => {
        if (cameraControlRef.current) {

        }
        /*
        <OrbitControls/>
        */

    })

    return (
        <>
        <Canvas shadows> 
        <directionalLight 
        position={[2, 3, 8]} 
        castShadow intensity={1} 
        shadow-mapSize={2048} 
        shadow-bias={-0.001}>
        <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20, 0.1, 60]} />

        </directionalLight>

            <EffectComposer enabled={true} autoClear={false}>
                
                <Outline blendFunction ={BlendFunction.ADD} hiddenEdgeColor="#FF0000" edgeStrength={100}  />
                <Outline
                    selection={selectionSet} // selection of objects that will be outlined
                    selectionLayer={10} // selection layer
                    blendFunction={BlendFunction.ALPHA} // set this to BlendFunction.ALPHA for dark outlines
                    patternTexture={null} // a pattern texture
                    edgeStrength={10.5} // the edge strength
                    pulseSpeed={0.0} // a pulse speed. A value of zero disables the pulse effect
                    hiddenEdgeColor={0xd6d029}  
                    visibleEdgeColor={0xd6d029}
                    //visibleEdgeColor={0xff0000} // the color of visible edges
                    //hiddenEdgeColor={0x22090a} // the color of hidden edges
                    blur={true} // whether the outline should be blurred
                    xRay={true} // indicates whether X-Ray outlines are enabled
                    kernelSize={KernelSize.SMALL} // blur kernel size

                />
            </EffectComposer>
            <group>
                <mesh ref = {meshRef1}>
                <boxGeometry />
                <meshStandardMaterial color="#FFFFFF" />
                </mesh>
            </group>
            {/*
        <Selection>
        </Selection>

            <Select enabled>

            </Select>
            */}
            
                {/* 
                <Selection>
                    <EffectComposer enabled = {enabled} multisampling={8} autoClear={false}>
                        <Outline blur blendFunction ={BlendFunction.ALPHA} hiddenEdgeColor={0xd6d029}  visibleEdgeColor={0xd6d029} edgeStrength={50} width={2000} />
                    </EffectComposer>
                    <Select enabled = {true}>
                        <mesh>
                            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                            <meshStandardMaterial attach="material" transparent opacity={0.5} />
                        </mesh>
                    </Select>

                    
                </Selection>
                */}
                    <Suspense fallback={
                        <mesh>
                            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                            <meshStandardMaterial attach="material" transparent opacity={0.5} />
                        </mesh>}>
                        {/*
                        <OrbitControls/>
                <SoftShadows size = {50} focus = {0} samples = {10}/>

                        */}
                        <ProprietaryCamera counter = {props.counter}/>

                        <Anim counter = {props.counter} setInfo = {props.setInfo} 
                        setInfoPage = {props.setInfoPage}
                        setPlaying = {props.setPlaying} playing = {props.playing} 
                        camRef = {cameraRef} hovered = {props.hovered}
                        setHovered = {props.setHovered} setSelectionSet = {setSelectionSet}/>
                    </Suspense>
                <fog attach="fog" color="#FFFFFF" near={50} far={60} />
 

                <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 1, 0]} args={[1000, 1000]}>
                <meshStandardMaterial attach="material" color="white" />
            </Plane>
            <Plane  rotation={[0,0, -Math.PI / 2]} position={[0, 0, -40]} args={[1000, 1000]}>
                <meshStandardMaterial attach="material" color="white" />
            </Plane>
			</Canvas>

		</>
    )


    return (
        <>
        <Canvas  shadows>
        {/*<Canvas camera={{ fov: 50, position: [2, 5, -20], } shadows > 
        camera={{ position: [2, 5, 5], fov: 50, rotation: [0, 0,0]}} 
            <ProprietaryCamera counter = {props.counter} camRef = {camRef}/>
            <ProprietaryCamera counter = {props.counter} camRef = {camRef}/>
                <PerspectiveCamera ref={cameraRef} position={[0, 0, 2]} />
        <ambientLight intensity={0.1}/>

      <OrbitControls/>

        */}
            <CameraControls ref = {cameraControlRef}  enabled = {false}/>

            <directionalLight position={[2, 3, 8]} castShadow intensity={1} shadow-mapSize={2048} shadow-bias={-0.001}>
      </directionalLight>

      {/* 
            <SoftShadows size = {50} focus = {0} samples = {10}/>

      */}
            <fog attach="fog" color="#FFFFFF" near={50} far={60} />
    

<pointLight position={[10, 10, 0]} intensity={.3}  />
    
            <Selection>
            <EffectComposer multisampling={8} autoClear={false}>
            <Outline blur blendFunction ={BlendFunction.ALPHA} hiddenEdgeColor={0xd6d029}  visibleEdgeColor={0xd6d029} edgeStrength={50} width={2000} />
            </EffectComposer>
            <group position={[0, 0, 0]}>
            {props.playing ? null : <AnimOverlay counter = {props.counter} playing = {props.playing}></AnimOverlay> 
            }
            <Suspense fallback={    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>}>
            {/*
            
            */}
                <Anim counter = {props.counter} setInfo = {props.setInfo} 
                setInfoPage = {props.setInfoPage}
                setPlaying = {props.setPlaying} playing = {props.playing} 
                camRef = {cameraRef} hovered = {props.hovered}
                setHovered = {props.setHovered}/>
            </Suspense>

            <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 1, 0]} args={[1000, 1000]}>
                <meshStandardMaterial attach="material" color="white" />
            </Plane>
            <Plane  rotation={[0,0, -Math.PI / 2]} position={[0, 0, -40]} args={[1000, 1000]}>
                <meshStandardMaterial attach="material" color="white" />
            </Plane>
            </group>
            </Selection>


        </Canvas>
        < div style={{ position: 'absolute', top: '0' }}>
        <button
            type="button"
            onClick={() => {
                cameraControlRef.current?.rotate(Math.PI, 0, true);
            }}
        >
            rotate theta 45deg
        </button>
        <button
            type="button"
            onClick={() => {
                cameraControlRef.current?.reset(true);
            }}
        >
            reset
        </button>
    </div>
    </>
    )
}




export default ThreePointViz;