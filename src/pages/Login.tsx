import React from 'react'
import LoginForm from "../components/LoginForm";
import AuthNavbar from "../components/AuthNavbar";
function Login() {
    return (
        <div>
            <AuthNavbar/>
            <div className="flex justify-center items-center mt-32">
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login
