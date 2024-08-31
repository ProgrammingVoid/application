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
import React from "react";
import {Link} from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import {RiPlantFill} from "react-icons/ri";
import {MdSensors} from "react-icons/md";
import {HiOutlineLogout} from "react-icons/hi";



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
                    <li className="p-3 text-2xl flex items-center">
                        <HomeButton/>
                    </li>
                    <li className="p-3 text-2xl flex items-center">
                        <div className="dropdown dropdown-hover dropdown-end">
                            <div tabIndex={0} role="button" className=" m-1">
                                <FaUserCircle size={48} className={"text-[#205712]"}/>
                            </div>
                            <ul tabIndex={0}
                                className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-white">
                                <li>
                                    <
                                        div className={"flex"}><
                                        RiPlantFill/>
                                        <Link to={"/plants"}>My plants</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className={"flex"}>
                                        <MdSensors/>
                                        <Link to={"/sensors"}>My sensors</Link>
                                    </div>
                                </li>

                                <li>
                                    <div className={"flex"}>
                                        <HiOutlineLogout />
                                    <Link to={"/"}>Logout</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </li>
                </ul>
            </div>
        </div>)
}

export default AuthNavbar;