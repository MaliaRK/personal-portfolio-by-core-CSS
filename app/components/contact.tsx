import React from 'react'
import Image from "next/image"
import Button from './button'

const Contact = () => {
  return (
    <div className='bg-[#111] text-white py-5'>
        <h2 className='underline text-2xl text-center font-semibold pt-10'>Let&apos;s connect</h2>
        <div className='md:flex items-center justify-center my-10'>
            <Image src='/contact.png' alt='contact' width={600} height={40} />
            <form className='mx-[20%] md:mx-0'>
                <label className='flex gap-1'>
                    <Image src='/person.svg' alt='person' width={20} height={10}/>
                    <h4>Name</h4>
                </label>
                <p><input type="text" className='pl-1 outline-none rounded-sm bg-transparent border-[1px] border-white'/></p>
                <label className='flex gap-1 mt-5'>
                    <Image src='/emailc.svg' alt='email' width={20} height={10}/>
                    <h4>Email</h4>
                </label>
                <p><input type="text" className='pl-1 outline-none rounded-sm bg-transparent border-[1px] border-white'/></p>
                <label className='flex gap-1 mt-5'>
                    <Image src='/message.svg' alt='message' width={20} height={10}/>
                    <h4>Message</h4>
                </label>
                <p><textarea rows={5} cols={30} className='pl-1 outline-none rounded-sm bg-transparent border-[1px] border-white'/></p>
                <Button text='Send Meesage' />
            </form>
        </div>
        <hr />
        <footer className='flex gap-2 items-center justify-center mt-10'>
            <p><u>All Rights Reserved</u></p>
            <Image src='/m.png' alt='linkedin' width={40} height={40} />
        </footer>
    </div>
  )
}

export default Contact