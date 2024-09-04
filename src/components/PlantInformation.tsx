/**
 * Project Name: PlantKeeper
 *
 * @created 28-08-2024
 * @file PlantInformation.tsx
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
import Conditions from "./Conditions";

interface PlantInformationProps {
    // name of the plant
    name: string | undefined | null;
    // type of the plant
    type: string | undefined | null;
    // humidity of the plant
    humidity: string | undefined | null;
    // light of the plant
    light: string | undefined | null;
    // temperature of the room where the plant is
    temperature: string | undefined | null;
    // humidity min of the plant
    humidityMin: string | undefined | null;
    // humidity max of the plant
    humidityMax: string | undefined | null;
    // light min of the plant
    lightMin: string | undefined | null;
    // light max of the plant
    lightMax: string | undefined | null;
    // temperature min of the plant
    temperatureMin: string | undefined | null;
    // temperature max of the plant
    temperatureMax: string | undefined | null;
}

const PlantInformation: React.FC<PlantInformationProps> = ({
                                                               name,
                                                               type,
                                                               humidity,
                                                               light,
                                                               temperature,
                                                               humidityMin,
                                                               humidityMax,
                                                               lightMin,
                                                               lightMax,
                                                               temperatureMin,
                                                               temperatureMax,
                                                           }) => {
    const optimalHumidity = humidityMin && humidityMax ? `${humidityMin}-${humidityMax}` : "loading...";
    const optimalLight = lightMin && lightMax ? `${lightMin}-${lightMax}` : "loading...";
    const optimalTemperature = temperatureMin && temperatureMax ? `${temperatureMin}-${temperatureMax}` : "loading...";

    return (
        <div className="flex flex-col items-start justify-between w-full">
            <h1 className="text-5xl m-2 italic" style={{fontFamily: 'judson'}}>
                {name} ({type})
            </h1>
            <Conditions title="Current conditions" humidity={humidity !== null ? `${humidity}%` : '-'}
                        light={light !== null ? `${light} UV` : '-'}
                        temperature={temperature !== null ? `${temperature}°` : '-'}/>
            <Conditions title="Optimal conditions" humidity={optimalHumidity} light={optimalLight} temperature={optimalTemperature}/>
        </div>
    );
}

export default PlantInformation;