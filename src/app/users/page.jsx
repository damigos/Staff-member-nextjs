import { USER_URL, fetchAPI } from '@/utils/common';
import NavBar from '@/app/components/navbar';

export default async function Users() {
  let users = await fetchAPI(USER_URL, {cache: 'no-store'});

  const tdCssClass =
    'px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 sm:text-center whitespace-nowrap px-6 py-4';

  const userElement = users.map((element) => {
    return (
      <tr className='border-b dark:border-neutral-700' key={element.id}>
        <td className={tdCssClass} data-label='Id'>
          {element.id}
        </td>
        <td className={tdCssClass} data-label='Email'>
          {element.Email}
        </td>
        <td className={tdCssClass} data-label='Actions '>
          {' '}
          <a
            href={`/users/${element.id}/edit`}
            className='mr-4 space-x-2 hover:font-bold'
          >
            Edit
          </a>
          <a href='/users/add' className='space-x-2'>
            Add
          </a>
        </td>
      </tr>
    );
  });
  return (
    <>
      <NavBar title='User Management' />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='mt-8 place-items-center gap-4 text-center sm:text-center'>
        <div
          id='user_list'
          className='overflow-hidden border dark:border-neutral-700'
        >
          <div className='overflow-x-auto'>
            <table className='min-w-full table-auto divide-y divide-gray-200 dark:divide-neutral-700'>
              <thead className='border-b border-neutral-200 font-medium dark:border-white/10'>
                <tr>
                  <th>Id</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 dark:divide-neutral-700'>
                {userElement}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </main>
      ;
    </>
  );
}
