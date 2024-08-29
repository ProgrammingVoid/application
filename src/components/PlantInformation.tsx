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
    name: string;
    // type of the plant
    type: string;
    // humidity of the plant
    humidity: string;
    // light of the plant
    light: string;
    // temperature of the plant
    temperature: string;
    // optimal humidity of the plant
    optimalHumidity: string;
    // optimal light of the plant
    optimalLight: string;
    // optimal temperature of the plant
    optimalTemperature: string;
}

const PlantInformation: React.FC<PlantInformationProps> = ({
                                                               name,
                                                               type,
                                                               humidity,
                                                               light,
                                                               temperature,
                                                               optimalHumidity,
                                                               optimalLight,
                                                               optimalTemperature
                                                           }) => {
    return (
        <div className="flex flex-col items-start justify-between">
            <h1 className="text-5xl m-2 italic" style={{fontFamily: 'judson'}}>
                {name} ({type})
            </h1>
            <Conditions title="Current conditions" humidity={humidity} light={light} temperature={temperature}/>
            <Conditions title="Optimal conditions" humidity={optimalHumidity} light={optimalLight} temperature={optimalTemperature}/>
        </div>
    );
}

export default PlantInformation;