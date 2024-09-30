import React from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const menuMotion = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween", y: -5, display: "none" },
    hover: {
        display: "block",
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            type: "tween",
            ease: "easeIn"
        }
    }
};

const menuLayout = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "About Us",
        link: "/about",
        children: [
            {
                title: "Mission",
                link: "/mission"
            },
            {
                title: "Officers & Team Leads",
                link: "/officers"
            },
            {
                title: "Team Members",
                link: "/our team"
            },
            {
                title: "Spaceport Gallery",
                link: "/competition"
            }
        ]
    },
    {
        title: "Projects",
        link: "/for-rocketeers",
        children: [
            {
                title: "Rexpacito (2019)",
                link: "/rexpacito-2019"
            },
            {
                title: "Aether (2018)",
                link: "/aether-2018"
            },
            {
                title: "Spacebound II (2017)",
                link: "/spacebound-ii-2017"
            },
            {
                title: "Spacebound (2016)",
                link: "/spacebound-2016"
            }
        ]
    },
    {
        title: "For Students",
        link: "/students",
        children: [
            {
                title: "Join",
                link: "/join"
            },
            {
                title: "Documents",
                link: "/documents"
            }
        ]
    },
    {
        title: "Sponsors",
        link: "/sponsors",
        children: [
            {
                title: "Sponsors 2023",
                link: "/sponsors-2023"
            },
            {
                title: "Sponsors 2021",
                link: "/sponsors-2021"
            },
            {
                title: "Sponsors 2019",
                link: "/sponsors-2019"
            },
            {
                title: "Sponsors 2018",
                link: "/sponsors-2018"
            },
            {
                title: "Sponsors 2017",
                link: "/sponsors-2017"
            },
            {
                title: "Sponsors 2016",
                link: "/sponsors-2016"
            },
            {
                title: "Get Involved",
                link: "/get-involved"
            }
        ]
    },
    {
        title: "Contact",
        link: "/contact"
    },
    {
        title: "News",
        link: "/news"
    }
]

function Navbar() {
    return (
        <nav className='absolute top-0 left-0 w-full z-20'>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center py-4 h-full'>
                    <div className="relative h-12 aspect-[5036/897]">
                        <Image src='/RL Logo.png' alt='logo' fill />
                    </div>
                    <ul className='flex items-center space-x-6'>
                        {menuLayout.map((item, index) => (
                            <motion.li key={index} initial="rest" whileHover="hover" animate="rest" className='h-[40px] flex items-center'>
                                <motion.div className='relative group'>
                                    <Link href={item.link}>
                                        <div className='flex items-center text-white text-lg hover:text-[#F05023] transition-colors duration-200'>
                                            <span className='mr-1'>{item.title}</span>
                                            {item.children && <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />}
                                        </div>
                                    </Link>

                                    {item.children && (
                                        <motion.div
                                            variants={menuMotion}
                                            className='absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5'
                                        >
                                            <div className='py-1'>
                                                {item.children.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={subItem.link}
                                                        className='block px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors duration-200'
                                                    >
                                                        {subItem.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar