"use client";

import React from 'react'
import Moon from '~/components/Moon'

export default function page() {
  return (
    <div className='h-screen w-screen bg-zinc-950 relative overflow-hidden'>
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23242429'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
        className="fixed inset-0"
      />
      <div className='h-screen flex flex-col'>

        <div>
          
        </div>

        <div className='flex-1'>
          <Moon />
          <div className='absolute top-0 left-1/2 w-screen h-screen py-24'>
            <h1 className='text-white text-8xl font-Teko transform -translate-x-24'>The Rocket Launchers</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
