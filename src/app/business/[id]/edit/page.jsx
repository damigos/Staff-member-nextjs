import { fetchAPI, BUSINESS_URL } from '@/utils/common';
import NavBar from '@/app/components/navbar';
import BusinessForm from '@/app/components/businessForm';

export default async function BusinessEdit({ params }) {
  const { id } = params;
  const business = await fetchAPI(`${BUSINESS_URL}/${id}`, {cache: 'no-store'});
  return (
    <>
      <NavBar title='Business Edit' />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <BusinessForm business={business[0]} />
      </main>
    </>
  );
}
