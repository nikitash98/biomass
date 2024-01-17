/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\\public\\Biomass_animation.glb
*/

import React, { useRef , useState, useEffect, Suspense} from 'react'
import { Part01 } from '../Items/Part01'

function Animation(props) {
 
    const handleHover = (e) => {
        if(props.counterHit) {

        e.stopPropagation()
        document.body.style.cursor = 'pointer';
        //props.setHovered([nameFlattening(e.eventObject.name)])
        props.setHovered([e.eventObject.name])
        //props.setSelectionSet(getRefName(e.eventObject.name))
      }

    }

    let divRefs = useRef({});

    const getRefName = (name) => {
        
        return divRefs.current[nameFlattening(name)]
      }
    
    const nameFlattening= (entry_name) => {
        let name = entry_name
        if(entry_name == "Wild_Mammals") {
          name = "Wild Mammals"
        }
        if(entry_name == "Marine_Arthropods") {
          name = "Marine Arthropods"
        }
        if(entry_name == "Wild_Birds") {
          name = "Wild Birds"
        }
        if(entry_name.includes("Hover")) {
          name = entry_name.split("_")[0]
        }
        return name
      }

    const handleUnhover = (e) => {
        props.setSelectionSet([])
        document.body.style.cursor = 'auto';
        props.setHovered([null])
        props.setInfoPage(null)
    }

    if(props.hovered){

      props.setSelectionSet(getRefName(props.hovered))

    } else {
    }

    /*
    const animal_click = () => {
      if(props.counter == 11) {
        props.setCounter(props.counter + 1)
      }
      if(props.counter == 1) {
        props.setCounter(props.counter + 1)
      }
      props.setClickableSelectionSet([])
    }
    */


  return (
    <>

      <Part01 setCounter = {props.setCounter} 
      counter = {props.counter}
      setHovered = {props.setHovered}
      hovered = {props.hovered}
      handleHover = {handleHover} handleUnhover = {handleUnhover}
      divRefs = {divRefs}
      setSelectionSet = {props.setSelectionSet}
      setYearPercentage = {props.setYearPercentage} 
      scrubbing = {props.scrubbing}
      setScrubbing = {props.setScrubbing}
      previousCounter = {props.previousCounter}
      animationTime = {props.animationTime}
      setcounterHit = {props.setcounterHit}
      setOpenModal = {props.setOpenModal}
      nameFlattening = {nameFlattening}
      setLoaded3D = {props.setLoaded3D}
      ></Part01>
    </>

  
  )
}


export default Animation
