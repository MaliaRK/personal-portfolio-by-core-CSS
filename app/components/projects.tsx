import React from 'react'
import Image from "next/image"
import { TagBtn } from './button'


const Projects = () => {
  return (
    <div>
      <section className='bg-[#111] h-full text-white'>
        <h2 className='text-center underline text-2xl font-semibold pt-10'>Latest Works</h2>
        <div className='grid grid-cols-[50%_auto]'>
          <Image src='/image.webp' alt='about-image' width={250} height={5}></Image>
          <div className='m-8'>
            <h3 className='text-green-400 my-4 text-xl'>Node.js Projects:</h3>
            <h4 className='text-gray-400'>(Command Line Interface)</h4>
            <p className='my-4'>These are some of the command-line applications I've built to demonstrate my ability to develop interactive, logic-driven systems entirely through the terminal, Strengthen Backend Development Skills,
            Master Asynchronous Operations and Improve Problem-Solving.</p>
            <div className='flex mt-2'>
                <TagBtn text='# node.js'/>
                <TagBtn text='# chalk'/>
                <TagBtn text='# inquirer'/>
                <TagBtn text='# cli'/>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-[50%_auto]'>
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
          <Image src='/image.webp' alt='about-image' width={250} height={5}></Image>
        </div>
        <div className='grid grid-cols-[50%_auto]'>
          <Image src='/image.webp' alt='about-image' width={250} height={5}></Image>
          <div className='m-8'>
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
        <div className='grid grid-cols-[50%_auto]'>
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
          <Image src='/image.webp' alt='about-image' width={250} height={5}></Image>
        </div>
        <div className='grid grid-cols-[50%_auto]'>
          <Image src='/image.webp' alt='about-image' width={250} height={5}></Image>
          <div className='m-8'>
            <h3 className='text-rose-300 my-4 text-xl'>Figma Design:</h3>
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
      </section>
    </div>
  )
}

export default Projects
