'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const handleComplete = useCallback(() => {
    setIsComplete(true)
    setTimeout(onComplete, 400)
  }, [onComplete])

  useEffect(() => {
    let frame: number
    let startTime = performance.now()
    const duration = 1800 // ms

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const rawProgress = Math.min((elapsed / duration) * 100, 100)
      // Ease out cubic for realistic loading feel
      const eased = 1 - Math.pow(1 - rawProgress / 100, 3)
      setProgress(eased * 100)

      if (rawProgress < 100) {
        frame = requestAnimationFrame(animate)
      } else {
        handleComplete()
      }
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [handleComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <motion.h1 
            className="text-3xl md:text-5xl font-bold tracking-[0.25em] mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            TT COLLECTIONS
          </motion.h1>
          
          <div className="w-56 md:w-72 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 to-cyan-400"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <motion.p className="mt-4 text-xs text-gray-500 font-mono tracking-widest">
            {Math.round(progress).toString().padStart(3, '0')}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}