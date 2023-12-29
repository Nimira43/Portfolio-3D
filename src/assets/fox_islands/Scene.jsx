import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import scenePath from './scene-transformed.glb'


export function Model(props) {
  const { nodes, materials } = useGLTF(scenePath)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pCube11_rocks1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.pCube27_phongE1_0.geometry} material={materials.PaletteMaterial002} />
      <mesh geometry={nodes.pCylinder139_fox_readyfox_white_0.geometry} material={materials.PaletteMaterial003} position={[0.47, 0, 1.217]} rotation={[0, -1.198, 0]} />
      <mesh geometry={nodes.polySurface1541_water_0.geometry} material={materials.PaletteMaterial004} position={[-10.297, 0, 5.622]} rotation={[0, -0.411, 0]} />
      <instancedMesh args={[nodes.polySurface944_tree_body_0.geometry, materials.PaletteMaterial001, 8]} instanceMatrix={nodes.polySurface944_tree_body_0.instanceMatrix} />
      <instancedMesh args={[nodes.polySurface945_tree1_0.geometry, materials.PaletteMaterial001, 5]} instanceMatrix={nodes.polySurface945_tree1_0.instanceMatrix} />
      <instancedMesh args={[nodes.polySurface946_tree2_0.geometry, materials.PaletteMaterial001, 5]} instanceMatrix={nodes.polySurface946_tree2_0.instanceMatrix} />
      <instancedMesh args={[nodes.polySurface947_tree1_0.geometry, materials.PaletteMaterial001, 5]} instanceMatrix={nodes.polySurface947_tree1_0.instanceMatrix} />
      <instancedMesh args={[nodes.polySurface948_tree_body_0.geometry, materials.PaletteMaterial001, 8]} instanceMatrix={nodes.polySurface948_tree_body_0.instanceMatrix} />
      <instancedMesh args={[nodes.polySurface949_tree_body_0.geometry, materials.PaletteMaterial001, 8]} instanceMatrix={nodes.polySurface949_tree_body_0.instanceMatrix} />
    </group>
  )
}

useGLTF.preload(scenePath)
