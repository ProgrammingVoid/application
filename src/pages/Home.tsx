/**
 * Project Name: PlantKeeper
 *
 * @created 29-08-2024
 * @file Home.tsx
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

function Home() {
    return (
        <div className="h-full">
            <NotAuthNavbar></NotAuthNavbar>
            <div className="flex flex-col justify-center items-center min-h-screen">
                <h1 className="text-8xl font-bold text-[#205712] mb-10">PlantKeeper</h1>
                <h3 className="text-3xl italic">Watch your plants thrive forever</h3>
            </div>
        </div>
    )
}

export default Home
