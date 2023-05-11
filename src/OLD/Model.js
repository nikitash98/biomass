import { useLoader, useFrame } from 'react-three-fiber';
import { 
    GLTFLoader 
} from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef, useState } from 'react'

import * as THREE from 'three'
const afunction = () => {
}
const Model = props => {
    const model = useLoader(
        GLTFLoader,
        props.path
    )
    
    const handleHover = (e) => {
        e.stopPropagation()
        setHovered(true)

    }
      
      const handleUnhover = () => {
        setHovered(false)
    }


    const [hovered, setHovered] = useState(false)

    // Here's the animation part
    // ************************* 
    let mixer
    if (model.animations.length) {
        mixer = new THREE.AnimationMixer(model.scene);
        model.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.play();
        });
    }

    useFrame((state, delta) => {

        if(props.playing) {
            mixer?.update(delta)
        }
    })
    // *************************

    model.scene.traverse(child => {
        if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
            child.material.side = THREE.FrontSide
            child.onPointerOver = {afunction}
            child.onPointerOut = {handleUnhover}
        }
    })



    return (
        <primitive 
            object={model.scene}
            scale={props.scale}
            onPointerOver = {handleHover}
            onPointerOut = {handleUnhover}

             />
    )
}


export default Model;


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