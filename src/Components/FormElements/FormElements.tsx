import { forwardRef } from 'react'

export const InputField = forwardRef<HTMLInputElement,{label:string;type:string;placeholder:string}>(
    ({label,type,placeholder},ref) => {
  return (
    <div className='flex flex-row justify-between items-center p-4 '>
        <label className="font-bold ">{label}:</label>
        <input type={type} placeholder={placeholder} ref={ref} className='border-1 font-normal p-2 rounded-xl' required></input>
    </div>
  )
});

export const Button = ({click,content}:{click:React.MouseEventHandler<HTMLButtonElement>,content:string})=>{
    return (
        <div className='flex justify-center items-center mt-4 '>
            <button onClick={click} className='border-1 relative px-6 py-3 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-black-500 to-gray-500 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 border-white'>{content}</button>
        </div>
        
    )
}
