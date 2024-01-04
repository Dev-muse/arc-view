'use client'

import {useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {motion,useScroll,useTransform} from 'framer-motion';

const aboutContent = {
    heading: {
        title: 'where creativity meets structural integrity',
        subTitle: 'About Us'
    },
    content: {
        img: '/images/hero-img-1-min.jpg',
        title: 'Architects of innovation, builders of beauty',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore debitis placeat libero, officia maiores molestiae aperiam aut error fugiat dolores.',
        btn: {
            href: '/about',
            label: 'Learn about us'
        }
    }
}

const About = ({className}) => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end ','end start']
    });

    const img1 = useTransform(scrollYProgress,[0,1],['30%','-10%']);
    const img2 = useTransform(scrollYProgress,[0,1],['100%','50%']);





  return (
    <section className={`${className}`} ref={ref}>
        
        <div className="container mx-auto px-4">
            <div className="text-center lg:max-w-xl 
            mx-auto mb-20 lg:mb-22 relative z-[5]">

            {/* subtitle */}
            {aboutContent.heading.subTitle && (

                <motion.span 
                initial = {{opacity:0 , y:20}}
                whileInView = {{opacity: 1, y:0 ,
                transition:{delay:0.2,duration:0.5}}}
                viewport = {{once:true}}
                className='uppercase tracking-[3px]
                text-[12.5px] mb-5 inline-block text-gray-500'>
                {aboutContent.heading.subTitle}
                </motion.span>

            )}

            {/* title */}
            {aboutContent.heading.title && (

                <motion.h2 
                initial = {{opacity:0 , y:20}}
                whileInView = {{opacity: 1, y:0 ,
                transition:{delay:0.3,duration:0.5}}}
                viewport = {{once:true}}
                className="capitalize text-2xl lg:text-4xl">
                    {aboutContent.heading.title}
                </motion.h2>

            )}
                
                
                
            </div>
            <div className="lg:flex justify-center">
                <div className="lg:8/12 lg:flex items-center gap-20">
                    <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">

                        <motion.div style={{y:img1} } 
                        
                        className="z-[2] relative" >
                            <Image src='/images/img-square-2-min.jpg' 
                            className='object-cover !w-full !h-[550px] lg:w-max-2xl
                            object-center'
                            width={400} height={600} alt='about image' />
                        </motion.div>
                        {/* dots decoration */}
                        <motion.div className='absolute bottom-0 lg:bottom-[200px]
                        -left-[100px] z-[1]'
                        initial = {{opacity:0 , x:-30}}
                        whileInView = {{opacity: 1, x:0 ,
                        transition:{delay:0.4,duration:0.5}}}
                        viewport = {{once:true}}
                        style={{y:img2}}
                         >
                            
                         <Image src='/images/dots.svg' alt='dots decoration'
                           width={200} height={200} className='w-64' />
                        </motion.div>

                    </div>
                    {/* ---- */}
                    <div className="lg:w-6/12">
                        <motion.h3
                        initial = {{opacity:0 , y:10}}
                        whileInView = {{opacity: 1, y:0 ,
                        transition:{delay:0.2,duration:0.5}}}
                        viewport = {{once:true}}
                         className='text-2xl mb-7 text-gray-800'>{aboutContent.content.title}</motion.h3>
                         <motion.p
                         initial = {{opacity:0 , y:10}}
                        whileInView = {{opacity: 1, y:0 ,
                        transition:{delay:0.2,duration:0.5}}}
                        viewport = {{once:true}}
                        className='leading-relaxed mb-14 text-gray-500 '
                         >{aboutContent.content.description}</motion.p>

                        <motion.p
                        initial = {{opacity:0 , y:10}}
                        whileInView = {{opacity: 1, y:0 ,
                        transition:{delay:0.2,duration:0.5}}}
                        viewport = {{once:true}}
                        >
                             <Link href={aboutContent.content.btn.href}
                            className='text-[11.5px] tracking-[2px]
                            transition-all duration-300 ease-in-out
                            font-semibold uppercase inline-block
                            bg-emerald-600 py-4 px-5 text-white
                            hover:bg-white hover:text-emerald-600
                            shadow-xl'>
                                {aboutContent.content.btn.label}
                            </Link>
                        </motion.p>

                    </div>
                </div>                
            </div>
        </div>


    </section>
  )
}

export default About