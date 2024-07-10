'use client';

import { fetchAPI, USER_URL } from '@/utils/common';
import { useState } from 'react';

export default function UserForm({user}) {
    const defaultMail = user?.id ? user.Email : ""
    console.log(user)
  const [email, setEmail] = useState(defaultMail);
  const [password, setPassword] = useState("");
  const [submitMessage, setSubmitMessage] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setSubmitMessage(false);
    const url = user?.id ?`${USER_URL}/${user.id}` : USER_URL
    const method = user?.id ? "put" : "post"
    const response = await fetchAPI(url, {
      method,
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!user?.id){
    setEmail('');
    setPassword('');
    }
    
    setSubmitMessage(response.message);
  };
  return (
    <div id='app' className='container mx-auto mt-8 border-4 p-4'>
      {submitMessage && <p className='text-green-500'>{submitMessage}</p>}

      <form
        id='userAdd'
        className='container mx-auto mt-8 p-4'
        onSubmit={submitHandler}
      >
        <label >Email</label>
        <input
          type='email'
          id='email'
          name='email'
          className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label >Password</label>
        <input
          type='password'
    
          name='password'
          className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button
          type='submit'
          id='userSubmitBtn'
          className='mt-4 max-h-12 max-w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'
        >
          Save
        </button>
      </form>
    </div>
  );
}
