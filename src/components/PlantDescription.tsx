/**
 * Project Name: PlantKeeper
 *
 * @created 27-08-2024
 * @file PlantDescription.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */

import React from "react";
import {useNavigate} from "react-router-dom";
import RoundedButton from "./RoundedButton";
import {Types} from "../types";

import {LuDroplet} from "react-icons/lu";
import {FiSun} from "react-icons/fi";
import {FaTemperatureHalf} from "react-icons/fa6";
// smiling smiley
import { PiSmiley } from "react-icons/pi";
// straight face smiley
import { PiSmileyMeh } from "react-icons/pi";
// frwoning smiley
import { PiSmileySad } from "react-icons/pi";

interface PlantDescriptionProps {
    image: string;
    name: string;
    description: string;
    humidity: string;
    light: string;
    temperature: string;
    // true if the humidity of the plant is good, false otherwise
    humidityOk: boolean;
    // true if the light of the plant is good, false otherwise
    lightOk: boolean;
    // true if the temperature of the room is good, false otherwise
    temperatureOk: boolean;
    plantState: Types;
}

const PlantDescription: React.FC<PlantDescriptionProps> = ({
                                                               image,
                                                               name,
                                                               description,
                                                               humidity,
                                                               light,
                                                               temperature,
                                                               humidityOk,
                                                               lightOk,
                                                               temperatureOk,
                                                               plantState
                                                           }) => {

    const navigate = useNavigate();
    const handleMoreInfoClick = () => {
        navigate("/info");
    };

    // get the icon corresponding to the plant state
    const getPlantStateIcon = () => {
        switch (plantState) {
            case Types.HEALTHY:
                return <PiSmiley />;
            case Types.KEEP_AN_EYE:
                return <PiSmileyMeh />;
            case Types.NEEDS_ATTENTION:
                return <PiSmileySad />;
            default:
                return null;
        }
    };

    return (<div className="flex border-4 box-content w-fit h-fit items-center m-8 rounded-xl">
            <img src={image} alt={name} width="200" height="200" className="m-8 border-2"/>
            <div className="flex flex-col m-8">
                <p className="text-3xl font-semibold text-left">{name}</p>
                <p className="text-lg text-left my-3">{description}</p>
                <div className="flex flex-row justify-between items-center">
                    <RoundedButton text="More info" textColor="text-black" bgColor="bg-gray-300"
                                   onClick={handleMoreInfoClick}></RoundedButton>
                    <div className="flex flex-row items-center text-2xl">
                        <LuDroplet className={`mx-2 ${humidityOk ? 'text-black' : 'text-red-500'}`}/>
                        <p>{humidity}%</p>
                    </div>
                    <div className="flex flex-row items-center text-2xl">
                        <FiSun className={`mx-2 ${lightOk ? 'text-black' : 'text-red-500'}`}/>
                        <p>{light} UV</p>
                    </div>
                    <div className="flex flex-row items-center text-2xl">
                        <FaTemperatureHalf className={`mx-2 ${temperatureOk ? 'text-black' : 'text-red-500'}`}/>
                        <p>{temperature}°</p>
                    </div>
                    <div className="flex flex-row items-center text-5xl">
                        {getPlantStateIcon()}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PlantDescription;
