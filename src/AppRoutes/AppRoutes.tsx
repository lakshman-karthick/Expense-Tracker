import {Route,Routes} from "react-router-dom"
import { Titlebar } from "../Components/Titlebar"
import { useState ,lazy, Suspense  } from "react"
const LoginPage = lazy(() => import("../Pages/LoginPage"));
const ContentPage = lazy(() => import("../Pages/ContentPage"));

const AppRoutes = () => {
    const [loginflag,setLoginflag] = useState<number>(0);
  return (
    <div className="flex flex-col h-screen">
        <Titlebar loginflag={loginflag} setLoginflag={setLoginflag} />
        <Suspense fallback={<p>Loading Page...</p>}>
        <Routes>
            <Route path="/" element={<LoginPage loginflag={loginflag} setLoginflag={setLoginflag}/>}></Route>
            <Route path="/tracker" element={<ContentPage/>}></Route>
        </Routes>
        </Suspense>
    </div>
  )
}

export default AppRoutes