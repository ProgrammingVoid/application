import React from 'react'
import LoginForm from "../components/LoginForm";
import NotAuthNavbar from "../components/NotAuthNavbar";
function Login() {
    return (
        <div>
            <NotAuthNavbar/>
            <div className="flex justify-center items-center mt-32">
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login
