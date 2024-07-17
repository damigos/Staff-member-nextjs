'use client';

import { fetchAPI, STAFF_URL } from '@/utils/common';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function StaffForm({ businesses, staff }) {
  const defaultFname = staff?.id ? staff.FirstName : '';
  const defaultLname = staff?.id ? staff.LastName : '';
  const defaultEmail = staff?.id ? staff.Email : '';
  const defaultPhone = staff?.id ? staff.PhoneNumber : '';
  const defaultPtype = staff?.id ? staff.Position : '';
  const defaultBusinessId = staff?.id ? staff.businessId : '';
  const schema = yup
    .object({
      fname: yup.string().required('Your First Name is required'),
      lname: yup.string().required('Your Last Name is required'),
      email: yup.string().required('Your email is required'),
      phone: yup.string().required('Your phone number is required'),
      ptype: yup.string().required('Your position type is required'),
      business: yup.string().required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fname: defaultFname,
      lname: defaultLname,
      email: defaultEmail,
      ptype: defaultPtype,
      business: defaultBusinessId,
      phone: defaultPhone,
    },
    resolver: yupResolver(schema),
  });

  const [submitMessage, setSubmitMessage] = useState(false);

  const submitHandler = async (data) => {
    setSubmitMessage(false);
    const url = staff?.id ? `${STAFF_URL}/${staff.id}` : STAFF_URL;
    const method = staff?.id ? 'put' : 'post';
    const response = await fetchAPI(url, {
      method,
      body: JSON.stringify({
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        ptype: data.ptype,
        business: data.business,
        phone: data.phone,
      }),
    });
    if (!staff?.id) {
      reset();
    }

    setSubmitMessage(response.message);
  };
  return (
    <div id='app' className='container mx-auto mt-8 border-4 p-4'>
      {submitMessage && <p className='text-green-500'>{submitMessage}</p>}
      <form
        id='staffAdd'
        className='container mx-auto mt-8 border-4 p-4'
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className='mb-4'>
          <label className='text-lg'>First Name</label>
          <input
            type='text'
            id='fname'
            name='fname'
            {...register('fname')}
            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
          />
          {errors.fname && (
            <p className='text-red-500'>{errors.fname.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <label>Last Name</label>
          <input
            type='text'
            id='lname'
            name='lname'
            {...register('lname')}
            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
          />
          {errors.lname && (
            <p className='text-red-500'>{errors.lname.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <label>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            {...register('email')}
            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
          />
          {errors.email && (
            <p className='text-red-500'>{errors.email.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <label>Position Type</label>
          <select
            id='ptype'
            name='ptype'
            {...register('ptype')}
            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
          >
            <option value=''>Select Position</option>
            <option value='pr'>Pr</option>
            <option value='kitchen'>Kitchen</option>
            <option value='service'>Service</option>
          </select>
          {errors.ptype && (
            <p className='text-red-500'>{errors.ptype.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <label>Business</label>
          <select
            id='business'
            name='business'
            {...register('business')}
            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
          >
            {' '}
            <option value=''>Select a Business</option>
            {businesses.map((element) => (
              <option value={element.id} key={element.id}>
                {element.Name}
              </option>
            ))}
          </select>
          {errors.business && (
            <span className='text-red-500'>{errors.business.message}</span>
          )}
        </div>
        <div className='mb-4'>
          <label>Phone Number</label>
          <input
            type='text'
            id='phone'
            name='phone'
            {...register('phone')}
            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
          />
          {errors.phone && (
            <span className='text-red-500'>{errors.phone.message}</span>
          )}
        </div>
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
}
