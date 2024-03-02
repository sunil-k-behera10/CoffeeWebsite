import React from 'react'
import logo from '../../assets/website/coffee_logo.png'
import {FaCoffee} from "react-icons/fa"


const Menus = [
  {
    id:1,
    name:"Home",
    link: "#",
  },
  {
    id:2,
    name:"Services",
    link: "/#Services",
  },
  {
    id:3,
    name:"About",
    link: "#/About",
  },
  

]
const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-secondary to-secondary/90 text-white w-full'>
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
          <div data-aos='fade-down' data-aos-once='true'>
            <a href="#" className='font-bold text-2xl sm:text-3xl tracking-wider flex justify-center items-center gap-2 font-cursive'>
              <img src={logo} alt="" className='w-14'/>
              Coffee Cafe
            </a>
          </div>
          <div data-aos='fade-down'
          data-aos-once='true'
          data-aos-delay='300'
          className='flex justify-between items-center gap-4'>
              <ul className='sm:flex items-center gap-4 hidden'>
                {
                  Menus.map((data,index)=>(
                    <li key={index}>
                      <a href={data.link} className='inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200'>{data.name}</a>
                    </li>
                  ))
                }
              </ul>

              <button className='flex items-center gap-3 bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200'>Orders <FaCoffee className='text-xl cursor-pointer'/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar