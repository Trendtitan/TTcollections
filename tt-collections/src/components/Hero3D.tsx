'use client'
import dynamic from 'next/dynamic'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Dynamic import prevents SSR/hydration issues with WebGL
const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false, loading: () => (
  <div className="w-full h-full bg-black flex items-center justify-center text-gray-600 text-sm tracking-widest">
    INITIALIZING 3D ENVIRONMENT...
  </div>
)})

export default function Hero3D() {
  const scrollRef = useRef(0)
  const [isWebGLSupported, setIsWebGLSupported] = useState(true)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
    setIsWebGLSupported(!!gl)

    const handleScroll = () => {
      scrollRef.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isWebGLSupported) {
    return (
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
    )
  }

  return (
    <motion.div 
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
    >
      <ThreeScene scrollRef={scrollRef} />
    </motion.div>
  )
}