'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface SectionProps {
  subtitle: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}

export default function CinematicSection({ subtitle, title, description, imageSrc, imageAlt, reverse }: SectionProps) {
  const containerClass = `flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`
  
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-black">
      <div className={`max-w-7xl mx-auto ${containerClass}`}>
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-purple-500 font-mono text-xs tracking-[0.25em] uppercase">{subtitle}</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md">{description}</p>
          <motion.button
            className="mt-6 px-6 py-3 border border-white/20 rounded-full text-xs font-semibold tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            VIEW COLLECTION
          </motion.button>
        </motion.div>

        <motion.div 
          className="flex-1 relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}