import { BUSINESS_URL, STAFF_URL, fetchAPI } from "@/utils/common";
import NavBar from "@/app/components/navbar";
import StaffForm from "@/app/components/staffForm";

export default async function StaffEdit({params}) { 
    const businesses = await fetchAPI(BUSINESS_URL);
    const{ id }= params;
    const staff = await fetchAPI(`${STAFF_URL}/${id}`, {cache : "no-store"});

    return(
        <>
            <NavBar title="Staff Edit"/>
            <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <StaffForm businesses={businesses} staff={staff} />
            </main>
        </>
    )
}
