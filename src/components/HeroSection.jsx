import React from 'react'
import heroImage from '../assets/hero_img.jpg'
import { ArrowDown, Github, Instagram, Linkedin } from 'lucide-react'
import { FaTiktok, FaWhatsapp } from 'react-icons/fa'

const HeroSection = () => {
  return (

    <section id="hero" className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-30 md:pt-10">
  
  <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* LEFT SIDE – TEXT */}
    <div className="text-left space-y-6">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
        <span className="text-primary opacity-0 animate-fade-in-delay-1">Destiny </span>
        <span className="text-gradient opacity-0 animate-fade-in-delay-2">Osunbor</span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
        I'm a Frontend Developer with a strong focus on user-first design and scalable frontend architecture. 
        I love transforming complex ideas into simple, interactive experiences using React and modern web technologies.
      </p>

                        <div className='pt-1 pb-3'>
                        <div className='flex space-x-8'>
                            <a href="https://www.linkedin.com/in/destiny-osunbor-06606b361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                            className="h-6 w-6 text-primary"
                            target='_blank'
                            >
                                <Linkedin />
                            </a>
                            <a href="https://github.com/ehigie22"
                            target='_blank'
                            >
                                <Github className="h-6 w-6 text-primary" />
                            </a>
                            <a href="https://wa.me/2349067456209"
                            target='_blank'
                            >
                                <FaWhatsapp className="h-6 w-6 text-primary" />
                            </a>
                            <a href="https://www.tiktok.com/@tha_king09?_r=1&_t=ZS-91kPh1mYz8J"
                            target='_blank'
                            >
                                <FaTiktok className="h-6 w-6 text-primary" />
                            </a>
                            <a href="https://www.instagram.com/da_king05?igsh=MXUybm9iaGFicjF5NA%3D%3D&utm_source=qr" 
                            className="h-6 w-6 text-primary"
                            target='_blank'
                            >
                                <Instagram />
                            </a>

                        </div>
                    </div>

      <div className='pt-3 md:pt-2 opacity-0 animate-fade-in-delay-4 items-center md:items-start'>
        <a href="#projects" className='cosmic-button'>
            View My Work
        </a>
      </div>
    </div>

    {/* RIGHT SIDE – IMAGE */}
    <div className="flex justify-center md:justify-end">
      <img 
        src={heroImage} 
        alt="Destiny Osunbor" 
        className="w-[280px] sm:w-[350px] md:w-[380px] lg:w-[450px] rounded-2xl shadow-2xl object-cover border-4 border-white/10 animate-fade-in-delay-1"
      />
    </div>
  </div>
</section>
  )
}

export default HeroSection
