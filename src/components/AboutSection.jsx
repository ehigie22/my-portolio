import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                About <span className='text-primary'>Me</span>
            </h2>

            <div className='grid grid-col-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h3 className='text-2xl font--semibold'>
                        A passionate Frontend Web Developer
                    </h3>

                    <p className='text-muted-foreground'>
                        I specialize in transforming complex design systems into fast,
                        responsive, and scalable web applications using modern web technologies.
                    </p>

                    <p className='text-muted-foreground'>
                        Beyond writing code, I bridge the gap between design and engineering.
                        My goal isn't just to build features it's to create products that feel intuitive, 
                        load instantly, and stand the test of time.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                        <a href="#contact" className='cosmic-button'>
                            Get In Touch
                        </a>
                        <a href="#contact" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                            Download CV
                        </a>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-6'>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/4'>
                                 <Code className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>Frontend Web Development</h4>
                                <p className='text-muted-foreground'>
                                    Creating fast, responsive, and accessible websites with modern technologies.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/4'>
                                 <User className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>UI/UX Designs</h4>
                                <p className='text-muted-foreground'>
                                   Designing intuitive user interfaces and seamless user experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/4'>
                                 <Briefcase className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>End-to-End Ownership</h4>
                                <p className='text-muted-foreground'>
                                    Scope → Design → Code → Test → Deploy. I handle the full lifecycle of every feature I build.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>

                </div>

            </div>
        </div>
    </section>
  )
}

export default AboutSection
