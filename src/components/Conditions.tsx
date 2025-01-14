/**
 * Project Name: PlantKeeper
 *
 * @created 28-08-2024
 * @file Conditions.tsx
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

import {LuDroplet} from "react-icons/lu";
import {FiSun} from "react-icons/fi";
import {FaTemperatureHalf} from "react-icons/fa6";

interface ConditionsProps {
    title: string | undefined | null;
    // humidity of the plant
    humidity: string | undefined | null;
    // light of the plant
    light: string | undefined | null;
    // temperature of the plant
    temperature: string | undefined | null;
}

// Update Conditions component to handle null values
const Conditions: React.FC<ConditionsProps> = ({
                                                   title,
                                                   humidity,
                                                   light,
                                                   temperature
                                               }) => {
    return (
        <div className="flex flex-col items-start justify-between float-left w-full">
            <h2 className="text-3xl mb-2" style={{fontFamily: 'judson'}}>{title}</h2>
            <div className="flex flex-row items-center justify-between float-left w-full">
                <div className="flex items-center text-2xl">
                    <LuDroplet className="text-4xl"/>
                    <p className="ml-2 text-2xl" style={{fontFamily: 'jura'}}>{humidity !== null ? `${humidity}` : '-'}%</p>
                </div>
                <div className="flex flex-row items-center text-2xl">
                    <FiSun className="text-4xl"/>
                    <p className="ml-2 text-2xl" style={{fontFamily: 'jura'}}>{light !== null ? `${light}` : '-'} LUX</p>
                </div>
                <div className="flex flex-row items-center text-2xl">
                    <FaTemperatureHalf className="text-4xl"/>
                    <p className="ml-2 text-2xl" style={{fontFamily: 'jura'}}>{temperature !== null ? `${temperature}` : '-'}°C</p>
                </div>
            </div>
        </div>
    );
}

export default Conditions;