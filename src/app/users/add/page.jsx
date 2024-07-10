import UserForm from '@/app/components/userForm';
import NavBar from '@/app/components/navbar';

export default async function UserAdd() {
  return (
    <>
      <NavBar title='User Add' />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <UserForm />
      </main>
    </>
  );
}
