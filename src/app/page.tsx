"use client";

import React from 'react';
import Moon from '~/components/Moon';
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Facebook, Instagram, Linkedin, Rocket, Twitter, Users } from 'lucide-react';
import Navbar from '~/components/Navbar';
import RocketModel from '~/components/Rocket';
import Image from 'next/image';

const sponsors = [
  {
    name: 'Northern Tool and Equipment',
    logo: 'https://static.wixstatic.com/media/0cd6fa_6ac4683b6087442da39969e29efc962a~mv2.png/v1/fill/w_192,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Northern%20tool%20and%20eq_.png'
  },
];

export default function Home() {
  return (
    <div className='max-w-screen overflow-hidden'>

      <div className='h-screen bg-black relative'>
        <div className='bottom-0 absolute bg-gradient-to-t from-black to-transparent w-full h-36 z-30' />

        <Moon />

        <div className='absolute top-0 left-0 w-screen h-screen flex flex-col z-10'>
          <Navbar />

          <motion.div
            className='w-1/2 ml-auto flex flex-col justify-center h-full p-8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className='text-white text-[80px] font-bold font-Teko leading-none mb-2 transform -translate-x-12'>The Rocket Launchers</h1>
            <h2 className='text-white text-2xl mb-3 transform -translate-x-4'>Launching Student Innovation into Orbit</h2>
            <p className='text-white text-base mb-4 leading-snug'>Empowering students to push the boundaries of aerospace engineering through hands-on rocketry projects</p>

            <div className='flex gap-4 mb-6'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-[#F05023] text-white px-4 py-2 rounded-full flex items-center'
              >
                Join Our Mission <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-transparent border border-white text-white px-4 py-2 rounded-full flex items-center'
              >
                Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>

            <div className='grid grid-cols-3 gap-4 text-white text-sm mb-6'>
              <div className='flex items-center'>
                <Rocket className="mr-2 h-5 w-5" />
                <span>4 Successful Launches</span>
              </div>
              <div className='flex items-center'>
                <Users className="mr-2 h-5 w-5" />
                <span>200+ Student Members</span>
              </div>
              <div className='flex items-center'>
                <Calendar className="mr-2 h-5 w-5" />
                <span>50+ Industry Partners</span>
              </div>
            </div>

            <div className='bg-zinc-800 p-4 rounded-lg mb-6'>
              <h3 className='text-white text-lg font-bold mb-2'>Next Launch: Coming Soon...</h3>
              <p className='text-gray-300 text-sm'>Summer 2025 | Spaceport America, NM</p>
              <p className='text-gray-300 text-sm'>Target Altitude: 10,000 ft</p>
            </div>

            <div className='mb-6 transform -translate-x-4'>
              <h3 className='text-white text-lg font-bold mb-2'>Latest News</h3>
              <ul className='text-gray-300 text-sm space-y-2'>
                <li>• Team secures $500K funding for next-gen propulsion system</li>
                <li>• Rexpacito I post-flight analysis complete - New records set!</li>
                <li>• Open house event scheduled for next month - All welcome!</li>
              </ul>
            </div>

            <div className='transform -translate-x-12'>
              <h3 className='text-white text-lg font-bold mb-2'>Connect With Us</h3>
              <div className='flex space-x-4'>
                <Twitter className="text-white h-6 w-6 cursor-pointer" />
                <Facebook className="text-white h-6 w-6 cursor-pointer" />
                <Instagram className="text-white h-6 w-6 cursor-pointer" />
                <Linkedin className="text-white h-6 w-6 cursor-pointer" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className='w-screen h-[320vh] bg-black flex flex-col pt-12'>
        <div className="flex-1 relative flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute text-center mb-16 "
          >
            <h1 className="text-6xl text-white font-Teko mb-4">Our Teams</h1>
            <div className="w-24 h-1 bg-[#F05023] mx-auto rounded-full" />
          </motion.div>

          <div className="absolute top-0 left-0 w-screen h-full px-36">
            <motion.div
              className="absolute top-[175px] z-10 w-[calc(50%-9rem)]"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{
                margin: "-200px",
                once: true,
              }}
            >
              <div className='max-w-[80%] pb-2'>
                <h2 className="text-white text-6xl font-Teko">Telemetry</h2>
                <p className="text-gray-300">Responsible for designing and implementing systems that collect and transmit real-time data during flight, including altitude, velocity, and orientation. This team ensures the rocket's performance can be monitored and analyzed.</p>
              </div>
              <div className="h-1 bg-white w-full relative">
                <div className='absolute top-0 translate-x-1/2 -translate-y-[calc(50%-2px)] right-0 w-5 h-5 bg-white rounded-full' />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-[500px] right-36 z-10 w-[calc(50%-9rem)]"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{
                margin: "-200px",
                once: true,
              }}
            >
              <div className="max-w-[80%] ml-auto pb-2">
                <h2 className="text-white text-6xl font-Teko">Payload</h2>
                <p className="text-gray-300">Develops and integrates the rocket's scientific or technological payload. This team is responsible for ensuring the payload's functionality and its safe integration with the rocket systems.</p>
              </div>
              <div className="h-1 bg-white w-full relative">
                <div className="absolute top-0 -translate-x-1/2 -translate-y-[calc(50%-2px)] left-0 w-5 h-5 bg-white rounded-full" />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-[950px] z-10 w-[calc(50%-9rem)]"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{
                margin: "-200px",
                once: true,
              }}
            >
              <div className='max-w-[80%] pb-2'>
                <h2 className="text-white text-6xl font-Teko">Structures</h2>
                <p className="text-gray-300">Designs and constructs the rocket's airframe and internal components. This team ensures the rocket is structurally sound to withstand the forces of launch and flight.</p>
              </div>
              <div className="h-1 bg-white w-full relative">
                <div className='absolute top-0 translate-x-1/2 -translate-y-[calc(50%-2px)] right-0 w-5 h-5 bg-white rounded-full' />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-[1405px] right-36 z-10 w-[calc(50%-9rem)]"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{
                margin: "-200px",
                once: true,
              }}
            >
              <div className="max-w-[80%] ml-auto pb-2">
                <h2 className="text-white text-6xl font-Teko">Recovery</h2>
                <p className="text-gray-300">Designs and implements systems to safely recover the rocket after flight. This includes parachute deployment mechanisms and strategies to locate the rocket post-landing.</p>
              </div>
              <div className="h-1 bg-white w-full relative">
                <div className="absolute top-0 -translate-x-1/2 -translate-y-[calc(50%-2px)] left-0 w-5 h-5 bg-white rounded-full" />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-[2350px] z-10 w-[calc(50%-9rem)]"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{
                margin: "-200px",
                once: true,
              }}
            >
              <div className='max-w-[80%] pb-2'>
                <h2 className="text-white text-6xl font-Teko">Propulsion</h2>
                <p className="text-gray-300">Focuses on the rocket's engine and fuel systems. This team designs, tests, and optimizes the propulsion system to achieve the desired thrust and efficiency for the mission.</p>
              </div>
              <div className="h-1 bg-white w-full relative">
                <div className='absolute top-0 translate-x-1/2 -translate-y-[calc(50%-2px)] right-0 w-5 h-5 bg-white rounded-full' />
              </div>
            </motion.div>

            <motion.div
              className="absolute top-[2400px] right-36 z-10 w-[calc(50%-9rem)]"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{
                margin: "-200px",
                once: true,
              }}
            >
              <div className="max-w-[80%] ml-auto pb-2">
                <h2 className="text-white text-6xl font-Teko">SRAD Propulsion</h2>
                <p className="text-gray-300">SRAD stands for Student Researched and Developed. This team focuses on creating custom, innovative propulsion solutions, pushing the boundaries of rocket technology through hands-on research and development.</p>
              </div>
              <div className="h-1 bg-white w-full relative">
                <div className="absolute top-0 -translate-x-1/2 -translate-y-[calc(50%-2px)] left-0 w-5 h-5 bg-white rounded-full" />
              </div>
            </motion.div>

          </div>

          <RocketModel />
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-zinc-900 to-zinc-800 flex flex-col gap-4 p-4">
        <motion.h2
          className="text-3xl font-thin text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Top Sponsors
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={150}
                height={150}
                objectFit="contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}