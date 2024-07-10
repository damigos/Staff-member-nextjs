import { STAFF_URL, fetchAPI, BUSINESS_URL,getFilteredItem } from '@/utils/common';
import NavBar from '@/app/components/navbar';
export default async function Staff() {
  let staff = await fetchAPI(STAFF_URL, {cache: 'no-store'});
  let business = await fetchAPI(BUSINESS_URL,{cache: 'no-store'});
  const tdCssClass =
    'px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 sm:text-center whitespace-nowrap px-6 py-4';

  const staffElements = staff.map((element) => {
    const businessItem = getFilteredItem(business, 'id', element.businessId);
    return (
      <tr className='border-b dark:border-neutral-700' key={element.id}>
        <td className={tdCssClass} data-label='First Name'>
          {element.FirstName}
        </td>
        <td className={tdCssClass} data-label='Last Name'>
          {element.LastName}
        </td>
        <td className={tdCssClass} data-label='Email'>
          {element.Email}
        </td>
        <td className={tdCssClass} data-label='Phone'>
          {element.PhoneNumber}
        </td>
        <td className={tdCssClass} data-label='Business'>
          {businessItem.Name}     
        </td>
        <td className={tdCssClass} data-label='Position'>
          {element.Position}
        </td>
        <td className={tdCssClass}>
          <a
            href={`/staff/${element.id}/edit`}
            className='mr-4 hover:font-bold'
          >
            Edit
          </a>
          <a href='/staff/add' className='space-x-2'>
            Add
          </a>
        </td>
      </tr>
    );
  });

  return (
    <>
        <NavBar title="Staff Management"/>
        
      <div className='mt-8 place-items-center gap-4 text-center sm:text-center'>
      <main className='flex min-h-screen flex-col items-center justify-between p-24 '>
        <div
          id='staff_list'
          className='overflow-hidden border dark:border-neutral-700'
        >
          <div className='overflow-x-auto'>
            <table className='min-w-full table-auto divide-y divide-gray-200 dark:divide-neutral-700'>
              <thead className='border-b border-neutral-200 font-medium dark:border-white/10'>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Business</th>
                  <th>Position</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 dark:divide-neutral-700'>
                {staffElements}
              </tbody>
            </table>
          </div>
        </div>
        </main>
      </div>
   
      ;
    </>
  );
}
