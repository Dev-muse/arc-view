'use client'

import {useRef} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {motion,useScroll,useTransform} from 'framer-motion'


const heroContent = {
    intro: {
        title:'Where creativity meets stability',
        subTitle: 'welcome',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nobis corporis! Doloremque magnam necessitatibus aliquam accusamus tempora, rerum assumenda deserunt.'
    },
    btn: {
        href:'/projects',
        label: 'View projects'
    }
}


const Hero = ({className}) => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end ','end start']
    });

    const imgScroll1 = useTransform(scrollYProgress,[0,1],['20%','-20%']);
    const imgScroll2 = useTransform(scrollYProgress,[0,1],['100%','50%']);



  return (
    <section className={`${className}`} ref={ref}>
        <div className="container mx-auto px-4">
            <div className="mx-auto items-center justify-between w-full 
            lg:flex lg:w-10/12 h-auto lg:h-screen lg:min-h-[700px] ">

                <div className="relative lg:w-4/12 z-[3]">
                {/* subtitle */}
                 {heroContent.intro.subTitle && (
                    <motion.span className="uppercase tracking-[3px]
                    text-gray-400 mb-5 inline-block text-[12.5px]"
                    initial = {{opacity:0 , y:20}}
                    whileInView = {{opacity: 1, y:0 ,
                    transition:{delay:0.1,duration:0.5}}}
                    viewport = {{once:true}}
                    >
                    {heroContent.intro.subTitle}
                    </motion.span>
                 )}
                 
                {/* title */}
                 {heroContent.intro.title && (
                    <motion.h1 
                    className="capitalize text-gray-800 text-3xl sm:text-4xl md:text-5xl
                    lg:text-6xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8 "
                    initial = {{opacity:0 , y:20}}
                    whileInView = {{opacity: 1, y:0 ,
                    transition:{delay:0.2,duration:0.5}}}
                    viewport = {{once:true}}
                    >
                    {heroContent.intro.title}
                    </motion.h1>
                 )}
                {/* description */}
                 {heroContent.intro.description && (
                    <motion.p 
                    className="leading-relaxed text-gray-500 
                    w-auto lg:w-screen max-w-xl text-base lg:text-lg
                    mb-10 lg:mb-16"
                    initial = {{opacity:0 , y:20}}
                    whileInView = {{opacity: 1, y:0 ,
                    transition:{delay:0.3,duration:0.5}}}
                    viewport = {{once:true}}
                    >
                    {heroContent.intro.description}
                    </motion.p>
                 )}
                {/* button */}
                 {heroContent.btn.label && (
                    <motion.p 
                    
                    initial = {{opacity:0 , y:20}}
                    whileInView = {{opacity: 1, y:0 ,
                    transition:{delay:0.3,duration:0.5}}}
                    viewport = {{once:true}}
                    >
                    <Link href={heroContent.btn.href}
                    className='text-[11.5px] tracking-[2px]
                    transition-all duration-300 ease-in-out
                    font-semibold uppercase inline-block
                    bg-emerald-600 py-4 px-5 text-white
                    hover:bg-white hover:text-emerald-600
                    shadow-xl'>
                        {heroContent.btn.label}
                    </Link>

                    </motion.p>
                 )}
                 
                    
                </div>
                {/* hero img*/}
                <div className="relative lg:w-7/12 ">
                        <motion.div 
                        initial={{opacity:0,x:20}}
                        whileInView={{
                            opacity:1,
                            x:0,
                            transition : {
                                delay: 0.4,
                                duration:0.5
                            }
                        }}
                        viewport={{once:true}}
                        style={
                            {y:imgScroll1}
                        }
                        className="z-[2] relative bg-cover bg-center">
                            <Image 
                            width={828} height={985} alt='hero image'
                            src='/images/hero-img-1-min.jpg' 
                            priority  />
                        </motion.div>
                        {/* svg dots */}
                        <motion.div
                         initial={{opacity:0,x:-30}}
                         whileInView={{
                             opacity:1,
                             x:0,
                             transition : {
                                 delay: 0.4,
                                 duration:0.5
                             }
                         }}
                         viewport={{once:true}}
                         style={
                             {y:imgScroll2}
                         }
                        
                        className='absolute bottom-0 lg:bottom-[200px]
                        -left-[100px] z-[1]
                        '>                        
                            <Image width={200} height={200}
                             alt='dots background' src='/images/dots.svg'
                            className='w-64' />
                        </motion.div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero