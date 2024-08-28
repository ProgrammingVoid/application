/**
 * Project Name: PlantKeeper
 *
 * @created 28/08/2024
 * @file AuthNavbar.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */


import HomeButton from "./HomeButton";

import {FaRegUserCircle} from "react-icons/fa";

const AuthNavbar = () => {
    return (
        <div className="flex flex-row bg-[#A3C9A8] justify-between items-center">
            <div className="flex flex-row justify-between my-2 mx-3">
                <img src={require("../figures/logo.png")} alt="logo" className="h-16 my-2 mx-2"/>
                <p className="text-gray-50 text-5xl italic self-end"
                   style={{fontFamily: 'jsmath-cmti10'}}>PlantKeeper.ch</p>
            </div>
            <div className="ml-auto mx-6">
                <ul className="flex flex-row justify-between items-center">
                    <li className="p-3 text-2xl">
                        <HomeButton/>
                    </li>
                    <li className={"p-3 text-2xl"}>

                        <FaRegUserCircle size={40} className={"text-[#205712]"}/>
                    </li>
                </ul>
            </div>
        </div>)
}

export default AuthNavbar;