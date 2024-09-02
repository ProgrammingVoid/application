import HomeButton from "./HomeButton";
import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";
import { MdSensors } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineLogout } from "react-icons/hi";

const AuthNavbar = () => {
    return (
        <div className="flex flex-row bg-[#A3C9A8] justify-between items-center">
            <div className="flex flex-row justify-between my-2 mx-3">
                <img src={require("../figures/logo.png")} alt="logo" className="h-16 my-2 mx-2" />
                <p className="text-gray-50 text-5xl italic self-end" style={{ fontFamily: 'jsmath-cmti10' }}>PlantKeeper.ch</p>
            </div>
            <div className="ml-auto mx-6">
                <ul className="flex flex-row justify-between items-center">
                    <li className="p-3 text-2xl flex items-center">
                        <HomeButton />
                    </li>
                    <li className="p-3 text-2xl flex items-center">
                        <div className="dropdown dropdown-hover dropdown-end">
                            <div tabIndex={0} role="button" className="m-1">
                                <FaUserCircle size={48} className={"text-[#205712]"} />
                            </div>
                            <ul tabIndex={0}
                                className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-white">
                                <li>
                                    <Link to={"/plants"} className="flex items-center p-2">
                                        <RiPlantFill className="mr-2"/>
                                        My plants
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/sensors"} className="flex items-center p-2">
                                        <MdSensors className="mr-2"/>
                                        My sensors
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/profile"} className="flex items-center p-2">
                                        <FaRegUser className="mr-2"/>
                                        My profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/logout"} className="flex items-center p-2">
                                        <HiOutlineLogout className="mr-2"/>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AuthNavbar;