import NavBar from '@/app/components/navbar';
import { BUSINESS_URL, fetchAPI } from '@/utils/common';
export default async function Businesses() {
  let business = await fetchAPI(BUSINESS_URL, { cache: 'no-store' });

  const tdCssClass = `px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 sm:text-center`;

  const businessElement = business.map((element) => {
    return (
      <tr key={element.id}>
        <td className={tdCssClass} data-label='Title'>
          {element.Name}
        </td>
        <td className={tdCssClass} data-label='Type'>
          {element.BusinessType}
        </td>
        <td className={tdCssClass} data-label='Actions'>
          <a
            href={`/business/${element.id}/edit`}
            className='mr-4 hover:font-bold'
          >
            Edit
          </a>
          <a href='/business/add' className='mr-4'>
            Add
          </a>
          <a className='ml-2' href={`/staff`}>
            View Staff
          </a>
        </td>
      </tr>
    );
  });

  return (
    <>
      <NavBar title='Business Management' />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className='container mx-auto flex flex-col flex-wrap items-center p-5'>
          <div className='ml-9 mt-8 w-2/3 text-center sm:text-center'>
            <table className='min-w-full table-auto divide-y divide-gray-200 overflow-hidden border dark:divide-neutral-700'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Type</th>
                  <th className='p-5'>Actions</th>
                </tr>
              </thead>
              <tbody
                id='business_list'
                className='divide-y divide-gray-200 overflow-hidden border dark:divide-neutral-700'
              >
                {businessElement}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
