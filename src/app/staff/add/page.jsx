
import StaffForm from '@/app/components/staffForm';
import NavBar from '@/app/components/navbar';
import { fetchAPI,BUSINESS_URL } from '@/utils/common';
export default async function StaffAdd() {
    const businesses = await fetchAPI(BUSINESS_URL);
  return ( <>
      <NavBar title='Staff Add' />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <StaffForm businesses={businesses} />
      </main>
    </>
  );
}
