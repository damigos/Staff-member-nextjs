'use client';

import { fetchAPI, BUSINESS_URL } from '@/utils/common';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
export default function BusinessForm({ business }) {
  const defaultTitle = business?.id ? business.Name : '';
  const defaultType = business?.id ? business.BusinessType : '';
  const schema = yup
    .object({
      title: yup.string().required(),
      type: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: defaultTitle,
      type: defaultType,
    },
    resolver: yupResolver(schema),
  });

  const [submitMessage, setSubmitMessage] = useState(false);

  const submitHandler = async (data) => {
    setSubmitMessage(false);
    const url = business?.id ? `${BUSINESS_URL}/${business.id}` : BUSINESS_URL;
    const method = business?.id ? 'put' : 'post';
    const response = await fetchAPI(url, {
      method,
      body: JSON.stringify({
        title: data.title,
        location: null,
        type: data.type,
      }),
    });
    if (!business?.id) {
      reset();
    }
    setSubmitMessage(response.message);
  };
  return (
    <div id='app' className='container mx-auto mt-8 border-4 p-4'>
      {submitMessage && <p className='text-green-500'>{submitMessage}</p>}
      <form
        id='businessAdd'
        className='space-y-4'
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className='flex flex-col space-y-4'>
          <div className='mb-4'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            {...register('title')}
            className='rounder-md w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
          />
          {errors.title && <span className='text-red-500'>{errors.title.message}</span>}
          </div>
          <div className='mb-4'>
          <label htmlFor='type'>Type</label>
          <select id='type' name='type' className='mr-4' {...register('type')}>
            <option value=''>Choose Type</option>
            <option value='bar'>Bar</option>
            <option value='restaurant'>Restaurant</option>
            <option value='club'>Club</option>
            <option value='hotel'>Hotel</option>
            <option value='cafe'>Cafe</option>
          </select>
          {errors.type && <span className='text-red-500'>{errors.type.message}</span>}
          </div>
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
