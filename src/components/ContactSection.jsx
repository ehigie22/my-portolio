import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import { FaWhatsapp, FaTiktok } from 'react-icons/fa'
import React, { useState, useRef } from 'react'
import {cn} from '@/lib/utils'
import { useToast } from '../hooks/use-toast'
import emailjs from '@emailjs/browser'

const ContactSection = () => {

    const formRef = useRef();
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs
    .sendForm(
      "service_6jbnepp",
      "template_jyfb3ct",
      formRef.current,
      "ezLANq5ScTnAhNJNQ"
    )
    .then(
      () => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitting(false);
        formRef.current.reset();
      },
      (error) => {
        toast({
          title: "Error!",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      }
    );
};

  return (
    <section id='contact' className='py-44 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Get In <span className='text-primary'>Touch</span></h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Got a project idea or need a Frontend Engineer to bring your vision to life? 
                I'm just a message away. Let's build something great together.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div className='space-y-8'>
                    <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/6'>
                            <Mail className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <a href="mailto:osunborehigie@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                    osunborehigie@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/6'>
                            <Phone className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4>Phone </h4>
                                <a href="tel:+2349067456209" className='text-muted-foreground hover:text-primary transition-colors'>
                                +2349067456209
                                </a>
                            </div>
                        </div>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/6'>
                            <MapPin className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4>Location</h4>
                                <a className='text-muted-foreground hover:text-primary transition-colors'>
                                Lagos State, Nigeria.
                                </a>
                            </div>
                        </div>
                    <div className='pt-8'>
                        <h4 className='font-medium mb-4'>Connect with me</h4>
                        <div className='flex space-x-4 justify-center'>
                            <a href="" 
                            className="h-6 w-6 text-primary"
                            target='_blank'
                            >
                                <Linkedin />
                            </a>
                            <a href="" 
                            className="h-6 w-6 text-primary"
                            target='_blank'
                            >
                                <Instagram />
                            </a>
                            <a href="https://wa.me/2349067456209"
                            target='_blank'
                            >
                                <FaWhatsapp className="h-6 w-6 text-primary" />
                            </a>
                            <a href="https://tiktok.com/@yourusername"
                            target='_blank'
                            >
                                <FaTiktok className="h-6 w-6 text-primary" />
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
                    <div className='bg-card/30 p-8 mt-2 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6 '>Send a message</h3>
                        <form 
                        className='space-y-6' 
                        onSubmit={handleSubmit}
                        ref={formRef}
                        >
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                                <input type="text" id='name' name='name' required
                                 className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                 placeholder='Destiny Ehigie...'/>

                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                                <input type="email" id='email' name='email' required
                                 className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                 placeholder='franklin@gmail.com'/>

                            </div>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Message</label>
                                <textarea type="text" id='message' name='message' required
                                 className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                                 placeholder='Hi, I will like to...'/>

                            </div>

                            <button type='submit' 
                            disabled={isSubmitting}
                            className={cn('cosmic-button w-full flex justify-center gap-2',

                            )}>
                                {isSubmitting ? 'Sending' : 'Send Message'}
                                
                            </button>
                        </form>
                    </div>
            </div>
        </div>

    </section>
  )
}

export default ContactSection
