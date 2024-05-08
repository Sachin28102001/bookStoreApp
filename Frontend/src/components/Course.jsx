import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import {Link} from "react-router-dom"
import axios from "axios"

function Course() {
    const [book,setBook] = useState([])
    useEffect(() => {
        const getBook = async()=>{
            try{
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data)
                setBook(res.data)
            } catch(error){
                console.log(error)
            }
        }
        getBook();
    },[])
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text 2xl md:text-4xl'>We are delighted to have you <span className='text-pink-500'>here! :)</span></h1>
            <p className='mt-12'>Our course section is a dynamic hub of learning, offering diverse educational opportunities for all levels. From coding to business management, explore engaging lessons and expert-led tutorials. Learn at your own pace with our user-friendly platform. Join a vibrant community, collaborate on projects, and ignite your passion for learning. Whether you're a beginner or an expert, unlock endless possibilities in our enriching course section today!</p>
            <Link to = "/">
            <button className='rounded-md mt-6 bg-pink-500 text-white py-2 px-4 hover:bg-pink-700 300'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                book.map((item) => (
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course