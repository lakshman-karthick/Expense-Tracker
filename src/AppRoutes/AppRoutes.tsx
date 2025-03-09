import {Route,Routes} from "react-router-dom"
import { LoginPage } from '../Pages/LoginPage'
import { ContentPage } from '../Pages/ContentPage'
import { Titlebar } from "../Components/Titlebar"
import { useState } from "react"
const AppRoutes = () => {
    const [loginflag,setLoginflag] = useState<number>(0);
  return (
    <div className="flex flex-col h-screen">
        <Titlebar loginflag={loginflag} setLoginflag={setLoginflag} />
        <Routes>
            <Route path="/" element={<LoginPage loginflag={loginflag} setLoginflag={setLoginflag}/>}></Route>
            <Route path="/tracker" element={<ContentPage/>}></Route>
        </Routes>
    </div>
  )
}

export default AppRoutes