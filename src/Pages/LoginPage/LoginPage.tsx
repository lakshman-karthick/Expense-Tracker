import Expenses from '../../assets/Expenses.jpg'
import {LoginForm} from '../../Components/LoginForm'
import { Signup } from '../../Components/Signup'
import { rootState } from '../../Redux/store'
import { useSelector } from 'react-redux'

const LoginPage = () => {
    const LoginToggle = useSelector((state: rootState) => (state.loginToggle.value))
  return (
        <div className='flex-1 flex justify-between items-center pl-30 pr-30 bg-gradient-to-r from-black to-gray-500 '>
            <img src={Expenses} className='rotate-4  rounded-2xl border-2 border-transparent hover:border-black hover:shadow-[black] transition-all duration-300'  alt='expenses'></img>
            <div>{LoginToggle === 0 ?<LoginForm/>:<Signup/>}</div>
        </div>
  )
}

export default LoginPage
