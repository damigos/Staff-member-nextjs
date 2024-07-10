'use client';

import { fetchAPI, BUSINESS_URL } from '@/utils/common';
import { useState } from 'react';

export default function BusinessForm({business}) {
  const defaultTitle = business?.id ? business.Name : ""
  const defaultType = business?.id ? business.BusinessType : ""
  const [title, setTitle] = useState(defaultTitle);
  const [type, setType] = useState(defaultType);
  const [submitMessage, setSubmitMessage] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setSubmitMessage(false);
    const url = business?.id ? `${BUSINESS_URL}/${business.id}` : BUSINESS_URL
    const method = business?.id ? "put" : "post"
    const response = await fetchAPI(url, {
      method , 
      body: JSON.stringify({
        title: title,
        location: null,
        type: type,
      }),
    });
    if (!business?.id){
     setTitle("");
     setType("");
    }
    setSubmitMessage(response.message);
  };
  return (
    <div id='app' className='container mx-auto mt-8 border-4 p-4'>
      {submitMessage && <p className='text-green-500'>{submitMessage}</p>}
      <form id='businessAdd' className='space-y-4' onSubmit={submitHandler}>
        <div className='flex flex-col space-y-4'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            className='rounder-md w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor='type'>Type</label>
          <select
            id='type'
            name='type'
            className='mr-4'
            defaultValue={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value=''>Choose Type</option>
            <option value='bar'>Bar</option>
            <option value='restaurant'>Restaurant</option>
            <option value='club'>Club</option>
            <option value='hotel'>Hotel</option>
            <option value='cafe'>Cafe</option>
          </select>
          <button
            type='submit'
            id='submitBtn'
            className='max-h-12 max-w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
