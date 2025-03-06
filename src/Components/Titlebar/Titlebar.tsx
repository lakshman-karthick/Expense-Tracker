export const Titlebar = () => {
  return (
    <div className='flex flex-wrap items-center justify-between bg-amber-700 h-16 '>
        <div></div>
        <div className=''>
            <h1 className='font-extrabold font-serif text-3xl'>EXPENSE TRACKER </h1>
        </div>
        <div>
            <button className="bg-amber-700 hover:bg-amber-500 focus-visible:bg-amber-900">Login</button>
        </div>
    </div>
  )
}

