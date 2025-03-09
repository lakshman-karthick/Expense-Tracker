import { Dispatch, SetStateAction } from "react";

export const Titlebar = ({loginflag,setLoginflag}:{loginflag:number;setLoginflag:Dispatch<SetStateAction<number>>}) => {
  return (
    <div className={`relative flex flex-wrap items-center justify-between bg-black h-20 `} >
        <div className="flex-1"></div>
        <div className='flex-1 text-center'>
            <h1 className='font-extrabold font-serif text-3xl'>EXPENSE TRACKER </h1>
        </div>
        
        <div className="flex-1 flex justify-end">
            <button onClick={() => setLoginflag(prev => (prev === 0 ? 1 : 0))}>{loginflag === 0 ? 'SignUp': (loginflag === 1? 'Login': 'Logout')}</button>
        </div>
    </div>
  )
}

