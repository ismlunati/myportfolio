import React from 'react'
import { MotionTransition } from './transition-component'
import Image from 'next/image'

const avatar = () => {
  return (
    <MotionTransition position="bottom" className="bottom-0 right-0 
    hidden md:inline-block md:absolute">
            <Image src="/avatar-1.png" width={350} height= {400} 
            className="w-full h-full" alt="Avatar" />


    </MotionTransition>
  )
}

export default avatar