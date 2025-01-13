import React from 'react'
import Image from "next/image"
import { TagBtn } from './button'

const Projects = () => {
  return (
    <div>
      <section className='bg-[#111] text-white relative'>
        <h2 className='underline text-2xl text-center font-semibold pt-10'>Latest Works</h2>
        <div className='grid grid-cols-1 md:grid-cols-[50%_auto]'>
          <div className='flex justify-center items-center relative group order-2'>
            <div className='hidden md:block bg-white h-[1px] absolute right-0 left-1/2 top-1/2 '></div>
            <div className="hidden md:block w-4 h-4 bg-[#111] border-[3px] border-green-400 rounded-full absolute top-1/2 -translate-y-1/2 left-[99%] z-10 cursor-pointer hover:scale-110 duration-110"></div>
            <Image src='/cli.png' alt='cli' width={230} height={5} className='z-10'></Image>
          </div>
          <div className='m-8 md:order-2'>
            <h3 className='text-green-400 my-4 text-xl'>Node.js Projects:</h3>
            <h4 className='text-gray-400'>(Command Line Interface)</h4>
            <p className='my-4'>These are some of the command-line applications I have built to demonstrate my ability to develop interactive, logic-driven systems entirely through the terminal, Strengthen Backend Development Skills,
            Master Asynchronous Operations and Improve Problem-Solving.</p>
            <div className='flex mt-2'>
                <TagBtn text='# node.js'/>
                <TagBtn text='# chalk'/>
                <TagBtn text='# inquirer'/>
                <TagBtn text='# cli'/>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-[50%_auto]'>
          <div className='m-8'>
            <h3 className='text-blue-400 my-4 text-xl'>TypeScript Projects:</h3>
            <h4 className='text-gray-400'>(Interactive and Editable Resume Website)</h4>
            <p className='my-4'>This interactive Resume website is a personal project built with HTML, CSS, and TypeScript, showcasing both my professional background and my skills as a web developer. The project evolved in three key milestones, starting with a simple static page and gradually incorporating dynamic features and interactivity to create a fully editable resume..</p>
            <div className='flex mt-2x'>
              <TagBtn text='# html'/>
              <TagBtn text='# css'/>
              <TagBtn text='# typescript' />
              <TagBtn text='# responsive design'/>
            </div>
          </div>
          <div className='flex justify-center items-center relative group order-2 '>
            <div className='hidden md:block bg-white h-[1px] absolute right-1/2 left-0 top-1/2 '></div>
            <div className="hidden md:block w-4 h-4 bg-[#111] border-[3px] border-blue-400 rounded-full absolute top-1/2 -translate-y-1/2 right-[98.5%] z-10 cursor-pointer hover:scale-110 duration-110"></div>
            <Image src='/resume.png' alt='resume' width={230} height={5} className='z-10'></Image>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-[50%_auto]'>
          <div className='flex justify-center items-center relative group order-2'>
            <div className='hidden md:block bg-white h-[1px] absolute right-0 left-1/2 top-1/2 '></div>
            <div className="hidden md:block w-4 h-4 bg-[#111] border-[3px] border-green-300 rounded-full absolute top-1/2 -translate-y-1/2 left-[99%] z-10 cursor-pointer hover:scale-110 duration-110"></div>
            <Image src='/countdown.png' alt='countdown' width={200} height={5} className='z-10'></Image>
          </div>
          <div className='m-8 md:order-2'>
            <h3 className='text-gray-300 my-4 text-xl'>Next.js Projects:</h3>
            <h4 className='text-gray-400'>(Countdown Timer App)</h4>
            <p className='my-4'>This project is a dynamic countdown timer built using Next.js and React Hooks. It features a clean, user-friendly interface where users can set a target date and time, and the app will display the remaining time in days, hours, minutes, and seconds. Key highlights include.</p>
            <div className='flex mt-2'>
                <TagBtn text='# customizable Time Input:'/>
                <TagBtn text='# real-Time Updates'/>
                <TagBtn text='# responsive Design'/>
                <TagBtn text='# dynamic Rendering'/>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-[50%_auto]'>
          <div className='m-8'>
            <h3 className='text-sky-300 my-4 text-xl'>Next.js & Tailwind:</h3>
            <h4 className='text-gray-400'>(Single-Page Static E-Commerce Website)</h4>
            <p className='my-4'>This single-page static e-commerce website was built using Next.js to showcase my ability to develop high-performance, SEO-friendly front-end applications. Designed as a practice project, the site features a modern, user-friendly interface with a focus on speed and responsiveness.</p>
            <div className='flex mt-2x'>
              <TagBtn text='# static Site Generation'/>
              <TagBtn text='# tailwind'/>
              <TagBtn text='# single-Page Architecture' />
              <TagBtn text='# responsive design'/>
            </div>
          </div>
          <div className='flex justify-center items-center relative group order-2 '>
            <div className='hidden md:block bg-white h-[1px] absolute right-1/2 left-0 top-1/2 '></div>
            <div className="hidden md:block w-4 h-4 bg-[#111] border-[3px] border-sky-300 rounded-full absolute top-1/2 -translate-y-1/2 right-[98.5%] z-10 cursor-pointer hover:scale-110 duration-110"></div>
            <Image src='/eCommerce.png' alt='eCommerce' width={250} height={5} className='z-10'></Image>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-[50%_auto]'>
          <div className='flex justify-center items-center relative group order-2'>
            <div className='hidden md:block bg-white h-[1px] absolute right-0 left-1/2 top-1/2 '></div>
            <div className="hidden md:block w-4 h-4 bg-[#111] border-[3px] border-violet-500 rounded-full absolute top-1/2 -translate-y-1/2 left-[99%] z-10 cursor-pointer hover:scale-110 duration-110"></div>
            <Image src='/figma.png' alt='figma' width={250} height={5} className='z-10'></Image>
          </div>
          <div className='m-8 md:order-2'>
            <h3 className='text-violet-500 my-4 text-xl'>Figma Design:</h3>
            <h4 className='text-gray-400'>(InnovateTech Digital Solution)</h4>
            <p className='my-4'>InnovateTech Digital Solution is a static design replica created for practice using Figma. This project involved accurately replicating an existing design concept to hone my skills in visual design, layout, and user interface design principles..</p>
            <div className='flex mt-2'>
                <TagBtn text='# design precision'/>
                <TagBtn text='# responsive layout'/>
                <TagBtn text='# UI design practice'/>
                <TagBtn text='# figma'/>
            </div>
          </div>
        </div>
        <div className='hidden md:block bg-white w-[2px] absolute top-16 bottom-0 left-1/2 translate-x-1/2 '></div>
        <hr />
      </section>
    </div>
  )
}

export default Projects
