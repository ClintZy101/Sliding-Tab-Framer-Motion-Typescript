'use client'
import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'


export default function NavbarTwo() {
  return (
    <div className='p-2'>
        <SlideTabs />
    </div>
  )
}

const SlideTabs = () => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0
    })

    return (
        <div className='flex border relative w-max  px-10 py-2 space-x-10 justify-center  rounded-full mx-auto items-center bg-white'>
            <Tab setPosition ={setPosition}>Home</Tab>
            <Tab setPosition ={setPosition}>Blog</Tab>
            <Tab setPosition ={setPosition}>Store</Tab>
            <Tab setPosition ={setPosition}>Cart</Tab>

            <Cursor position={position}/>
        </div>
    )
}

type TabProps = {
    children: React.ReactNode
    setPosition: React.Dispatch<React.SetStateAction<{
        left: number;
        width: number;
        opacity: number;
    }>>
}

const Tab = ({children, setPosition}: TabProps ) => {
    const tabRef = useRef<HTMLInputElement>(null)

    return (
        <div 
        ref={tabRef}
        onMouseLeave={()=>{
            setPosition(pv => ({
                ...pv,
                opacity: 0
            }))
        }}
        onMouseEnter={()=>{
            if(!tabRef.current) return;

            const {width, left} = tabRef.current.getBoundingClientRect()
            
            setPosition({
                left: tabRef.current.offsetLeft - 60,
                width: width + 35,
                opacity:1
            })
            
            // const tabData = tabRef.current.getBoundingClientRect()
            
            // setPosition({
            //     left: tabData.left -60,
            //     width: tabData.width + 35,
            //     opacity:1
            // })

            // console.log(tabData)

        }}
        className='cursor-pointer z-10  text-white mix-blend-difference text-center uppercase text-xl '>
                {children}
        </div>
    )
}

type CursorProps= {
    position: object
   
}

const Cursor = ({position}: CursorProps ) => {
    return (
        <motion.div 
        animate={position}
        className='absolute h-10 z-0 bg-black rounded-full ' />
    )
}

