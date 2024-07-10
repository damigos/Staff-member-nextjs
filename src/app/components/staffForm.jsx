'use client';

import { fetchAPI, STAFF_URL } from '@/utils/common';
import { useState } from 'react';

export default function StaffForm({businesses,staff}) {
  const defaultFname = staff?.id ? staff.FirstName : ""
  const defaultLname = staff?.id ? staff.LastName : ""
  const defaultEmail = staff?.id ? staff.Email : ""
  const defaultPhone = staff?.id ? staff.PhoneNumber : ""
  const defaultPtype = staff?.id ? staff.Position : ""
  const defaultBusinessId = staff?.id ? staff.businessId : ""


  const [fname, setFirstName] = useState(defaultFname);
  const [lname, setLastName] = useState(defaultLname);
  const [email, setEmail] = useState(defaultEmail);
  const [ptype, setPositionType] = useState(defaultPtype);
  const [business, setBusiness] = useState(defaultBusinessId);
  const [phone, setPhone] = useState(defaultPhone);
  const [submitMessage, setSubmitMessage] = useState(false);

 

  const submitHandler = async (event) => {
    event.preventDefault();
    setSubmitMessage(false);
    const url = staff?.id ? `${STAFF_URL}/${staff.id}` : STAFF_URL
    const method = staff?.id ? "put" : "post"
    const response = await fetchAPI(url, {
      method,
      body: JSON.stringify({
        fname,
        lname,
        email,
        ptype,
        business,
        phone,
      }),
    });
    if (!staff?.id){
      setFirstName('');
    setLastName('');
    setEmail('');
    setPositionType('');
    setBusiness('');
    setPhone('');
    }

    setSubmitMessage(response.message);
}
    return (
      <div id='app' className='container mx-auto mt-8 border-4 p-4'>
        {submitMessage && <p className='text-green-500'>{submitMessage}</p>}
        <form
          id='staffAdd'
          className='container mx-auto mt-8 border-4 p-4'
          onSubmit={submitHandler}
        >
          <label className='text-lg'>
            First Name
          </label>
          <input
            type='text'
            id='fname'
            name='fname'
            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
            value={fname}
            onChange={(e)=>setFirstName(e.target.value)}
          />

          <label >Last Name</label>
          <input
            type='text'
            id='lname'
            name='lname'
            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
            value={lname}
            onChange={(e)=>setLastName(e.target.value)}
          />

          <label >Email</label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <label >Position Type</label>
          <select
            id='ptype'
            name='ptype'
            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
            defaultValue={ptype}
            onChange={(e)=>setPositionType(e.target.value)}
          >
            <option value=''>Select Position</option>
            <option value='pr'>Pr</option>
            <option value='kitchen'>Kitchen</option>
            <option value='service'>Service</option>
          </select>

          <label >Business</label>
          <select
            id='business'
            name='business'
            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
            defaultValue={business}
            onChange={(e)=>setBusiness(e.target.value)}
          > <option value=''>Select a Business</option>
            {businesses.map(element=> <option value={element.id} key={element.id}>{element.Name}</option>)}
          </select>

          <label>Phone Number</label>
          <input
            type='text'
            id='phone'
            name='phone'
            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />

          <button
            type='submit'
            id='submitbtn'
            className='mt-4 max-h-12 max-w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'
          >
            Save
          </button>
        </form>
      </div>
    );
  };

