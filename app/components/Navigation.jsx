'use client';

import {useState, useEffect, Fragment} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

import {Dialog , Transition} from '@headlessui/react'
import {XMarkIcon } from '@heroicons/react/24/outline'


const navMenu = [
    {href: '/', label: 'Home'},
    {href: '/about', label: 'About'},
    {href: '/projects', label: 'Projects'},
    {href: '/blog', label: 'Blog'},
    {href: '/contact', label: 'Contact'},
]

const Navigation = () => {

    const [open,setOpen] = useState(false);
    const pathname = usePathname()
    let newPathname= ''

    let wHeight= null;
    let wWidth= null;

    if(typeof window !== 'undefined'){
        wHeight= window.innerHeight;
        wWidth= window.innerWidth;
    }
    
    const [dimensions , setDimensions] = useState({
        height:wHeight,
        width:wWidth,
    })

    useEffect(
        ()=>{
            function handleResize(){
                setDimensions({
                  height: window.innerHeight,
                  width:window.innerWidth,
                });
                if(dimensions.width > 768 && open){
                    setOpen(false)
                }
            }

            window.addEventListener('resize',handleResize);
            return (_)=>{
                window.removeEventListener('resize',handleResize);

            }
        }
    )




  return (
    <>
    <header role='banner' className="py-10 absolute z-[3] w-full">
        <div className="container mx-auto px-4 flex justify-between items-center">
            <div>
                <Link className="font-bold text-gray-700 text-[22px]" 
                href='/'>
                    ArcView
                    <span className="text-emerald-400">.</span>
                </Link>
            </div>
            <div className="flex">
                <ul role='list' className="hidden md:flex space-x-8">
                
                {
                    navMenu.map((item,index)=>{
                        return (
                            <li key={item.label}>
                                <Link href={item.href}
                                className={`relative before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-emerald-400 before:origin-[100%,50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] before:will-change-transform hover:before:origin-[100%,0%] hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1] text-[12px] tracking-[2px] uppercase font-semibold pb-2`}
                                >{item.label}</Link>
                            </li>
                        )
                    })
                }

                </ul>
                <button className="md:hidden text-md"
                onClick={()=>setOpen(true)}
                >Menu</button>
            </div>
        </div>

    </header>

    {/* navmenu */}
    <Transition.Root show={open} as={Fragment}>
                <Dialog as='div' onClose={setOpen}
                className="relative z-10">

                    <Transition.Child as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom = 'opacity-100'
                    leaveTo = 'opacity-0'  >

                        <div className="bg-gray bg-opacity-25 fixed inset-0 transition-opacity"></div>

                    </Transition.Child>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute overflow inset-0 overflow-hidden">
                            <div className="max-w-full pointer-events-none fixed inset-y-0 right-0 flex pl-10">
                                <Transition.Child
                                as={Fragment}
                                enter='transform transition-all ease-in-out duration-500 sm:duration-500'
                                enterFrom = 'translate-x-full'
                                enterTo = 'translate-x-0'
                                leave='transform transition-all ease-in-out duration-500
                                sm:duration-500'
                                leaveFrom='translate-x-0'
                                leaveTo='translate-x-full'
                                >
                                    <Dialog.Panel className="pointer-events-auto max-w-sm w-screen">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">

                                            <div className="flex-1 overflow-y-auto px-0 py-6 sm:px-12">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className='text-lg font-medium
                                                    text-gray-900'>
                                                        Menu
                                                    </Dialog.Title>

                                                    <div className="flex items-center ml-3 h-7">
                                                        <button type='button'
                                                        className="relative -m-2
                                                        p-2 text-gray-400 hover:text-gray-500"
                                                        onclick={()=>setOpen(false)}>
                                                            <span className="absolute -inset-0 5"></span>
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="w-6 h-6"
                                                            aria-hidden='true'/>


                                                        </button>

                                                    </div>
                                                </div>

                                                <div className='mt-8'>
                                                    <div className="flow-root">
                                                        <ul role='list'>
                                                            {
                                                                navMenu.map((menu,index)=>{
                                                                    return (
                                                                        <li key={menu.label}>
                                                                            <Link href={menu.href}
                                                                            className='py-2 inline-block'
                                                                            >
                                                                                {menu.label}
                                                                                
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                })

                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                <div>
                                                    <Link href='/contact'
                                                    className='block text-center
                                                    text-[11.5px] tracking-[2px]
                                                    font-bold uppercase bg-emerald-600
                                                    py-4 px-5 text-white'
                                                    >Contact Us Now</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </Dialog.Panel>


                                </Transition.Child>

                            </div>

                        </div>
                    </div>



                </Dialog>

    </Transition.Root>



    </>
  )
}

export default Navigation;