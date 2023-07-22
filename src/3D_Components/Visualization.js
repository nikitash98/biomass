import * as React from 'react';
import {Canvas, useFrame} from 'react-three-fiber';
import { useRef } from "react";

import ProprietaryCamera from './ProprietaryCamera';
//import Model from './Model';
import { Suspense, useEffect, useState } from 'react';
import Animation from './Animation';
import { Html, Box, Plane, Float, SoftShadows, CameraControls, OrbitControls, PerspectiveCamera, Mask, useMask } from '@react-three/drei';
import { Vector3 } from "three";
import { Loader } from '@react-three/drei';
import { Selection, Select, EffectComposer, Outline} from '@react-three/postprocessing'
import { BlendFunction,KernelSize } from 'postprocessing';
import { Stats } from '@react-three/drei';
import { Globe } from '../Items/Globe';
import Particles from './Particles';
import { Perf } from 'r3f-perf'
import { ContactShadows } from '@react-three/drei';
import { TestCamera } from './TestCamera';
import * as THREE from "three";

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
        
        <Canvas shadows
          gl={{ gammaInput: false, gammaOutput: false }}
          
        > 
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
                    hiddenEdgeColor={0x287ed4}  
                    visibleEdgeColor={0x287ed4}
                    blur={false} // whether the outline should be blurred
                    xRay={true} // indicates whether X-Ray outlines are enabled
                    kernelSize={KernelSize.SMALL} // blur kernel size
                /> 
        </EffectComposer>        
        {/*
        <fog attach="fog" color= {"white"} near={5} far={20}/>
        */}

        <Suspense fallback={
            null
            }>

            
            { [0, 1, 2, 3].includes(props.counter) && (
                <group>
                    <Particles 
                    previousCounter = {props.previousCounter}
                    counter = {props.counter}
                    animationTime = {props.animationTime}
                    />
                </group>
            )}
            {/*
            <Html position = {[4, 4, -8]}
            rotation = {[0, Math.PI/6, 0]}
            transform>
                    <div className = "yearCounter" >

                        <h1>{(Math.max(Math.min(1900 + Math.round(123 * props.yearPercentage), 2023),1900)).toString()}</h1>
                    </div>
            </Html>
            */}

            { props.counter < 2 && (
                    <Globe counter = {props.counter} 
                    setCounter = {props.setCounter}
                    setScrubbing = {props.setScrubbing}
                    />
            )}
            <group position={[0, 0, 0]}>
                <Animation 
                setHovered = {props.setHovered} 
                hovered = {props.hovered} 
                setInfoPage = {props.setInfoPage} 
                setCounter = {props.setCounter} counter = {props.counter}
                setSelectionSet = {setSelectionSet}
                setYearPercentage = {props.setYearPercentage} 
                scrubbing = {props.scrubbing}
                setScrubbing = {props.setScrubbing}
                previousCounter = {props.previousCounter}
                animationTime = {props.animationTime}
                setcounterHit = {props.setcounterHit}
                />
            </group>
        </Suspense>

        {/*}
        <OrbitControls/>

            */}
        {/*

        */}

<directionalLight 
        position={[4, 5, 5]} 
        intensity={1} 
        shadow-mapSize={2048} 
        shadow-bias={-0.001}
        shadow-radius = {1000.0}>
            
        <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20, 0.1, 60]} />
        </directionalLight>
        {/*
        <directionalLight
        position={[0, 3, 5]} 
        intensity={0.3} 
        >
        </directionalLight>
        */}

        <ambientLight intensity={0.3}/>
    

        <Plane rotation={[ -Math.PI/2,0, -Math.PI/4]} position={[0, 1, 0]} args={[1000, 1000]} >
            <meshBasicMaterial color="#ffffff"  toneMapped={false} />
        </Plane>

        <Plane  rotation={[0,0, -Math.PI / 2]} position={[0, 0, -80]} args={[1000, 1000]}>
            <meshBasicMaterial color="#ffffff" toneMapped={false}  />
        </Plane>

        </Canvas>
        <Loader />

		</>
    )

}




export default ThreePointViz;