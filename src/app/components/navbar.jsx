export default async function NavBar(props){
    return <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
    style={{"backgroundImage": "url('/images/background.png')", "height": "400px"}}>
    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
    style={{"backgroundColor": "rgba(0, 0, 0, 0.6)"}}>
      <div className="flex h-full items-center justify-center">
        <div className="text-white">
          <h2 className="mb-4 text-5xl font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">{props.title}</h2>
         
           
            <a href="/staff" className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 mr-4"
            data-twe-ripple-init data-twe-ripple-color="light"> staff</a>
         
          
            
            <a href="/users" className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-twe-ripple-init data-twe-ripple-color="light"> User</a>
         
        
            <a href="/business" className="ml-4 rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-twe-ripple-init data-twe-ripple-color="light"> business</a>
       
        </div>
      </div>
    </div>
  </div>
}
