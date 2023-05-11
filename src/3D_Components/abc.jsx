{/*
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" >
        
        <PerspectiveCamera name="Camera" makeDefault={true} far={100} near={0.1} fov={14.43} position={[8.58 , 3.47, -14.29]} rotation={[-0.15, 0.35, 0.05]} />
        <mesh name="Archaea_-_Archaea004" geometry={nodes['Archaea_-_Archaea004'].geometry} material={materials['Material.019']} position={[2.33, 20.22, -28.88]} rotation={[Math.PI / 2, 0, 0]}  onPointerOver = {handleHover} onPointerOut = {handleUnhover} onPointerDown = {handleClick}>
          <mesh name="Artboard_4_copy_2@3x" geometry={nodes['Artboard_4_copy_2@3x'].geometry} material={materials['Artboard 4 copy 2@3x']} position={[0.05, 0.98, -0.05]} rotation={[0, 0, -0.05]} scale={2.09} />
        </mesh>
        <mesh name="Plane" geometry={nodes["Plane.004_Plane.003"]} material={materials['Material.022']} position={[1.32, 1.16, -23.18]} scale={15.16} />

        <mesh name="Bacteria_-_Bacteria004" geometry={nodes['Bacteria_-_Bacteria004'].geometry} material={materials['Material.014']} position={[-1.54, 21.36, -34.45]} rotation={[Math.PI / 2, 0, 0]} onPointerOver = {handleHover} onPointerOut = {handleUnhover} onPointerDown = {handleClick}>
          <mesh name="Artboard_4@3x" geometry={nodes['Artboard_4@3x'].geometry} material={materials['Artboard 4@3x']} position={[-0.02, 2.1, 0.09]} scale={2.53} />
        </mesh>
        <mesh name="Fungi_-_Fungi007" geometry={nodes['Fungi_-_Fungi007'].geometry} material={materials['Material.032']} position={[0.4, 20.41, -31.07]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} onPointerOver = {handleHover} onPointerOut = {handleUnhover} onPointerDown = {handleClick}>
          <mesh name="Artboard_4_copy_4@3x001" geometry={nodes['Artboard_4_copy_4@3x001'].geometry} material={materials['Artboard 4 copy 4@3x']} position={[0.03, 1.16, -0.02]} rotation={[0, Math.PI / 2, 0]} scale={2.16} />
        </mesh>
        <mesh name="Protists_-_Protists004" geometry={nodes['Protists_-_Protists004'].geometry} material={materials['Material.021']} position={[3.76, 20.06, -27.06]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} onPointerOver = {handleHover} onPointerOut = {handleUnhover} onPointerDown = {handleClick}>
          <mesh name="Artboard_4_copy_3@3x" geometry={nodes['Artboard_4_copy_3@3x'].geometry} material={materials['Artboard 4 copy 3@3x']} position={[-0.06, 0.81, 0.02]} rotation={[0, Math.PI / 2, 0]} scale={1.92} />
        </mesh>
        <mesh name="Fungi_-_Fungi008" geometry={nodes['Fungi_-_Fungi008'].geometry} material={materials['Material.013']} position={[-6.04, 23.11, -40.45]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={3.36} onPointerOver = {handleHover} onPointerOut = {handleUnhover} onPointerDown = {handleClick}>
          <mesh name="Artboard_4_copy@3x" geometry={nodes['Artboard_4_copy@3x'].geometry} material={materials['Artboard 4 copy@3x']} position={[-0.04, 1.18, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.71} />
        </mesh>
        <mesh name="ABC001" geometry={nodes.ABC001.geometry} material={ materials['Material.019']} position={[4.92, 1.77, -25.39]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.63} onPointerOver = {handleHover} onPointerOut = {handleUnhover} onPointerDown = {handleClick}>
          <mesh name="ABC" geometry={nodes.ABC.geometry} material={materials['Material.025']} position={[-0.39, 0.13, -0.11]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_7@3x" geometry={nodes['Artboard_4_copy_7@3x'].geometry} material={materials['Artboard 4 copy 7@3x']} position={[-0.02, 0.32, 0.01]} scale={-0.84} />
          </mesh>
          <mesh name="Animals_-_Arthropods" geometry={nodes['Animals_-_Arthropods'].geometry} material={materials['Material.025']} position={[-0.12, 0.13, -0.49]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_8@3x" geometry={nodes['Artboard_4_copy_8@3x'].geometry} material={materials['Artboard 4 copy 8@3x']} position={[0, 0.31, 0.01]} scale={0.79} />
          </mesh>
          <mesh name="Animals_-_Cnidarians004" geometry={nodes['Animals_-_Cnidarians004'].geometry} material={materials['Material.026']} position={[0.13, 0.13, -0.24]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_15@3x" geometry={nodes['Artboard_4_copy_15@3x'].geometry} material={materials['Artboard 4 copy 15@3x']} position={[-0.01, 0.26, 0]} scale={0.75} />
          </mesh>
          <mesh name="Animals_-_Fish007" geometry={nodes['Animals_-_Fish007'].geometry} material={materials['Material.027']} position={[0.13, 0.13, -0.19]} rotation={[Math.PI, 0, Math.PI]} scale={1.59}>
            <mesh name="Artboard_4_copy_5@3x001" geometry={nodes['Artboard_4_copy_5@3x001'].geometry} material={materials['Artboard 4 copy 5@3x']} position={[0.03, 0.46, 0]} rotation={[0, -Math.PI / 2, 0]} scale={0.88} />
          </mesh>
          <mesh name="Animals_-_Fish008" geometry={nodes['Animals_-_Fish008'].geometry} material={materials['Material.026']} position={[-0.21, 0.13, -0.03]} rotation={[0, Math.PI / 2, 0]} scale={1.71}>
            <mesh name="Artboard_4_copy_6@3x" geometry={nodes['Artboard_4_copy_6@3x'].geometry} material={materials['Artboard 4 copy 6@3x']} position={[-0.02, 0.46, 0]} scale={0.99} />
          </mesh>
          <mesh name="Animals_-_Humans004" geometry={nodes['Animals_-_Humans004'].geometry} material={materials['Material.024']} position={[-0.59, 0.13, 0.06]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_10@3x" geometry={nodes['Artboard_4_copy_10@3x'].geometry} material={materials['Artboard 4 copy 10@3x']} position={[0, 0.21, -0.01]} scale={0.71} />
          </mesh>
          <mesh name="Animals_-_Livestock004" geometry={nodes['Animals_-_Livestock004'].geometry} material={materials['Material.024']} position={[-0.5, 0.13, -0.41]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_11@3x" geometry={nodes['Artboard_4_copy_11@3x'].geometry} material={materials['Artboard 4 copy 11@3x']} position={[-0.03, 0.24, -0.01]} scale={0.74} />
          </mesh>
          <mesh name="Animals_-_Molluscs004" geometry={nodes['Animals_-_Molluscs004'].geometry} material={materials['Material.027']} position={[-0.09, 0.13, -0.05]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_14@3x" geometry={nodes['Artboard_4_copy_14@3x'].geometry} material={materials['Artboard 4 copy 14@3x']} position={[0, 0.33, -0.01]} scale={0.86} />
          </mesh>
          <mesh name="Animals_-_Nematodes004" geometry={nodes['Animals_-_Nematodes004'].geometry} material={materials['Material.025']} position={[0.08, 0.13, 0.05]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_9@3x001" geometry={nodes['Artboard_4_copy_9@3x001'].geometry} material={materials['Artboard 4 copy 9@3x']} position={[0, 0.15, -0.01]} scale={0.42} />
          </mesh>
          <mesh name="Animals_-_Wild_birds004" geometry={nodes['Animals_-_Wild_birds004'].geometry} material={materials['Material.024']} position={[-0.37, 0.13, 0.09]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_13@3x001" geometry={nodes['Artboard_4_copy_13@3x001'].geometry} material={materials['Artboard 4 copy 13@3x']} position={[0, 0.08, 0]} scale={0.22} />
          </mesh>
          <mesh name="Animals_-_Wild_mammals004" geometry={nodes['Animals_-_Wild_mammals004'].geometry} material={materials['Material.024']} position={[0.24, 0.13, 0.07]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_12@3x001" geometry={nodes['Artboard_4_copy_12@3x001'].geometry} material={materials['Artboard 4 copy 12@3x']} position={[0, 0.11, -0.01]} scale={0.23} />
          </mesh>
          <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.023']} position={[-1.03, -1.05, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.96, 0.09, 1.01]} />
          <mesh name="Text" geometry={nodes.Text.geometry} material={materials['Material.002']} position={[0.12, 1.17, 0.86]} rotation={[0, Math.PI / 2, 0]} scale={0.67} />
        </mesh>
        <mesh name="Animals_-_Molluscs005" geometry={nodes['Animals_-_Molluscs005'].geometry} material={materials.Material} position={[-10.05, 1.43, -22.31]} rotation={[Math.PI / 2, 0, 0.09]} />
      </group>
    </group>
    */}



      {/*
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Plane004_Plane003" geometry={nodes.Plane004_Plane003.geometry} material={materials['Material.022']} position={[-0.01, -0.23, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[3.71, 1, 1]} />
        <mesh name="Archaea" geometry={nodes.Archaea.geometry} material={materials.Archaea} position={[2.33, 20.22, -28.88]} rotation={[Math.PI / 2, 0, 0]}  onPointerOver = {handleHover} onPointerOut = {handleUnhover} onPointerDown = {handleClick}>
          <mesh name="Artboard_4_copy_2@3x" geometry={nodes['Artboard_4_copy_2@3x'].geometry} material={materials['Artboard 4 copy 2@3x']} position={[0.05, 0.98, -0.05]} rotation={[0, 0, -0.05]} scale={2.09} />
        </mesh>
        <mesh name="Bacteria" geometry={nodes.Bacteria.geometry} material={materials.Bacteria} position={[-1.54, 21.36, -34.45]} rotation={[Math.PI / 2, 0, 0]}  onPointerOver = {handleHover} onPointerOut = {handleUnhover} onPointerDown = {handleClick}>
          <mesh name="Artboard_4@3x" geometry={nodes['Artboard_4@3x'].geometry} material={materials['Artboard 4@3x']} position={[-0.02, 2.1, 0.09]} scale={2.53} />
        </mesh>
        <mesh name="Fungi" geometry={nodes.Fungi.geometry} material={materials.Fungi} position={[0.4, 20.41, -31.07]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}  onPointerOver = {handleHover} onPointerOut = {handleUnhover} onPointerDown = {handleClick}>
          <mesh name="Artboard_4_copy_4@3x001" geometry={nodes['Artboard_4_copy_4@3x001'].geometry} material={materials['Artboard 4 copy 4@3x']} position={[0.03, 1.16, -0.02]} rotation={[0, Math.PI / 2, 0]} scale={2.16} />
        </mesh>
        <mesh name="Protists" geometry={nodes.Protists.geometry} material={materials.Protists} position={[3.76, 20.06, -27.06]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}  onPointerOver = {handleHover} onPointerOut = {handleUnhover} onPointerDown = {handleClick}>
          <mesh name="Artboard_4_copy_3@3x" geometry={nodes['Artboard_4_copy_3@3x'].geometry} material={materials['Artboard 4 copy 3@3x']} position={[-0.06, 0.81, 0.02]} rotation={[0, Math.PI / 2, 0]} scale={1.92} />
        </mesh>
        <mesh name="Plants" geometry={nodes.Plants.geometry} material={materials.Plants} position={[-6.04, 23.11, -40.45]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={3.36}  onPointerOver = {handleHover} onPointerOut = {handleUnhover} onPointerDown = {handleClick}>
          <mesh name="Artboard_4_copy@3x" geometry={nodes['Artboard_4_copy@3x'].geometry} material={materials['Artboard 4 copy@3x']} position={[-0.04, 1.18, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.71} />
        </mesh>
        <mesh name="Animals" geometry={nodes.Animals.geometry} material={materials.Animals} position={[4.92, 1.77, -25.39]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.63}  onPointerOver = {handleHover} onPointerOut = {handleUnhover} onPointerDown = {handleClick}>
          <mesh name="ABC" geometry={nodes.ABC.geometry} material={materials['Material.025']} position={[-0.39, 0.13, -0.11]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_7@3x" geometry={nodes['Artboard_4_copy_7@3x'].geometry} material={materials['Artboard 4 copy 7@3x']} position={[-0.02, 0.32, 0.01]} scale={-0.84} />
          </mesh>
          <mesh name="Animals_-_Arthropods" geometry={nodes['Animals_-_Arthropods'].geometry} material={materials['Material.025']} position={[-0.12, 0.13, -0.49]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_8@3x" geometry={nodes['Artboard_4_copy_8@3x'].geometry} material={materials['Artboard 4 copy 8@3x']} position={[0, 0.31, 0.01]} scale={0.79} />
          </mesh>
          <mesh name="Animals_-_Cnidarians004" geometry={nodes['Animals_-_Cnidarians004'].geometry} material={materials['Material.026']} position={[0.13, 0.13, -0.24]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_15@3x" geometry={nodes['Artboard_4_copy_15@3x'].geometry} material={materials['Artboard 4 copy 15@3x']} position={[-0.01, 0.26, 0]} scale={0.75} />
          </mesh>
          <mesh name="Animals_-_Fish007" geometry={nodes['Animals_-_Fish007'].geometry} material={materials['Material.027']} position={[0.13, 0.13, -0.19]} rotation={[Math.PI, 0, Math.PI]} scale={1.59}>
            <mesh name="Artboard_4_copy_5@3x001" geometry={nodes['Artboard_4_copy_5@3x001'].geometry} material={materials['Artboard 4 copy 5@3x']} position={[0.03, 0.46, 0]} rotation={[0, -Math.PI / 2, 0]} scale={0.88} />
          </mesh>
          <mesh name="Animals_-_Fish008" geometry={nodes['Animals_-_Fish008'].geometry} material={materials['Material.026']} position={[-0.21, 0.13, -0.03]} rotation={[0, Math.PI / 2, 0]} scale={1.71}>
            <mesh name="Artboard_4_copy_6@3x" geometry={nodes['Artboard_4_copy_6@3x'].geometry} material={materials['Artboard 4 copy 6@3x']} position={[-0.02, 0.46, 0]} scale={0.99} />
          </mesh>
          <mesh name="Animals_-_Humans004" geometry={nodes['Animals_-_Humans004'].geometry} material={materials['Material.024']} position={[-0.59, 0.13, 0.06]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_10@3x" geometry={nodes['Artboard_4_copy_10@3x'].geometry} material={materials['Artboard 4 copy 10@3x']} position={[0, 0.21, -0.01]} scale={0.71} />
          </mesh>
          <mesh name="Animals_-_Livestock004" geometry={nodes['Animals_-_Livestock004'].geometry} material={materials['Material.024']} position={[-0.5, 0.13, -0.41]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_11@3x" geometry={nodes['Artboard_4_copy_11@3x'].geometry} material={materials['Artboard 4 copy 11@3x']} position={[-0.03, 0.24, -0.01]} scale={0.74} />
          </mesh>
          <mesh name="Animals_-_Molluscs004" geometry={nodes['Animals_-_Molluscs004'].geometry} material={materials['Material.027']} position={[-0.09, 0.13, -0.05]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_14@3x" geometry={nodes['Artboard_4_copy_14@3x'].geometry} material={materials['Artboard 4 copy 14@3x']} position={[0, 0.33, -0.01]} scale={0.86} />
          </mesh>
          <mesh name="Animals_-_Nematodes004" geometry={nodes['Animals_-_Nematodes004'].geometry} material={materials['Material.025']} position={[0.08, 0.13, 0.05]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_9@3x001" geometry={nodes['Artboard_4_copy_9@3x001'].geometry} material={materials['Artboard 4 copy 9@3x']} position={[0, 0.15, -0.01]} scale={0.42} />
          </mesh>
          <mesh name="Animals_-_Wild_birds004" geometry={nodes['Animals_-_Wild_birds004'].geometry} material={materials['Material.024']} position={[-0.37, 0.13, 0.09]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_13@3x001" geometry={nodes['Artboard_4_copy_13@3x001'].geometry} material={materials['Artboard 4 copy 13@3x']} position={[0, 0.08, 0]} scale={0.22} />
          </mesh>
          <mesh name="Animals_-_Wild_mammals004" geometry={nodes['Animals_-_Wild_mammals004'].geometry} material={materials['Material.024']} position={[0.24, 0.13, 0.07]} rotation={[0, Math.PI / 2, 0]} scale={1.59}>
            <mesh name="Artboard_4_copy_12@3x001" geometry={nodes['Artboard_4_copy_12@3x001'].geometry} material={materials['Artboard 4 copy 12@3x']} position={[0, 0.11, -0.01]} scale={0.23} />
          </mesh>
          <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials['Material.023']} position={[-1.03, -1.05, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.96, 0.09, 1.01]} />
          <mesh name="Text" geometry={nodes.Text.geometry} material={materials['Material.002']} position={[0.12, 1.17, 0.86]} rotation={[0, Math.PI / 2, 0]} scale={0.67} />
        </mesh>
      </group>
    </group> */}
    

    /*
  const playAnimations = () => {
    if(props.playing) {
      for(let i = 0; i<names.length;i++){
        actions[names[i]].play();
        actions[names[i]].paused = false;
      }
    }

  }

  const pauseAnimations = () => {
    for(let i = 0; i<names.length;i++){
      actions[names[i]].paused = true;
      
    }
    props.setPlaying(false)
  }
  if(actions){
    if(actions.Archaea && props.playing) {
      playAnimations()
      if(anim_counter(props.counter) >= anim_counter(current_counter.current)){
        for(let i = 0; i<names.length;i++){
          actions[names[i]].setEffectiveTimeScale(1)
        }
      } else if(anim_counter(props.counter) < anim_counter(current_counter.current)) {
        for(let i = 0; i<names.length;i++){
          actions[names[i]].setEffectiveTimeScale(-1)
        }
      }
    }
  }
  


  useFrame(()=> {
    if(anim_counter(props.counter) >= anim_counter(current_counter.current)) {
      if (actions.Archaea.time > stop_times[anim_counter(props.counter)]) {
        pauseAnimations()
        current_counter.current += 1
      }
    } else if(anim_counter(props.counter) < anim_counter(current_counter.current)) {
      if (actions.Archaea.time < stop_times[anim_counter(props.counter)]) {
        pauseAnimations()
        current_counter.current -= 1
      }
    }
  })
  */