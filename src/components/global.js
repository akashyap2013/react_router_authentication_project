import { Outlet, Link } from "react-router-dom"
import AuthConsumer from '../hooks/auth'
/** All Components */

export const HomePage = () => {
    const auth = AuthConsumer();
    console.log(auth)
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
    return (
        <div>
            <h1>Login Component</h1>
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
    return (
       <nav className="flex bg-indigo-500 text-gray-50 gap-4 justify-center">
            <Link to={'/'}>Home</Link> 
            <Link to={'/login'}>Login</Link> 
            <Link to={'/dashboard'}>Dashboard</Link> 
            <Link to={'/settings'}>Settings</Link> 
       </nav>
    )
}

export const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard Component</h1>
        </div>
    )
}

export const Settings = () => {
    return (
        <div>
            <h1>Settings Component</h1>
        </div>
    )
}