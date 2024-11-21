'use client'

import React from 'react';
import { CiSearch } from "react-icons/ci";
import { searchVideos } from '@/utils/fetchData';
import { useState } from 'react';

const SearchBar = () => {

        const [ count, setCount ] = useState(0);
        function update() {
            setCount(count+20)
        }
    
  return (
    <div className='flex border border-slate-300 rounded-3xl'>
      <form action="" className='flex items-center'>
        <input type="text" placeholder='Search' className='bg-transparent border-0' />
        <button>
            <CiSearch style={{height: "20px", width: "20px"}} />
        </button>
      </form>

        <h1>{count}</h1>
        <button style={{height: "fit-content", width: "fit-content", background: "#f90", padding: "3px 6px"}} onClick={update}>Update count</button>
    </div>
  )
}

export default SearchBar
