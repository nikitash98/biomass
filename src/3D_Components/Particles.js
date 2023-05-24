
import { useGLTF, PerspectiveCamera, useAnimations} from '@react-three/drei'
import { useFrame, useThree  } from "react-three-fiber";
import { useMemo, useEffect, useRef } from "react";
import { Vector3 } from "three";
import * as THREE from "three";

import data from "../slides.json"
import fragmentShader from "./basicfragmentShader"
import vertexShader from "./basicvertexShader"
import { BoxGeometry } from 'three';


const Particles = (props) => {

    useFrame(() => {
    })
    const points = useRef();
    const newref = useRef();
    const influence = useRef(0);
    const sphereFormation = [];
    const uv = new THREE.Vector2();
    const t = new THREE.Vector3();
    const radius = 3.0
    const slide_start = data[0]["animationTime"]
    const slide_length = data[1]["animationTime"] - slide_start
    const uniforms = useMemo(
        () => ({
          uTime: {
            value: 0.0,
          },
          endPosition: {
            value: new Vector3(0, -12, 0),
          }
        }),
        []
      );
      function mod(n, m) {
        return ((n % m) + m) % m;
      }
    useEffect(() => {
        var geometry = newref.current.geometry;
        const poses = geometry.attributes.position;
        geometry.morphAttributes.position = [];
        const uvs = geometry.attributes.uv;

        for (let i = 0; i < poses.count; i++) {
            uv.fromBufferAttribute(uvs, i);
            t.setFromSphericalCoords(
              radius,
              -Math.PI * (radius - uv.y),
              -(Math.PI / 2) * (uv.x - 0.5) * radius
            );
            sphereFormation.push(t.x, t.y + 12, t.z);

            //sphereFormation.push(t.x + 10.0, t.y + 12.4, t.z);
          }
        geometry.morphAttributes.position[0] = new THREE.Float32BufferAttribute(
        sphereFormation,
        3
        );

        newref.current.updateMorphTargets();

    })


    useFrame(({ clock, delta }) => {
        //influence.current = Math.sin(clock.getElapsedTime()) * 0.5 + 0.5;
        if (newref) {
            if (newref.current) {
              
                newref.current.morphTargetInfluences[0] = 1; //((props.curTime - slide_start)/slide_length);
                if(props.counter == 2) {
                  newref.current.material.uniforms.uTime.value = 0.99
                } else {
                  newref.current.material.uniforms.uTime.value += clock.getElapsedTime()/800//clock.getDelta() * 15//((props.curTime - slide_start)/slide_length);

                }
                  //newref.current.material.uniforms.uTime.value = 0.0
            }
        }
        newref.current.rotation.y += 0.01

    });
    return(
        <group>


            <points ref={newref} position={[.7, 13.45, 0]} frustumCulled = {false}>
                <sphereBufferGeometry args={[2.7, 70, 70]} />
                <shaderMaterial
                    depthWrite={true}
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}

                />

                {/*
                <pointsMaterial color="#FF0000" size={0.1} sizeAttenuation />

                
                */}
                {/*
                
            

    */}

            </points>

        </group>
    )
}
export default Particles;