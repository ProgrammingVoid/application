/**
 * Project Name: PlantKeeper
 *
 * @created 01-09-2024
 * @file SignUp.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */
import React from 'react'
import NotAuthNavbar from "../components/NotAuthNavbar";
import SignUpForm from '../components/SignUpForm';


function SignUp() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center">
            <div className="w-full">
                <NotAuthNavbar/>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow min-h-0">
                <div className="m-14 flex flex-col justify-center items-center w-full h-full">
                    <SignUpForm></SignUpForm>
                </div>
            </div>
        </div>
    );
}

export default SignUp
