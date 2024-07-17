'use client';

import { fetchAPI, USER_URL } from '@/utils/common';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function UserForm({ user }) {
  const defaultMail = user?.id ? user.Email : '';
  const schema = yup
    .object({
      email: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: defaultMail,
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const [submitMessage, setSubmitMessage] = useState(false);

  const submitHandler = async (data) => {
    setSubmitMessage(false);
    const url = user?.id ? `${USER_URL}/${user.id}` : USER_URL;
    const method = user?.id ? 'put' : 'post';
    const response = await fetchAPI(url, {
      method,
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    if (!user?.id) {
      reset();
    }

    setSubmitMessage(response.message);
  };
  return (
    <div id='app' className='container mx-auto mt-8 border-4 p-4'>
      {submitMessage && <p className='text-green-500'>{submitMessage}</p>}

      <form
        id='userAdd'
        className='container mx-auto mt-8 p-4'
        onSubmit={handleSubmit(submitHandler)}
      >
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
            <span className='text-red-500'>{errors.email.message}</span>
          )}
        </div>

        <div className='mb-4'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            {...register('password')}
            className='w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200'
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

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
