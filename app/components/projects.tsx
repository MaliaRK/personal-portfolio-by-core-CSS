import React from 'react'
import Image from "next/image"
import { TagBtn } from './button'

const Projects = () => {
  return (
    <div>
      <section className='bg-[#111] text-white'>
        <div className='flex justify-center relative group'>
          <h2 className='underline text-2xl font-semibold pt-10'>Latest Works</h2>
          <div className='hidden md:block after:content-[""] bg-white w-[1px] h-[356vh] lg:h-[206vh] xl:h-[150vh] 2xl:h-[135vh] absolute top-[66px] '></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-[50%_auto]'>
          <div className='flex justify-center relative group'>
            <Image src='/computer.png' alt='computer' width={250} height={5} className='mx-auto md:my-[6%]'></Image>
            <Image src='/cli.jpg' alt='about-image' width={230} height={5} className='absolute translate-y-1/2'></Image>
            <div className='hidden md:block after:content-[""] bg-white w-[180px] h-[1px] absolute translate-y-36 translate-x-52 '></div>
            <div className="w-[10px] h-[10px] bg-green-400 rounded-full absolute translate-y-[140px] right-[-5px]"></div>
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
          <div className='flex justify-center relative group order-2 '>
            <Image src='/computer.png' alt='computer' width={250} height={5} className='mx-auto md:my-[6%]'></Image>
            <Image src='/resume.png' alt='about-image' width={230} height={5} className='absolute translate-y-1/2'></Image>
            <div className='hidden md:block after:content-[""] bg-white w-[180px] h-[1px] absolute translate-y-36 -translate-x-52 '></div>
            <div className="w-[10px] h-[10px] bg-blue-400 rounded-full absolute translate-y-[140px] left-[-5px]"></div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-[50%_auto]'>
          <div className='flex justify-center relative group order-2 '>
            <Image src='/computer.png' alt='computer' width={250} height={5} className='mx-auto md:my-[6%]'></Image>
            <Image src='/countdown.png' alt='about-image' width={200} height={5} className='absolute translate-y-1/2'></Image>
            <div className='hidden md:block after:content-[""] bg-white w-[180px] h-[1px] absolute translate-y-36 translate-x-52 '></div>
            <div className="w-[10px] h-[10px] bg-gray-400 rounded-full absolute translate-y-[140px] right-[-5px]"></div>
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
          <div className='flex justify-center relative group order-2 '>
            <Image src='/computer.png' alt='computer' width={250} height={5} className='mx-auto md:my-[6%]'></Image>
            <Image src='/eCommerce.png' alt='about-image' width={250} height={5} className='absolute translate-y-1/2'></Image>
            <div className='hidden md:block after:content-[""] bg-white w-[180px] h-[1px] absolute translate-y-36 -translate-x-52 '></div>
            <div className="w-[10px] h-[10px] bg-sky-300 rounded-full absolute translate-y-[140px] left-[-5px]"></div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-[50%_auto]'>
          <div className='flex justify-center relative group order-2 '>
            <Image src='/computer.png' alt='computer' width={250} height={5} className='mx-auto md:my-[6%]'></Image>
            <Image src='/figma.png' alt='about-image' width={250} height={5} className='absolute translate-y-1/2'></Image>
            <div className='hidden md:block after:content-[""] bg-white w-[180px] h-[1px] absolute translate-y-36 translate-x-52 '></div>
            <div className="w-[10px] h-[10px] bg-violet-500 rounded-full absolute translate-y-[140px] right-[-5px]"></div>
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
        <hr />
      </section>
    </div>
  )
}

export default Projects




   {/* <div className='relative order-2 '>
            <Image src='/computer.png' alt='computer' width={250} height={5} className='mx-auto md:my-[6%]'></Image>
            <Image src='/cli.jpg' alt='about-image' width={230} height={5} className='absolute left-[31%] md:left-[18%] lg:left-[26%] xl:left-[31%] 2xl:left-[34%] bottom-[40%] md:bottom-[57%] lg:bottom-[47%] xl:bottom-[41%] '></Image>
          </div> */}