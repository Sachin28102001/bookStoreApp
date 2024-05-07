import React from 'react';
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom"

function ContactForm() {
  const { 
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className='h-screen flex items-center justify-center'> 
      <div className='w-[600px]'>
        <div className='modal-box'>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button */}
            <Link to = "/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
        
            <h3 className="font-bold text-xl">Contact Us</h3>

            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input 
                type="text" 
                placeholder='Enter your full name' 
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input 
                type="text" 
                placeholder='Enter your email ID' 
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className='mt-4 space-y-2'>
              <span>Message</span>
              <br />
             <textarea 
              placeholder='Type your message' 
              className='w-80 px-13 py-10 border rounded-md outline-none'
              {...register("text", { required: true })}
            />
            <br />
           {errors.text && <span className='text-sm text-red-500'>This field is required</span>}
           </div>

            <div className='flex justify-around mt-4'>
              <button className='bg-pink-500 text-white rounded-md py-1 px-3 hover:bg-pink-700 duration-200'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
