import * as React from 'react';
import {Canvas, useFrame} from 'react-three-fiber';
import { useRef } from "react";

import ProprietaryCamera from './ProprietaryCamera';
//import Model from './Model';
import { Suspense, useEffect, useState } from 'react';
import Animation from './Animation';
import { Html, Box, Plane, Float, SoftShadows, CameraControls, OrbitControls, PerspectiveCamera, Mask, useMask } from '@react-three/drei';
import { Vector3 } from "three";

import Fog from './Fog';
import { Selection, Select, EffectComposer, Outline} from '@react-three/postprocessing'
import { BlendFunction,KernelSize } from 'postprocessing';
import { Stats } from '@react-three/drei';
import { Globe } from '../Items/Globe';
import data from "../slides.json"
import Particles from './Particles';
import { Perf } from 'r3f-perf'
import { ContactShadows } from '@react-three/drei';

const ThreePointViz = (props) => {
    let WIDTH = window.innerWidth;
    let HEIGHT = window.innerHeight;
    const stencil = useMask(1, true)

    const composerRef = useRef()


    
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

    const [clickableSelectionSet, setClickableSelectionSet] = useState([])
    const debug = false

    return (
        <>
  
        <Canvas shadows> 
        {debug && (
            <>
            <Perf
            minimal={false}
            matrixUpdate
            deepAnalyze
            overClock
                />
            <Stats/>
            </>
        )}
        

        {/*
        <ContactShadows opacity={1} scale={50} blur={1} far={10} resolution={256} color="#000000" />
        */}

        <EffectComposer ref = {composerRef} enabled={true} autoClear={false} stencilBuffer = {true}>
                <Outline
                    selection={selectionSet} // selection of objects that will be outlined
                    selectionLayer={10} // selection layer
                    blendFunction={BlendFunction.ALPHA} // set this to BlendFunction.ALPHA for dark outlines
                    patternTexture={null} // a pattern texture
                    edgeStrength={8.5} // the edge strength
                    pulseSpeed={0.0} // a pulse speed. A value of zero disables the pulse effect
                    hiddenEdgeColor={0x5a9ced}  
                    visibleEdgeColor={0x5a9ced}
                    blur={false} // whether the outline should be blurred
                    xRay={true} // indicates whether X-Ray outlines are enabled
                    kernelSize={KernelSize.SMALL} // blur kernel size
                /> 
            </EffectComposer>        
            <Fog counter = {props.counter}/>
            <ProprietaryCamera counter = {props.counter} />
     

            <Suspense fallback={
                <mesh>
                    <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    <meshStandardMaterial attach="material" transparent opacity={0.5} />
                </mesh>
                }>

                {/*
                    <OrbitControls/>

                */}

                
                { [1,2].includes(props.counter) && (
                    <group>
                        <Particles curTime = {0} counter = {props.counter}/>
                    </group>
                )}

                {   props.counter < 2 && (
                        <Globe counter = {props.counter} setCounter = {props.setCounter}/>

                )

                }
                {/*
                */}
                <group position={[0, 0, 0]}>
                    <Animation setCounter = {props.setCounter} animation_position = {props.animation_position}
                    setHovered = {props.setHovered} setInfoPage = {props.setInfoPage} 
                    hovered = {props.hovered} counter = {props.counter}
                    setSelectionSet = {setSelectionSet}
                    setYearPercentage = {props.setYearPercentage} 
                    />
                </group>
                




            </Suspense>

            {/*
            <directionalLight 
            position={[6, 3, 5]} 
                intensity={0.8} 
            shadow-mapSize={2048} 
            shadow-bias={-0.001}
            shadow-radius = {1000.0}>
                
            <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20, 0.1, 60]} />
            </directionalLight>
            <directionalLight
            position={[0, 3, 5]} 
            intensity={0.3} 
            >
            </directionalLight>
            <pointLight position={[-10, 12, 12]} intensity={0}  />
            <pointLight position={[-10, 12, 12]} intensity={4}  />

            */}

            <directionalLight 
            position={[6, 3, 5]} 
            intensity={0.8} 
            shadow-mapSize={2048} 
            shadow-bias={-0.001}
            shadow-radius = {1000.0}>
                
            <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20, 0.1, 60]} />
            </directionalLight>

            <directionalLight
            position={[0, 3, 5]} 
            intensity={0.3} 
            >
            </directionalLight>
            <ambientLight intensity={0.1}/>



            <Plane rotation={[ -Math.PI/2,0, -Math.PI/4]} position={[0, 1, 0]} args={[1000, 1000]} >
                <meshBasicMaterial color="#ffffff" />
            </Plane>

            <Plane  rotation={[0,0, -Math.PI / 2]} position={[0, 0, -80]} args={[1000, 1000]}>
                <meshBasicMaterial color="#ffffff" />
            </Plane>

            {/*
            <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 1, 0]} args={[1000, 1000]}>
                <meshStandardMaterial attach="material" color="white" />
            </Plane>
            <Plane  rotation={[0,0, -Math.PI / 2]} position={[0, 0, -80]} args={[1000, 1000]}>
                <meshStandardMaterial attach="material" color="white" />

            </Plane>
                <meshStandardMaterial attach="material" color={"white"} />

            */}

       {/* 

            <EffectComposer ref = {composerRef} enabled={true} autoClear={false} stencilBuffer = {true}>
                <Outline
                    selection={selectionSet} // selection of objects that will be outlined
                    selectionLayer={10} // selection layer
                    blendFunction={BlendFunction.ALPHA} // set this to BlendFunction.ALPHA for dark outlines
                    patternTexture={null} // a pattern texture
                    edgeStrength={8.5} // the edge strength
                    pulseSpeed={0.0} // a pulse speed. A value of zero disables the pulse effect
                    hiddenEdgeColor={0x5a9ced}  
                    visibleEdgeColor={0x5a9ced}
                    blur={false} // whether the outline should be blurred
                    xRay={true} // indicates whether X-Ray outlines are enabled
                    kernelSize={KernelSize.SMALL} // blur kernel size
                /> 

                <Outline
                    selection={clickableSelectionSet} // selection of objects that will be outlined
                    selectionLayer={16} // selection layer
                    blendFunction={BlendFunction.ALPHA} // set this to BlendFunction.ALPHA for dark outlines
                    patternTexture={null} // a pattern texture
                    edgeStrength={100.5} // the edge strength
                    pulseSpeed={1.0} // a pulse speed. A value of zero disables the pulse effect
                    hiddenEdgeColor={0x5a9ced}  
                    visibleEdgeColor={0x5a9ced}
                    blur={true} // whether the outline should be blurred
                    xRay={true} // indicates whether X-Ray outlines are enabled
                    kernelSize={KernelSize.MEDIUM} // blur kernel size
                /> 
                
            </EffectComposer>        
            */}

            {/*
            <group>
                <mesh ref = {meshRef1}>
                <boxGeometry />
                <meshStandardMaterial color="#FFFFFF" />
                </mesh>
            </group>
            */}





                

                {/*
                    <SoftShadows size = {50} focus = {0} samples = {3}/>



                <Anim counter = {props.counter} setInfo = {props.setInfo} 
                setInfoPage = {props.setInfoPage}
                setPlaying = {props.setPlaying} playing = {props.playing} 
                camRef = {cameraRef} hovered = {props.hovered}
                setHovered = {props.setHovered} setSelectionSet = {setSelectionSet}
                setCounter = {props.setCounter} setYearPercentage = {props.setYearPercentage}
                yearPercentage = {props.yearPercentage} 
                setClickableSelectionSet = {setClickableSelectionSet}
                />

                */}
        </Canvas>

		</>
    )

}




export default ThreePointViz;