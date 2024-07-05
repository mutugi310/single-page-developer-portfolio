import React, { useState } from 'react'
import { FaGithub, FaMedium, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
 
  return (
    <footer className='bg-black-light'>
      <div className='container mx-auto  divide-y-2 px-4 sm:px-15 lg:px-32'>
        <section className='flex flex-col justify-between gap-10 py-16  lg:flex-row '>
          <div className='w-full flex flex-col h-full gap-8 items-center text-center align-top lg:items-start lg:text-start '>
            <h2 className='font-bold text-6xl py-4'>Contact</h2>
            <p >
              I would love to hear about your project and <br className='sm:hidden md:hidden lg:hidden' />
              how I <br className='hidden sm:block md:block lg:block'/> could help. Please fill in the form, and <br className='sm:hidden md:hidden lg:hidden' />
              I’ll get back <br className='hidden sm:block md:block lg:block'/> to you as soon as possible.
            </p>
          </div>
          <div className='w-full flex flex-col '>
            <form action="" className='w-full ' >
              <input type="text" 
                name="" id="" placeholder='Name' 
                value={name}
                onChange={(e)=>setName(e.target.value) }
                className='bg-black-light py-4 w-full border-b-white border-b-2 pl-4 
                focus:border-b-green focus:outline-none '/> <br />
              <input type="email" 
                name="" id="" placeholder='Email' 
                value={email}
                onChange={(e)=>setEmail(e.target.value) }
                className='bg-black-light peer  py-4 w-full border-b-white border-b-2 mt-4 pl-4 
                focus:border-b-green focus:outline-none  invalid:border-b- invalid:border-b-2 invalid:text-[#FF6F5B]
                ' /> <br />
                  <p className='text-sm text-end text-[#FF6F5B] mt-2 invisible  peer-invalid:visible '>
                    Sorry, invalid format here
                  </p>
              <textarea 
                name="" id="" placeholder='Message' 
                value={message}
                onChange={(e)=>setMessage(e.target.value) }
                className='bg-black-light py-4 w-full border-b-white border-b-2 mt-4 pl-4
                focus:border-b-green focus:outline-none  ' >
              </textarea> 
              <br />
              <div className='flex justify-end'>
                <button type="submit" 
                  onClick={()=> { alert(`${name} ${email} ${message}`)}} 
                  className='uppercase border-b-2 w-fit border-green my-2 hover:text-green hover:font-bold'>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className='flex flex-col py-16  w-full gap-4 items-center lg:flex-row lg:justify-between  '>
          <p className='text-2xl text-center'>adamkeyes</p>
          <div className='flex justify-evenly sm:gap-4  '>
              <FaGithub className='size size-4 sm:size-6  hover:text-green'></FaGithub>
              <FaMedium className='size size-4 sm:size-6 hover:text-green'></FaMedium >
              <FaLinkedin className='size size-4 sm:size-6 hover:text-green'></FaLinkedin>
              <FaXTwitter className='size size-4 sm:size-6 hover:text-green'></FaXTwitter> 
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer