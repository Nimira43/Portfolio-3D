import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Model } from '../src/assets/fox_islands/Scene'
import './App.css'
import { AmbientLight } from 'three'

function App() {

  return (
    <Canvas camera={{ fov: 60, near: 0.1, far: 1000 }}>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Model
        position={[0, -5.7, -43.4]}
        rotation={[0.1, 0.67, 0]}
        scale={[1, 1, 1]}
      />
    </Canvas>
  )
}

export default App
