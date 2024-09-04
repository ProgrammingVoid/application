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
import {PiSmiley, PiSmileyMeh, PiSmileySad} from "react-icons/pi";
import {UpdateButton} from "./UpdateButton";
import {DeleteButton} from "./DeleteButton";
import {API_URL, PLANT_URL} from "../constants";

interface PlantDescriptionProps {
    plantId: number,
    image: string;
    name: string;
    description: string;
    humidity: string | null;
    light: string | null;
    temperature: string | null;
    humidityOk: boolean;
    lightOk: boolean;
    temperatureOk: boolean;
}

const PlantDescription: React.FC<PlantDescriptionProps> = ({
                                                               plantId,
                                                               image,
                                                               name,
                                                               description,
                                                               humidity,
                                                               light,
                                                               temperature,
                                                               humidityOk,
                                                               lightOk,
                                                               temperatureOk
                                                           }) => {

    const navigate = useNavigate();
    const handleMoreInfoClick = () => {
        navigate("/info", {state: {plantId: plantId}});
    };
    const handleUpdateClick = () => {
        navigate("/updateplant", {state: {plantId: plantId}});
    }

    const calculatePlantState = () => {
        const conditions = [humidityOk, lightOk, temperatureOk];
        const falseCount = conditions.filter(condition => !condition).length;

        if (falseCount === 0) {
            return Types.HEALTHY;
        } else if (falseCount === 1) {
            return Types.KEEP_AN_EYE;
        } else {
            return Types.NEEDS_ATTENTION;
        }
    };

    const plantState = calculatePlantState();

    const getPlantStateIcon = () => {
        switch (plantState) {
            case Types.HEALTHY:
                return <PiSmiley className="text-green-700" />;
            case Types.KEEP_AN_EYE:
                return <PiSmileyMeh className="text-orange-700" />;
            case Types.NEEDS_ATTENTION:
                return <PiSmileySad className="text-red-700" />;
            default:
                return null;
        }
    };

    return (
        <div className="flex border-4 box-content w-full h-fit rounded-xl">
            <img src={image} alt={name} width="200" height="200" className="m-8 border-2" />
            <div className="flex flex-col m-8 w-full justify-between">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-3xl font-semibold text-left">{name}</p>
                    <div className="flex flex-row items-center text-3xl ml-auto">
                        <div className="mr-3">
                            <UpdateButton handleUpdate={handleUpdateClick} />
                        </div>
                        <div>
                            <DeleteButton endpoint={API_URL + PLANT_URL + "/" + plantId} />
                        </div>
                    </div>
                </div>
                <p className="text-lg text-left my-3">{description}</p>
                <div className="flex flex-row justify-between items-center">
                    <RoundedButton text="More info" textColor="text-black" bgColor="bg-gray-300" onClick={handleMoreInfoClick} />
                    <div className="flex flex-row items-center text-2xl">
                        <LuDroplet className={`mx-2 ${humidityOk ? 'text-black' : 'text-red-500'}`} />
                        <p>{humidity !== null ? `${humidity}%` : '-'}</p>
                    </div>
                    <div className="flex flex-row items-center text-2xl">
                        <FiSun className={`mx-2 ${lightOk ? 'text-black' : 'text-red-500'}`} />
                        <p>{light !== null ? `${light} LUX` : '-'}</p>
                    </div>
                    <div className="flex flex-row items-center text-2xl">
                        <FaTemperatureHalf className={`mx-2 ${temperatureOk ? 'text-black' : 'text-red-500'}`} />
                        <p>{temperature !== null ? `${temperature}°C` : '-'}</p>
                    </div>
                    <div className="flex flex-row items-center text-6xl">
                        {getPlantStateIcon()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlantDescription;
