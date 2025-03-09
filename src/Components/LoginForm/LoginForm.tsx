import React,{ useRef } from "react"
import { InputField ,Button} from "../FormElements";

export const LoginForm: React.FC = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const handleLogin = (e:React.MouseEvent<HTMLButtonElement>|React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("login");
    }
  return (
    <div className=" rounded-4xl p-12 bg-gradient-to-r from-black to-gray-500">
        <form onSubmit={handleLogin}>
            <h1 className="text-center text-2xl font-extrabold mb-2">LOGIN</h1>
            <InputField label="Name" type="text" placeholder="Give Name" ref={nameRef}/>
            <InputField label="Password" type="password" placeholder="Give Password" ref={passwordRef}/>
            <Button click={handleLogin} content="Login"></Button>
        </form>
    </div>
  )
}
