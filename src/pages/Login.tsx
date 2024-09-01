import React from 'react'
import LoginForm from "../components/LoginForm";
import NotAuthNavbar from "../components/NotAuthNavbar";
function Login() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center">
            <div className="w-full">
                <NotAuthNavbar/>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow min-h-0">
                <div className="m-14 flex flex-col justify-center items-center w-full h-full">
                    <LoginForm></LoginForm>
                </div>
            </div>
        </div>
    )
}

export default Login
