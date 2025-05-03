import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import * as THREE from 'three'

const TechIcon = ({model}) => {
	const scene = useGLTF(model.modelPath)

	useEffect(()=>{
		if(model.name === 'Interactive Developer'){
			scene.scene.traverse((child)=>{
				if(child.isMesh && child.name === 'Object_5'){
					child.material = new THREE.MeshStandardMaterial({color:'#fff'})
				}
			})
		}
	},[])

  return (
	<div>
		<Canvas>
			<ambientLight intensity={0.3} />
			<directionalLight position={[5,5,5,]} intensity={1}/>
			<OrbitControls  enableZoom={false} />
			<Environment preset='city' />

			<Float speed={5.5} rotationIntensity={1.5} floatIntensity={0.9}>
				<group scale={model.scale} rotation={model.rotation}>
					<primitive object={scene.scene}/>
				</group>
			</Float>
		</Canvas>
	</div>
  )
}

export default TechIcon