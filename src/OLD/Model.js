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
{/*
                                    <Grid.Row className='title_selector' onMouseEnter = {()=>setviewedBox(0)} >
                                        Info
                                    </Grid.Row>
                                    <Grid.Row className='title_selector' onMouseEnter = {()=>setviewedBox(1)}>
                                        Credits
                                    </Grid.Row>
                                    <Grid.Row className='title_selector' onMouseEnter = {()=>setviewedBox(2)}>
                                        Poster
                                    </Grid.Row>
                                    */}
         {/*
                                <Grid.Row columns={3} style = {{padding: "0px", "padding-top": "5px"}}>
                                <Grid.Column >
                                    <div className='title_selector small_aktiv' onMouseEnter = {()=>setviewedBox(1)}>
                                        info
                                    </div>
                                </Grid.Column>
                                <Grid.Column >
                                    <div className='title_selector small_aktiv' onMouseEnter = {()=>setviewedBox(1)}>

                                        credits
                                    </div>

                                </Grid.Column>
                                <Grid.Column >
                                    <div className='title_selector small_aktiv' onMouseEnter = {()=>setviewedBox(1)}>
                                        posters
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                                */}

            {/* props.counter == 0*/}
            {/* true && (
            

            <div className= {props.counter == 0 ? "start_overlay" : "start_overlay hidden"} >
                <div style={{position: "relative", width: "100%", height: "100%"}}>

                <div className='big_type' id = {props.counter == 0 ? "living" : "living_end_pos"}>
                    <h1>
                    <span className='small_extra'>the</span>
                    
                    Living
                    </h1>
                </div>


                <div className='start_overlay_backdrop'>
                </div>
                <div className='big_type' id =  {props.counter == 0 ? "and" : "and_end_pos"}>
                    <h1>

                    &
                    </h1>

                </div>
                <div className='big_type' id ={props.counter == 0 ? "built" : "built_end_pos"}>
                    <h1>
                    <span className='small_extra'>the</span>

                    Built
                    </h1>
                </div>

                </div>

            </div>
            )
            */}

            {/* 
            <div className= {props.counter == 0 ? "start_overlay" : "start_overlay hidden"} >
                <div style={{position: "relative", width: "100%", height: "100%"}}>

                <div className='big_type2' id = {props.counter == 0 ? "living2" : "living_end_pos2"}>
                    <img src = "Icon/living_02.png"/>
                    <div className='big_type_overlay'>
                    </div>
                    <video autoPlay muted loop>
                        <source src="grass.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className='and_type2' id =  {props.counter == 0 ? "and2" : "and_end_pos2"}>
                    <h1>

                    &
                    </h1>

                </div>
                <div className='big_type2' id ={props.counter == 0 ? "built2" : "built_end_pos2"}>
                <img src = "Icon/built_02.png"/>
                                        <div className='big_type_overlay'>
                    </div>

                    <video autoPlay muted loop>
                        <source src="Built2.mp4" type="video/mp4" />
                    </video>

                </div>

                </div>

            </div>
*/}
             {/*

            <Grid className='overlay_grid'>
                
                <Grid.Row>

                    <Grid.Column width ={1}>

                    </Grid.Column>
                    <Grid.Column width={14}>
                    </Grid.Column>
                    <Grid.Column width={1}>

                    </Grid.Column>
                </Grid.Row>

                
            </Grid>
                */}
       
            {/*
            props.counter >=  22 && props.counter < 23 && (
                <div className='years'>
                    <div className = "yearCounter" >
                        <h1>{(Math.max(Math.min(1900 + Math.round(123 * props.yearPercentage), 2023),1900)).toString()}</h1>
                    </div>
                </div>
            )
            */}
            {/*
            <div className='button-set '>
                

            </div>
            */}
          {/*
            {props.counter == 0 && (

                <div className='start_container'>
                    <div className = "start_caption">
                        How much life is there on Earth?
                    </div>
                </div>
            )}
            */}
            {/*
            <div className= {props.counter == 0 ? "start_overlay" : "start_overlay hidden"} >
                <div style={{position: "relative", width: "100%", height: "100%"}}>
                    <div className='start_icon' id = "living_icon_01">
                        <img src= "Icon/Living11.png"/>
                    </div>
                    <div className='start_icon' id = "living_icon_02">
                        <img src= "Icon/Built2.png"/>
                    </div>

                    <img className='cover_image' src = "backdrop/cover_03.png"/>
                </div>
            </div>
            */}
            {/* 
            <div className= {props.counter == 0 ? "start_overlay" : "start_overlay hidden"} >

                <div style={{position: "relative", width: "100%", height: "100%"}}>


                    <div className='title_section'>
                    <img src = "Icon/Living11.png"/>
                    </div>
                    <div className='image_section'>
                        <img className='icon' src="Icon/and2.png"/>
                        <img className='cover_image' src = "backdrop/cover_03.png"/>
                    </div>
                    <div className=' title_2'>
                    <img src = "Icon/Built2.png"/>
                    </div>

                </div>
            </div>
*/}
{/*
            <Grid className='slider_container'>
                <Grid.Row>
                    <Grid.Column width={10}>

                    </Grid.Column>

                    <Grid.Column width={6}>
                    <TabExampleBasic/>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
*/}


      {/*
                        
                        <Grid style = {{height: "100%"}}>

                            <Grid.Row style = {{padding: "0px"}}>
                                <Grid.Column width={10}>
                                <Grid>

                                <Grid.Row style = {{padding: "0px"}}>

                                </Grid.Row>
                       
                            </Grid>
                        */}

                            {/*viewedBox >= 0 && (
                        <div className = "header_grid_info_box">
                        <div className = "copyrights_text">
                                Data from Bar-On, Y.M., Phillips R., & Milo, R. The biomass distribution on Earth.(2018), 
                            <br/> 
                                Proceedings of the National Academy of Sciences. <br/>© Ménard and Shtarkman
                            </div>

                        </div>

                                </Grid.Column>
                            </Grid.Row>
                            
                        </Grid>
                            )*/}
                            {/*

        <group name="1990" position={[-1.622, -0.283, 5.436]} scale={0.203}>
          <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={materials.Years} position={[0.209, -0.365, -0.252]} rotation={[Math.PI / 2, 0, -0.489]} scale={[1.304, 1.06, 1.06]} />

        </group>
          */}

          {/*


        <group name="2023" position={[-1.568, 0.606, 5.289]} scale={0.177}>
          <group name="Word" position={[-1.559, -0.045, 0.839]} scale={2.413} >
            <Html position={[0, 0, 0]} 
                        style={{
                          transform: 'translate(-120%, -50%)'
                        }}
                        className={"year_tick"}
            >
              2023
              </Html>
          </group>
          <mesh name="Plane006" geometry={nodes.Plane006.geometry} material={materials.Years} position={[-0.16, 0.043, 0.289]} rotation={[Math.PI / 2, 0, -0.489]} scale={[1.497, 1.279, 1.012]} />

          <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={blueMeshMaterial} position={[2.284, 0.005, -1.01]} rotation={[Math.PI / 2, 0, 2.653]} scale={[-1.829, -1.937, -0.047]} />
          
        </group>


        <group name="1900" position={[-1.568, 0.956, 5.289]} scale={0.177}>
          <group name="Word002" position={[-1.559, -0.045, 0.839]} scale={2.413} />
          <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={materials.Blak} position={[2.284, 0.005, -1.01]} rotation={[Math.PI / 2, 0, 2.653]} scale={[-1.829, -1.937, -0.047]} />
        </group>



          */}


           {/* 
  
  <mesh name="Aggregate_Trans" geometry={nodes.Aggregate_Trans.geometry} material={materials.Transparent} morphTargetDictionary={nodes.Aggregate_Trans.morphTargetDictionary} morphTargetInfluences={nodes.Aggregate_Trans.morphTargetInfluences} position={[10.55, -2.033, -3.126]} rotation={[0, 0.488, 0]} scale={5.779}>
  <Html 
      style={{
        transition: 'all 0.2s',
        transform: 'translate(-50%, -100%)'
      }}
      zIndexRange={[100, 100]}
      position = {[0, 0.55, 0]}
      className= {"box_value"} 
      >
         
      <h1>{Math.round(artificial_values.current["Aggregates"])} Gt </h1>
    </Html>
    
    </mesh>
  <mesh name="Bricks_Trans" geometry={nodes.Bricks_Trans.geometry} material={materials.Transparent} morphTargetDictionary={nodes.Bricks_Trans.morphTargetDictionary} morphTargetInfluences={nodes.Bricks_Trans.morphTargetInfluences} position={[8.295, -0.89, 2.521]} rotation={[0, 0.488, 0]} scale={3.583}>
  <Html 
      style={{
        transition: 'all 0.2s',
        transform: 'translate(-50%, -100%)'
      }}
      zIndexRange={[100, 100]}
      position = {[0, 0.55, 0]}
      className= {"box_value"} 
      >
      <h1>{Math.round(artificial_values.current["Bricks"])} Gt </h1>
    </Html>
  
  </mesh>
  <mesh name="Asphalt_Trans" geometry={nodes.Asphalt_Trans.geometry} material={materials.Transparent} morphTargetDictionary={nodes.Asphalt_Trans.morphTargetDictionary} morphTargetInfluences={nodes.Asphalt_Trans.morphTargetInfluences} position={[5.782, -0.69, 6.795]} rotation={[0, 0.488, 0]} scale={3.191}> 
  <Html 
      style={{
        transition: 'all 0.2s',
        transform: 'translate(-50%, -100%)'
      }}
      zIndexRange={[100, 100]}
      position = {[0, 0.55, 0]}
      className= {"box_value"} 
      >
      <h1>{Math.round(artificial_values.current["Asphalt"])} Gt </h1>
    </Html>
  
  </mesh>
  <mesh name="Metals_Trans" geometry={nodes.Metals_Trans.geometry} material={materials.Transparent} morphTargetDictionary={nodes.Metals_Trans.morphTargetDictionary} morphTargetInfluences={nodes.Metals_Trans.morphTargetInfluences} position={[3.985, -0.311, 10.677]} rotation={[0, 0.488, 0]} scale={[2.692, 2.555, 2.555]}>
  <Html 
      style={{
        transition: 'all 0.2s',
        transform: 'translate(-50%, -100%)'
      }}
      zIndexRange={[100, 100]}
      position = {[0,0.55, 0]}
      className= {"box_value"} 
      >
      <h1>{Math.round(artificial_values.current["Metals"])} Gt </h1>
    </Html>
  </mesh>
  <mesh name="Plastic_Trans" geometry={nodes.Plastic_Trans.geometry} material={materials.Transparent} morphTargetDictionary={nodes.Plastic_Trans.morphTargetDictionary} morphTargetInfluences={nodes.Plastic_Trans.morphTargetInfluences} position={[2.948, 0.164, 13.29]} rotation={[0, 0.488, 0]} scale={1.623} >
  <Html 
      style={{
        transition: 'all 0.2s',
        transform: 'translate(-50%, -100%)'
      }}
      zIndexRange={[100, 100]}
      position = {[0, 0.55, 0]}
      className= {"box_value"} 
      >
      <h1>{Math.round(artificial_values.current["Plastics"])} Gt </h1>
    </Html>
  </mesh>
  <mesh name="Concrete_Trans" geometry={nodes.Concrete_Trans.geometry} material={materials.Transparent} position={[14.71, -2.221, -10.259]} rotation={[0, 0.488, 0]} scale={6.499} >
  <Html 
      style={{
        transition: 'all 0.2s',
        transform: 'translate(-50%, -100%)'
      }}
      zIndexRange={[100, 100]}
      position = {[0, 0.55, 0]}
      className= {"box_value"} 
      >
      <h1>{Math.round(artificial_values.current["Concrete"])} Gt </h1>
    </Html>
  
  </mesh>
  */}

  {/*
  <mesh name="Plane009" geometry={nodes.Plane009.geometry} material={materials.End_Text} position={[10.198, -19.164, -2.441]} rotation={[Math.PI / 2, 0, -0.19]} scale={1.438} />
        <mesh name="Plane010" geometry={nodes.Plane010.geometry} material={materials.End_Text} position={[4.695, -20.215, -2.441]} rotation={[Math.PI / 2, 0, 0.233]} scale={1.664} />
  */}  



  



{/**

            {props.counter == 0 && (
                <div className='formFit'>

                <Form>
                <Form.Field>
                Selected value: <b>{headerImage}</b>
                </Form.Field>
                <Form.Field>
                <Radio
                    label='Choose this'
                    name='radioGroup'
                    value='this'
                    checked={headerImage === 0}
                    onChange={()=> {setHeaderImage(0)}}
                />
                </Form.Field>
                <Form.Field>
                <Radio
                    label='Or that'
                    name='radioGroup'
                    value='that'
                    checked={headerImage === 1}
                    onChange={()=> {setHeaderImage(1)}}
                />
                </Form.Field>
                <Form.Field>
                <Radio
                    label='or this'
                    name='radioGroup'
                    value='that'
                    checked={headerImage === 2}
                    onChange={()=> {setHeaderImage(2)}}
                />
                </Form.Field>
                </Form>
                </div>

            )

            }
            {headerImage == 0 && (

 
            <div className='breaking_open'>
                <div className='breaking_container'>
                    <div  className={(props.counter == 0) ? 'breaking' : 'breaking collapsed_breaking' }>  

                        <img className='backdrop' src = "backdrop/cover_13.png"/>
                        <div className = "subtitle ">
                            <img  src = "Icon/Living13.svg"/>
                            <Divider/>
                            An inventory of the global biomass and technomass 
                        </div>

                    </div>

                </div>
            </div>
            )
            }


            {headerImage == 1 && (
 
            <div className='breaking_open'>
            <div className='breaking_container'>
                <div  className={(props.counter == 0) ? 'breaking' : 'breaking collapsed_breaking' }>  

                    <img className='backdrop' src = "backdrop/cover_12.png"/>
                    <div className = "subtitle white_font">
                        <img  src = "Icon/Living13_white.svg"/>
                        <Divider/>
                        An inventory of the global biomass and technomass 
                    </div>

                </div>

            </div>
            </div>
            )
            }
            {headerImage == 2 && (
                <div className='breaking_open'>
                    <div className='breaking_container'>
                        <div  className={(props.counter == 0) ? 'breaking' : 'breaking collapsed_breaking' }>  
                            <img className='icon_2' src = "Icon/Colored_Words_03.png"/>

    
                        </div>
    
                    </div>
                </div>
            
            )
            }

                {props.counter == 1 && (
                <video autoPlay muted webkit-playsinline playsinline
                ref={videoRef}
                onEnded={handleVideoEnded}
                >
                <source src="dna/DNA_12.mp4" type="video/mp4" />
            </video>

                )}

*/}


            {/*
            <Modal
                basic
                onClose={() => setrotateModal(false)}
                onOpen={() => setrotateModal(true)}
                open={rotateModal}
                size='small'
            >
                <Header icon>
                    <Button basic color='red' onClick={() => setrotateModal(false)}>
                        <Icon name='remove' />
                    </Button>
                </Header>
                <Modal.Content>
                    <ClickInfo info={props.info} setInfoPage={props.setInfoPage}
                        hovered={props.hovered} setHoveringInfo={props.setHoveringInfo}
                        counter={props.counter} />
                </Modal.Content>
            </Modal>
            */}


            {/*
            <Grid className='endgrid' stackable>
                
                <Grid.Row >
                    <Grid.Column width={5}>

                        <div class="poster-download">
                            <img src="Posters/01.jpg" />
                            <div class="poster-download-section">
                                <div class="row download-row vertical-row">
                                    <a class="col" href="https://www.dropbox.com/scl/fi/rwjm53vsnc4psdbw8nxzd/BIO_2K.png?rlkey=mpqtaztolyctk1bqwwjh5ur5p&dl=1" download target="_blank" rel="noopener noreferrer">screen (2k)</a>
                                </div>
                                <div class="row download-row vertical-row">
                                    <a class="col" href="https://www.dropbox.com/scl/fi/xzpqqs659m03wslcs2p9m/BIO_4k.png?rlkey=xh52d21cnk1sha0kiju1hzikz&dl=1" download target="_blank" rel="noopener noreferrer">high res (4k)</a>
                                </div>
                                <div class="row download-row vertical-row">
                                    <a class="col" href="https://www.dropbox.com/scl/fi/1y3ilq54bhg8yzmqaft90/BIO_print.png?rlkey=osntuhyyx13086c0evae0at3e&dl=1" download target="_blank" rel="noopener noreferrer">print (8k)</a>
                                </div>
                                <div class="row download-row vertical-row">
                                    <a class="col" href="https://www.redbubble.com/people/scientific-viz/shop" download target="_blank" rel="noopener noreferrer">order a poster</a>
                                </div>
                            </div>

                        </div>
                        <div class="poster-download">

                            <img src="Posters/02.jpg" />
                            <div class="poster-download-section">

                                <div class="row download-row vertical-row">
                                    <a class="col" href="https://www.dropbox.com/scl/fi/vt72lbai8w2q9tf7bnuiu/TECHO_2k.png?rlkey=vi0txz33vg6crsxt61of5jun1&dl=1" download target="_blank" rel="noopener noreferrer">screen (2k)</a>
                                </div>

                                <div class="row download-row vertical-row">
                                    <a class="col" href="https://www.dropbox.com/scl/fi/6k3jjfjmihiqrszyg6kft/TECHNO_4K.png?rlkey=7uy1wb3d6qbq4w64unqppc0ja&dl=1" download target="_blank" rel="noopener noreferrer">high res (4k)</a>
                                </div>
                                <div class="row download-row vertical-row">
                                    <a class="col" href="https://www.dropbox.com/scl/fi/7dq6my6pz8uhukufufx5j/TECHNO_PRINT.png?rlkey=0edgja1hjtodat6a92qvybilf&dl=1" download target="_blank" rel="noopener noreferrer">print (8k)</a>
                                </div>
                                <div class="row download-row vertical-row">
                                    <a class="col" href="https://www.redbubble.com/people/scientific-viz/shop" download target="_blank" rel="noopener noreferrer">order a poster</a>
                                </div>

                            </div>

                        </div>

                    </Grid.Column>

                    <Grid.Column width={10}>

                        <div class="poster-download">

                            <img src="Posters/03.jpg" />
                            <div class="poster-download-section">

                                <div class="row download-row vertical-row">
                                    <a class="col" href="https://www.dropbox.com/scl/fi/bxanirgi6fgrps5kef1le/BIO_TECHNO_2K.png?rlkey=7a53jh7jrmihsseqvs70xiy03&dl=1" download target="_blank" rel="noopener noreferrer">screen (2k)</a>
                                </div>

                                <div class="row download-row vertical-row">
                                    <a class="col" href="https://www.dropbox.com/scl/fi/c7i5akj2cnhnnfttgyv72/BIO_TECHNO_4K.png?rlkey=diz7k1i6bcp4lsjvilm0hbohv&dl=1" download target="_blank" rel="noopener noreferrer">high res (4k)</a>
                                </div>
                                <div class="row download-row vertical-row">
                                    <a class="col" href="https://www.dropbox.com/scl/fi/uyagniykq671ouq4kvti8/BIO_TECHNO_PRINT.png?rlkey=69ii34nw84gumyjkb9x30eom9&dl=1" download target="_blank" rel="noopener noreferrer">print (8k)</a>
                                </div>
                                <div class="row download-row vertical-row">
                                    <a class="col" href="https://www.redbubble.com/people/scientific-viz/shop" download target="_blank" rel="noopener noreferrer">order a poster</a>
                                </div>

                            </div>
                        </div>

                    </Grid.Column>


                </Grid.Row>
            </Grid>

            <Grid stackable>
                <Grid.Row className='papergrid'>
                    <Grid.Column width={16}>
                        <div className='aktiv_small'>
                            Learn more
                        </div>
                        <Divider />
                        <Grid >
                            <Grid.Row columns={2} >
                                <Grid.Column>
                                    <a href="https://www.pnas.org/doi/10.1073/pnas.1711842115">
                                        The biomass distribution on Earths
                                        Bar-On, Y.M., Phillips R., & Milo, R.
                                        Proceedings of the National Academy of Sciences.
                                    </a>
                                    <br />
                                    <a href="https://pubmed.ncbi.nlm.nih.gov/33299177/">
                                        Global human-made mass exceeds all living biomass
                                        Elhacham E, Ben-Uri L, Grozovski J, Bar-On YM, Milo R.
                                        Nature. 2020
                                    </a>
                                    <br />
                                    <a href="https://pubmed.ncbi.nlm.nih.gov/33299177/">
                                        Global human-made mass exceeds all living biomass
                                        Elhacham E, Ben-Uri L, Grozovski J, Bar-On YM, Milo R.
                                        Nature. 2020
                                    </a>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>



                    </Grid.Column>
                </Grid.Row>
            </Grid>
            */}

