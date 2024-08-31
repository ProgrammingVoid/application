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
    // temperature of the plant
    temperature: string | undefined | null;
    // optimal humidity of the plant
    optimalHumidity: string | undefined | null;
    // optimal light of the plant
    optimalLight: string | undefined | null;
    // optimal temperature of the plant
    optimalTemperature: string | undefined | null;
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
        <div className="flex flex-col items-start justify-between w-full">
            <h1 className="text-5xl m-2 italic" style={{fontFamily: 'judson'}}>
                {name} ({type})
            </h1>
            <Conditions title="Current conditions" humidity={humidity} light={light} temperature={temperature}/>
            <Conditions title="Optimal conditions" humidity={optimalHumidity} light={optimalLight} temperature={optimalTemperature}/>
        </div>
    );
}

export default PlantInformation;