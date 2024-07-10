
import BusinessForm from '@/app/components/businessForm';
import NavBar from '@/app/components/navbar';


export default function BusinessAdd() { 
    
  return( <>
    <NavBar title='Business Add' />
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
    <BusinessForm/>
</main>
  </>);
}
