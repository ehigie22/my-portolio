import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A modern e-commerce electronics store built with React, featuring a clean UI, product listings, and a responsive layout for a smooth shopping experience.',
      image: '/projects/project1.png',
      tags: ['React', 'CSS', 'JavaScript'],
      demoUrl: 'https://dagadgets-ecommerce.vercel.app/',
      githubUrl: '#',
    },

    {
      id: 2,
      title: 'Industrial Tech Website',
      description: 'A responsive WordPress website built for Vibration Dynamics Tech.I designed and developed all pages with a clean layout and conversion-focused CTAs.',
      image: '/projects/project2.png',
      tags: ['Wordpress', 'Elementor'],
      demoUrl: 'https://vibrationdynamicstech.com/',
      githubUrl: '#',
    },

    {
      id: 3,
      title: 'Chef Claude API Generator',
      description: 'A React-based Chef Claude API Generator that allows users to quickly generate structured recipe data and API responses through a clean, interactive interface.',
      image: '/projects/project3.png',
      tags: ['React', 'CSS', 'JavaScript'],
      demoUrl: 'https://chef-claude-recipe-ai-1w6d.vercel.app/',
      githubUrl: '#',
    
    }
]

const ProjectsSection = () => {
  return (
    <section id='projects' className='py-4 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured <span className='text-primary'>Projects</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my recent projects. Each of these projects was carefully crafted with clean code,
           modern tools, and a focus on performance, responsiveness, and great user experience.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div key={project.id} className='group bg-card/40 rounded-lg overflow-hidden shadow-xs card-hover'>
              <div className='h-auto overflow-hidden'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
              </div>

              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, index) => (
                    <span
                    key={index}
                     className='px-2 py-1 text-xs font-medium rounded-full border bg-primary/5 text-secondary-foreground'>{tag}</span>
                  ))}
                </div>

              <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
              <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
              <div className='flex justify-between items-center'>
                <div className='flex space-x-3'>
                  <a 
                  href={project.demoUrl} 
                  className='text-foreground/80 hover:text-primary transition-colors duration-300'
                  target='_blank'
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a 
                  href={project.githubUrl}
                  className='text-foreground/80 hover:text-primary transition-colors duration-300'
                  target='_blank'
                  >
                    <Github size={20} /></a>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <a 
          href="https://github.com/ehigie22" 
          target='_blank'
          className='cosmic-button w-fit flex items-center mx-auto gap-2'>
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
