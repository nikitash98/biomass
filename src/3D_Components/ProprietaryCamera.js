
import { useGLTF, PerspectiveCamera, useAnimations, CameraControls} from '@react-three/drei'
import { useFrame, useThree  } from "react-three-fiber";
import { useRef, useEffect } from "react";
import { Vector3 } from "three";
import data from "../slides.json"
const ProprietaryCamera = (props) => {
    const { viewport } = useThree();
    const center = [window.innerWidth / 2, window.innerHeight / 2];
    let original_position = [8.58 , 3.47, -14.29+30]
    const to_vector = (a) => {
      return new Vector3(a[0], a[1], a[2])
    }

    let new_original_position = useRef(to_vector([7.433169999999995, 5.7117199999999935,24.999999999999822]))
    let current_look_position = useRef(to_vector(data[0]["lookPosition"]))
    let move_position = new Vector3(1.43317, 5.71172, -100)
    const cameraControlRef = useRef()
    const cameraRef = useRef();


    useEffect( () =>{
      /*
      new_original_position.current.x = 7.433169999999995
      new_original_position.current.y = 5.7117199999999935
      new_original_position.current.z = 24.999999999999822
  
      props.camRef.current.position.x = data[props.counter]["cameraPosition"][0]
      props.camRef.current.position.y = data[props.counter]["cameraPosition"][1]
      props.camRef.current.position.z = data[props.counter]["cameraPosition"][2]
      
      props.camRef.current.lookAt(to_vector(data[props.counter]["lookPosition"]))
      */
      //cameraControlRef.current?.setLookAt(to_vector(data[0]["lookPosition"]), true)

      //cameraControlRef.current?.setPosition(to_vector(data[0]["cameraPosition"]), true)

    }, [])


    const anim_counter = (a) => {
        if(a < 6) {
          return 0
        } else if(a < 7) {
          return 1
        } else {
          return 2
        }
      }
      useEffect(()=> {

        cameraControlRef.current.enableDamping = false;
        cameraControlRef.current.enableZoom = false;
        cameraControlRef.current?.disconnect()
        cameraControlRef.current?.setLookAt(data[props.counter]["cameraPosition"][0], data[props.counter]["cameraPosition"][1], data[props.counter]["cameraPosition"][2], 
        data[props.counter]["lookPosition"][0], data[props.counter]["lookPosition"][1], data[props.counter]["lookPosition"][2], true)

      })

    //const move_positions = [[8.58 , 3.47, -14.29], [5.43317, 3.71172, -18.6191], [2.45043, 3.56978, -20.8221],
    //[-0.43953, 3.9133, -22.1971], [-2.85272,  6.07559, -18.8039], [-4.39534,  10.5783, -9.2042], [8.24484, 4.49448, -5.64446], 
    //[3.12129,  4.96037, 7.85332], [1.32432,  9.22483, 16.4789]]
    //const look_position = [[4.92, 1.77, -25.39], [1.76707, 1.93259, -28.1525], [-1.29286,  2.05505, -30.9742], [-4.71249, 2.25276,  -34.2096],
    //[-10.3424, 3.27945, -39.1827], [-18.209, 4.92369, -47.8514 ], [0.395303, 2.19138, -31.0732], [2.13014, 6.3298, -28.4507], [0.724402, 4.23216,  -26.3552]]
    const move_positions = [[7.43317, 4.71172, 30], [1, 8, 38], [-2.43317, 5.71172, 43]]
    let move_vectors = move_positions.map(x => new Vector3(x[0], x[1], x[2]))
    //const move_positions = [new Vector3(5.43317, 3.71172, -18.6191), new Vector3(1.43317, 5.71172, -100), new Vector3(5.43317, 3.71172, -18.6191)]
    //const look_positions = [[2.29286,  4.65505, -30.9742 + 30], [0.29286,  5.05505, -30.9742  + 30], [0.29286,  5.05505, -30.9742  + 0]]
    const look_positions = [[1.8,  4.65505, 0], [0.29286,  7.05505, 0], [0.29286,  6.05505, 0]]
    let cont = anim_counter(props.counter) % 3 
    useFrame(() => {

      //cameraControlRef.current?.setLookAt(to_vector(data[props.counter]["lookPosition"]), true)
      //cameraControlRef.current?.setPosition(to_vector(data[props.counter]["cameraPosition"]), true)

      /*
      let c = to_vector(data[props.counter]["cameraPosition"])
      props.camRef.current.position.x = c.x
      props.camRef.current.position.y = c.y
      props.camRef.current.position.z = c.z

      props.camRef.current.lookAt(to_vector(data[props.counter]["lookPosition"]))
      */
      /*
        new_original_position.current.lerp(to_vector(data[props.counter]["cameraPosition"]), .1)
        current_look_position.current.lerp(to_vector(data[props.counter]["lookPosition"]), .1)
        props.camRef.current.position.x = new_original_position.current.x// + (center[0] - clientX) *0.001;

        props.camRef.current.position.y = new_original_position.current.y// + (center[1] - clientY) *0.001;
        props.camRef.current.position.z = new_original_position.current.z
        props.camRef.current.lookAt(current_look_position.current)
      */
    })
    //14.43
    //+ 1/(viewport.width/ viewport.height)*0

    let change = (viewport.width/viewport.height)
    
    if(!change){
      change = 0
    } else {
      change = 5/(viewport.width/viewport.height)                                                
    }

    return(
        <group>
        <CameraControls ref={cameraControlRef} camera = {cameraRef.current}
                        enableDamping = {false}
                         enableZoom = {false}/>
        <PerspectiveCamera ref = {cameraRef} makeDefault fov ={20 + change} position={[0, 0, 5]}/>


        {/*
        <PerspectiveCamera makeDefault = {true} fov = {20}/>

          <PerspectiveCamera ref = {props.camRef} name="Camera"  makeDefault={true} far={100} near={0.1} fov={20 + change} position={data[props.counter]["cameraPosition"]} rotation={[-0.15, 0.35, 0.05]} />

        <CameraControls 
        ref = {cameraControlRef}
        enabled = {false}
        />
        <PerspectiveCamera ref = {props.camRef}  name="Camera"  makeDefault={true} far={100} near={0.1} fov={20} position={data[props.counter]["cameraPosition"]} rotation={[-0.15, 0.35, 0.05]} />

    */}
        </group>

    )
}
export default ProprietaryCamera;