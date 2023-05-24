import * as React from 'react';
import {Canvas} from 'react-three-fiber';
import { useRef } from "react";

import ProprietaryCamera from './ProprietaryCamera';
//import Model from './Model';
import { Suspense, useEffect, useState } from 'react';
import Anim from './Biomass_animation';
import { Html, Box, Plane, Float, SoftShadows, CameraControls, OrbitControls, PerspectiveCamera, Mask, useMask } from '@react-three/drei';
import { Vector3 } from "three";

import Fog from './Fog';
import { Selection, Select, EffectComposer, Outline} from '@react-three/postprocessing'
import { BlendFunction,KernelSize } from 'postprocessing';

import data from "../slides.json"

const ThreePointViz = (props) => {
    let WIDTH = window.innerWidth;
    let HEIGHT = window.innerHeight;
    const stencil = useMask(1, false)

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
    



    useEffect(() => {
        if (cameraControlRef.current) {

        }
        /*
        <OrbitControls/>
        */
       console.log(composerRef.current)
       if(composerRef.current) {
        composerRef.current.renderer.autoClearColor = false

       }
    })


    if(props.counter > 20) {
    }
    return (
        <>
        <Canvas shadows > 
        <ambientLight intensity={0.1}/>
        <pointLight position={[-10, 12, 12]} intensity={.4}  />
        <Fog counter = {props.counter}/>

            <EffectComposer ref = {composerRef} enabled={true} autoClear={true} stencilBuffer = {true}>
                
                <Outline blendFunction ={BlendFunction.ADD} hiddenEdgeColor="#FF0000" edgeStrength={100}  />
                <Outline
                    selection={selectionSet} // selection of objects that will be outlined
                    selectionLayer={10} // selection layer
                    blendFunction={BlendFunction.ALPHA} // set this to BlendFunction.ALPHA for dark outlines
                    patternTexture={null} // a pattern texture
                    edgeStrength={8.5} // the edge strength
                    pulseSpeed={0.0} // a pulse speed. A value of zero disables the pulse effect
                    hiddenEdgeColor={0x5a9ced}  
                    visibleEdgeColor={0x5a9ced}
                    //visibleEdgeColor={0xff0000} // the color of visible edges
                    //hiddenEdgeColor={0x22090a} // the color of hidden edges
                    blur={false} // whether the outline should be blurred
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
                        <Mask id={1} position={[0, 4,4]}>
                            <circleGeometry args={[3, 64]} />
                        </Mask>

                        <mesh position={[0.75, 0, 0]} >
                            <sphereGeometry args={[2, 64, 64]} />
                            <meshStandardMaterial {...stencil} color={0xffffff} />
                        </mesh>
                        {/*
                        <OrbitControls/>
                <SoftShadows size = {50} focus = {0} samples = {3}/>
                        <OrbitControls/>

                        <OrbitControls/>
                        */}

                        <ProprietaryCamera counter = {props.counter}/>

                        <Anim counter = {props.counter} setInfo = {props.setInfo} 
                        setInfoPage = {props.setInfoPage}
                        setPlaying = {props.setPlaying} playing = {props.playing} 
                        camRef = {cameraRef} hovered = {props.hovered}
                        setHovered = {props.setHovered} setSelectionSet = {setSelectionSet}
                        setCounter = {props.setCounter}/>
                    </Suspense>


                    <directionalLight 
                    position={[2, 3, 5]} 
                        intensity={0.8} 
                    shadow-mapSize={2048} 
                    shadow-bias={-0.001}
                    shadow-radius = {1000.0}>
                        
                        <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20, 0.1, 60]} />

                    </directionalLight>
            <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 1, 0]} args={[1000, 1000]}>
                <meshStandardMaterial attach="material" color="white" />
            </Plane>
            <Plane  rotation={[0,0, -Math.PI / 2]} position={[0, 0, -80]} args={[1000, 1000]}>
                <meshStandardMaterial attach="material" color="white" />
            </Plane>
			</Canvas>

		</>
    )

}




export default ThreePointViz;