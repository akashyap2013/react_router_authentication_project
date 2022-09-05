import { Outlet, NavLink, useNavigate, useLocation, Navigate } from "react-router-dom"
import AuthConsumer from '../hooks/auth'
/** All Components */

export const HomePage = () => {
    const  [authed, dispatch] = AuthConsumer();
    return (
        <main>
            <h1 className="text-center my-3 bg-yellow-400 text-gray-700 w-40 mx-auto rounded">Authentication</h1>
            <Nav></Nav>
            <div className="flex justify-center text-center py-3">
                <Outlet></Outlet>
            </div>
        </main>
    )
}

export const LoginPage = () => {
    const  [authed, dispatch] = AuthConsumer();
    console.log(authed)
    let navigate = useNavigate()
    return (
        <div>
            <h1>This is the Login Page</h1>
            <button className="broder px-5 bg-indigo-500 text-gray-50 rounded"
            onClick={() => {
                dispatch({ type: "login"})
                navigate('/dashboard', { replace : true})
            }}
            >Login</button>
        </div>
    )
}

export const HomeContent = () => {
    return (
        <div>
            <h1>Home Content Component</h1>
        </div>
    )
}

export const Nav = () => {

    const [{ auth }] = AuthConsumer()

    function ActiveLink(props){
        return <NavLink 
            style={({ isActive }) => {
                return {
                    color: isActive ? '#1d2d44': ''
                };
            }}
            {...props}
        />
    }

    return (
       <nav className="flex bg-indigo-500 text-gray-50 gap-4 justify-center">
            <ActiveLink to={'/'}>Home</ActiveLink> 
            <ActiveLink to={'/login'}>Login</ActiveLink> 
            {
                auth ? (
                    <>
                        <ActiveLink to={'/dashboard'}>Dashboard</ActiveLink> 
                        <ActiveLink to={'/settings'}>Settings</ActiveLink> 
                    </>
                ) : <></>
            }
       </nav>
    )
}

export const Dashboard = () => {
    const  [,dispatch] = AuthConsumer();
    let navigate = useNavigate()
    return (
        <div>
            <h1>This is the Dashboard Component</h1>
            <button className="broder px-5 bg-indigo-500 text-gray-50 rounded"
            onClick={() => {
                dispatch({ type: "logout"})
                navigate('/login', { replace : true})
            }}
            >Logout</button>
        </div>
    )
}

export const Settings = () => {
    const  [,dispatch] = AuthConsumer();
    let navigate = useNavigate()
    return (
        <div>
            <h1>This is the Settings Component</h1>
            <button className="broder px-5 bg-indigo-500 text-gray-50 rounded"
            onClick={() => {
                dispatch({ type: "logout"})
                navigate('/login', { replace : true})
            }}
            >Logout</button>
        </div>
    )
}

export function RequireAuth({ children }){
    const [authed] = AuthConsumer()
    const location = useLocation()
    return authed.auth === true ? (
        children
    ) : (
        <Navigate to={"/login"} replace state={{ path: location.pathname}}></Navigate>
    );
}