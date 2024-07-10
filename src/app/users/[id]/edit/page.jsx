import { USER_URL, fetchAPI } from '@/utils/common';

import NavBar from '@/app/components/navbar';
import UserForm from '@/app/components/userForm';
export default async function UserEdit({ params }) {
  const { id } = params;
  const user = await fetchAPI(`${USER_URL}/${id}`, { cache: 'no-store' });

  return (
    <>
      <NavBar title='User Edit' />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <UserForm user={user[0]} />
      </main>
    </>
  );
}
