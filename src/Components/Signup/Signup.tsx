import { useRef, useState } from "react"
import { InputField,Button } from "../FormElements"
import { appDispatch } from "../../Redux/store";
import { useDispatch } from "react-redux";
import { toggle } from "../../Redux/Slices/LoginButtonToggleSlice";


export const Signup = () => {

  const Dispatch = useDispatch<appDispatch>();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const mobileNumberRef = useRef<HTMLInputElement>(null);
  const [validation,setValidation] = useState<string>('');


  const handleSignUp = (e:React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(passwordRef.current?.value !== confirmPasswordRef.current?.value)
        {
            setValidation("Password Not Matching.")
            return;
        }else if(passwordRef.current && passwordRef.current?.value?.length < 6)
        {
            setValidation("Password length should be 6 or more than 6.")
            return;
        }else if(mobileNumberRef.current && !/^\d+$/.test( mobileNumberRef.current?.value ?? '') && mobileNumberRef.current?.value.trim() !== "" &&  mobileNumberRef.current?.value?.length !== 10)
        {
            console.log("mobile")
            setValidation("Mobile Number should be numbers and length should be 10")
            return;
        }
        const formData = {
            Name: nameRef.current?.value,
            Email: emailRef.current?.value,
            Mobile: mobileNumberRef.current?.value,
            Password: passwordRef.current?.value
        }
        setValidation('');
        const data : string = localStorage.getItem('UserData') ?? ""; // Null Coalescing
        const parsedData = data && JSON.parse(data);
        if(parsedData[emailRef.current?.value ?? ''])
        {
            setValidation("This Email is already Registered. Please Login");
        }
        else
        {
            const presentData = {...parsedData, [emailRef.current?.value ?? "Default_Email"] :formData};
            localStorage.setItem('UserData',JSON.stringify(presentData));
            if(nameRef.current)  nameRef.current.value = '';
            if(emailRef.current)  emailRef.current.value = '';
            if(mobileNumberRef.current)  mobileNumberRef.current.value = '';
            if(passwordRef.current)  passwordRef.current.value = '';
            if(confirmPasswordRef.current)  confirmPasswordRef.current.value = '';
            Dispatch(toggle(0));
            console.log("success!!")
        }
        
  }

  return (
    <div className="rounded-4xl p-12 bg-gradient-to-r from-black to-gray-500">
        <form onSubmit={handleSignUp}>
            <h1 className="text-center text-2xl font-extrabold mb-2">SIGNUP</h1>
            <InputField label="Name" type="text" placeholder="Give Name" ref={nameRef}/>
            <InputField label="Email" type="text" placeholder="Give Email" ref={emailRef}/>
            <InputField label="Mobile Number" type="text" placeholder="Give Mobile Number" ref={mobileNumberRef}/>
            <InputField label="Password" type="password" placeholder="Give Password" ref={passwordRef}/>
            <InputField label="Confirm Password" type="password" placeholder="Give Password" ref={confirmPasswordRef}/>
            <h3 className="font-bold text-red-700 mt-5">{validation}</h3>
            <Button click={handleSignUp} content="Sign Up"></Button>
            <div className="flex flex-row justify-center mt-4"><p className="mr-3">Already have account?</p> <p onClick={()=>Dispatch(toggle(0))}  className="text-blue-400 cursor-pointer hover:text-blue-600">Login</p></div>
        </form>
    </div>
  )
}
