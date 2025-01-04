import Image from 'next/image'
import React from 'react'
import Button from './button'
import Home from './script'
import About from './about'
import Link from 'next/link'
import Projects from './projects'


const Header = () => {
  return (
    <div>
     <section className='bg-[#111] flex flex-col justify-between h-screen px-5 border border-gray-400'>
        <header className='text-white flex justify-between mx-4 mt-4 items-center'>
            <Image src="/m.png" alt="logo" width={60} height={3}></Image>
            <div className='flex gap-8'>
              <svg
                width="24" 
                height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M12 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M4 12L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M22 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M19.7778 4.22266L17.5558 6.25424" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M4.22217 4.22266L6.44418 6.25424" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M6.44434 17.5557L4.22211 19.7779" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M19.7778 19.7773L17.5558 17.5551" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg">
              <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className='hidde'/>
              </svg>
            </div>
        </header>
        {/* <Home/> */}
        <div className='text-white flex justify-center '>
          <div className='flex items-center sm:ml-28 md:ml-32 lg:ml-60 xl:ml-[28%] pl-5'>
            <div className='z-20'>
              <h1 className='text-2xl md:text-4xl text-blue-400'>Malia Raees</h1>
              <p className='py-4 text-blue-400'><i>Front-End Developer</i></p>
              <About/>
              <div className='relative group sm:hidden'>
                <Link href="./xs-about"><Button text='About Me' className='group-hover:scale-105 duration-150'/></Link>
                <svg fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="50" height="24" viewBox="0 0 24 24" id="right-arrow" xmlns="http://www.w3.org/2000/svg" className="icon line bg-re-400 absolute -translate-y-7 translate-x-20 group-hover:translate-x-[85px] group-hover:scale-x-125 duration-150 "><path id="primary" d="M3,12H21m-3,3,3-3L18,9 fill: none; stroke: currentColor; strokeLinecap: round; strokeLinejoin: round; strokeWidth: 1.5;"></path></svg>
              </div>
            </div>
            <Image src="/m.png" alt="logo" width={200} height={10} className='absolute left-[45%] '></Image>
          </div>
          <div className='flex flex-col ml-auto gap-8  mr-2 sm:mr-4 md:mr-5'>
            <Link href='https://www.linkedin.com/in/malia-raees-khan/' target='_blank'><svg fill="currentColor" width="36" height="36" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg" className="cf-icon-svg"><path d="M3.335 6.498a1.152 1.152 0 0 1-1.248 1.148h-.015a1.15 1.15 0 1 1 .03-2.295 1.147 1.147 0 0 1 1.233 1.147zM.982 8.553h2.206v6.637H.982zm10.165 2.83v3.807H8.941v-3.55c0-.893-.319-1.502-1.12-1.502a1.21 1.21 0 0 0-1.13.807 1.516 1.516 0 0 0-.073.538v3.708H4.41s.03-6.017 0-6.639h2.21v.94l-.016.023h.015V9.49a2.19 2.19 0 0 1 1.989-1.095c1.451 0 2.54.949 2.54 2.988z"/></svg></Link>
            <Link href='maliaraeeskhan@gmail.com' target='_blank'><svg width="32" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></Link>
            <Link href='https://github.com/MaliaRK' target='_blank'><svg fill="currentColor" width="32" height="24" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M0 15c0 7.033 4.836 12.945 11.375 14.563.3.077.635-.19.625-.5V22.5c0-.333.197-.652.563-.844.37-.185.28-.856-.125-.937-1.9-.38-3.52-1.143-4.657-2.157C6.646 17.547 6 16.314 6 15c0-.915.327-1.793.906-2.594.06-.082.092-.18.094-.28V7.343l3.97 2.125c.122.066.273.077.405.03C12.488 9.168 13.698 9 15 9s2.512.168 3.625.5c.132.047.283.035.406-.03L23 7.343v4.78c.002.1.035.2.094.282.58.8.906 1.68.906 2.594 0 1.315-.645 2.548-1.78 3.563-1.138 1.014-2.76 1.776-4.657 2.156-.406.08-.495.75-.125.936.365.192.562.51.562.844v6.563c-.01.31.326.577.625.5C25.165 27.945 30 22.032 30 15c0-8.278-6.722-15-15-15C6.722 0 0 6.722 0 15zM15 1c7.738 0 14 6.262 14 14 0 6.33-4.24 11.547-10 13.28V22.5c0-.4-.154-.756-.375-1.063 1.663-.457 3.182-1.175 4.28-2.156C24.206 18.124 25 16.64 25 15c0-1.083-.394-2.074-1-2.97V6.5c.003-.35-.446-.613-.75-.437L18.656 8.53C17.516 8.22 16.296 8 15 8c-1.295 0-2.517.218-3.656.53L6.75 6.064c-.304-.176-.753.087-.75.437v5.53c-.606.896-1 1.887-1 2.97 0 1.64.795 3.123 2.094 4.28 1.1.982 2.62 1.7 4.28 2.158-.22.306-.374.66-.374 1.062v1.688c-1.09.406-1.807.493-2.25.406-.478-.094-.736-.34-1.03-.75-.592-.823-1.173-2.34-3.095-2.836-.654-.175-.875.8-.25.97 1.508.39 1.805 1.448 2.53 2.46.364.505.886.973 1.658 1.125.643.126 1.422.03 2.437-.313v3.03C5.242 26.548 1 21.33 1 15 1 7.262 7.262 1 15 1z"/></svg></Link>
            <div className=''>
              <Image src="/mypic1.png" alt="mypic" width={60} height={28} className='fixed bottom-5 bg-white rounded-full'></Image>
            </div>
          </div>
        </div>
        <div className='self-center mb-10 sm:mb-14 relative group'>
          <Button text='Latest Work' className='group'/>
          <svg fill="currentColor" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="50" height="24" viewBox="0 0 24 24" id="right-arrow" xmlns="http://www.w3.org/2000/svg" className="icon line bg-re-400 absolute rotate-90 top-2/1 translate-x-10 group-hover:translate-y-[6px] group-hover:scale-y-110 duration-150"><path id="primary" d="M3,12H21m-3,3,3-3L18,9 fill: none; stroke: currentColor; strokeLinecap: round; strokeLinejoin: round; strokeWidth: 1.5;"></path></svg>
          <div className='after:content-[""] bg-white w-1 h-6 absolute translate-x-[63px] translate-y-8'></div>
        </div>
      </section>
      <Projects/>
    </div>
  )
}

export default Header
