import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../Redux/Slices/LoginButtonToggleSlice";
import { appDispatch,rootState } from "../../Redux/store";

export const Titlebar = () => {
  const loginToggle = useSelector((state: rootState)=> state.loginToggle.value);
  const dispatch = useDispatch<appDispatch>();
  return (
    <div className={`relative flex flex-wrap items-center justify-between bg-black h-20 `} >
        <div className="flex-1"></div>
        <div className='flex-1 text-center'>
            <h1 className='font-extrabold font-serif text-3xl'>EXPENSE TRACKER </h1>
        </div>
        
        <div className="flex-1 flex justify-end">
            <button onClick={()=>dispatch(toggle(loginToggle === 0 ? 1 : 0))}>
              {loginToggle === 0 ? "SignUp": (loginToggle === 1 ? "Login": "Logout")}
            </button>
        </div>
    </div>
  )
}

