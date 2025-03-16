import React,{ useRef } from "react"
import { InputField ,Button} from "../FormElements";
import { useNavigate } from "react-router-dom";
import { appDispatch } from "../../Redux/store";
import { useDispatch } from "react-redux";
import { toggle } from "../../Redux/Slices/LoginButtonToggleSlice";

export const LoginForm = () => {
    const Dispatch = useDispatch<appDispatch>();
    const Navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const handleLogin = (e:React.MouseEvent<HTMLButtonElement>|React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem('UserData') ?? '');
        const email = emailRef.current?.value ?? '';
        if(data[email])
        {
            if(data[email].Password === passwordRef.current?.value)
            {
                Navigate('/tracker');
                if(emailRef.current)  emailRef.current.value = '';
                if(passwordRef.current)  passwordRef.current.value = '';
                Dispatch(toggle(2));
                console.log("Login Successful !!!");
            }
            else{
                console.log("Password is Mismatched");
            }
        }
        else
        {
            console.log("Login Failed !!! Check Details Correctly");
        }
    }
  return (
    <div className=" rounded-4xl p-12 bg-gradient-to-r from-black to-gray-500">
        <form onSubmit={handleLogin}>
            <h1 className="text-center text-2xl font-extrabold mb-2">LOGIN</h1>
            <InputField label="Name" type="text" placeholder="Give Name" ref={emailRef}/>
            <InputField label="Password" type="password" placeholder="Give Password" ref={passwordRef}/>
            <Button click={handleLogin} content="Login"></Button>
            <div className="flex flex-row justify-center mt-4"><p className="mr-3">Don't have Account?</p> <p onClick={()=>Dispatch(toggle(1))}  className="text-blue-400 cursor-pointer hover:text-blue-600">Register</p></div>
        </form>
    </div>
  )
}
