'use client'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

function SceneContent({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)

  useFrame(() => {
    const scroll = scrollRef.current
    if (meshRef.current) {
      meshRef.current.rotation.y = scroll * 0.0005 + Math.sin(scroll * 0.001) * 0.1
      meshRef.current.rotation.x = scroll * 0.0002
    }
    if (lightRef.current) {
      // UVC Glow: Intensity & Position react to scroll
      const t = Math.min(scroll / 800, 1)
      lightRef.current.position.y = 2 + t * 4
      lightRef.current.intensity = 2 + t * 8
      lightRef.current.distance = 12 + t * 15
    }
  })

  return (
    <>
      <pointLight
        ref={lightRef}
        position={[0, 2, 3]}
        color="#8A2BE2"
        intensity={2}
        decay={2}
      />
      <pointLight position={[0, -2, -3]} color="#00FFFF" intensity={1} decay={2} />

      {/* Placeholder Geometry. Replace with useGLTF('/models/your-model.glb') in production */}
      <mesh ref={meshRef} scale={1.6}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        {/* Notice the lowercase 'm' - this is the correct R3F syntax */}
        <meshPhysicalMaterial
          color="#111"
          metalness={0.85}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>

      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 1.6}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
      <Environment preset="city" background={false} />
      
      {/* Subtle fog for depth */}
      <fog attach="fog" args={['#000', 8, 25]} />
    </>
  )
}

export default function ThreeScene({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]} // Cap DPR for performance
      gl={{ antialias: true, alpha: false }}
      style={{ width: '100%', height: '100%' }}
    >
      <SceneContent scrollRef={scrollRef} />
    </Canvas>
  )
}