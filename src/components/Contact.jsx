import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className=' capitalize w-full h-screen p-4 flex flex-col justify-center'>
      <div className=' flex flex-col mx-auto space-y-4 max-w-screen-lg'>
        <div className=' space-y-4'>
          <p className=' text-2xl underline'>contact</p>
          <p>submit the form below to get in touch with me</p>
        </div>
        <div className=' w-full md:flex md:w-1/2'>
          <form action="#" className=' flex flex-col space-y-4'>
            <input type="text" className=' form' placeholder='Enter your name' />
            <input type="text" className=' form' placeholder='Enter your email' />
            <textarea name="message" rows={10} className=' border rounded-md outline-none px-3 py-3 bg-transparent' placeholder='Enter your text'></textarea>
            <button className='px-4 py-2 mx-auto rounded-md hover:scale-110 duration-300 bg-gradient-to-r from-sky-300 to-blue-500 text-tBase'>let's talk</button>
          </form>
        </div>  
      </div> 
    </div>
  )
}

export default Contact
