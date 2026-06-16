'use client'
import { useState } from 'react'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import Hero3D from '@/components/Hero3D'
import CinematicSection from '@/components/CinematicSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-900/40">
      <Loader onComplete={() => setLoading(false)} />
      
      {!loading && (
        <div className="opacity-0 animate-[fadeIn_1.2s_ease-out_forwards]">
          <Navbar />
          
          <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <Hero3D />
            <div className="relative z-10 text-center px-4 pointer-events-none mt-24">
              <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4">TT COLLECTIONS</h1>
              <p className="text-gray-400 text-sm md:text-lg tracking-[0.2em] uppercase">LUXURY REDEFINED IN UGANDA</p>
            </div>
          </section>

          <div className="relative z-10 bg-black">
            <CinematicSection 
              subtitle="Apparel"
              title="Tailored Elegance"
              description="Curated premium clothing for the modern individual. Crafted for comfort, designed for distinction."
              imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800"
              imageAlt="High-end fashion apparel"
            />
            <CinematicSection 
              subtitle="Footwear"
              title="Step in Distinction"
              description="Handcrafted leather and contemporary designs. Where precision meets everyday luxury."
              imageSrc="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800"
              imageAlt="Luxury footwear collection"
              reverse
            />
            <CinematicSection 
              subtitle="Timepieces"
              title="Mastery of Time"
              description="Exclusive watches that blend Swiss precision with timeless aesthetics. Elevate your presence."
              imageSrc="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800"
              imageAlt="Luxury watch collection"
            />
          </div>

          <Footer />
        </div>
      )}
      
      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </main>
  )
}