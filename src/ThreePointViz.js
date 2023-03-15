import * as React from 'react';
import {Canvas} from 'react-three-fiber';
import { useLoader, useFrame  } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
//import Model from './Model';
import Anim from './Biomass_animation';
const ThreePointViz = (props) => {
    let WIDTH = window.innerWidth;
    let HEIGHT = window.innerHeight;

    //console.log(playing)
    return (
        <Canvas camera={{ fov: 50, position: [2, 5, -17], rotation: [0, 0,0]}}>
            <ambientLight color="#ffffff" intensity={0.02} />
            <hemisphereLight
                color="#ffffff"
                skyColor="#ffffbb"
                groundColor="#080820"
                intensity={1.0}
            />
            <Anim playing = {props.playing} counter = {props.counter}/>
        </Canvas>
    )
}

export default ThreePointViz;