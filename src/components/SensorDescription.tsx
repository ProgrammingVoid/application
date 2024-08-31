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

import {MdSensors} from "react-icons/md";

interface SensorDescriptionProps {
    name: string,
    description: string,
    id: number,
    plantName: string | null,
}

const SensorDescription: React.FC<SensorDescriptionProps> = ({
                                                               name,
                                                               description,
                                                               id,
                                                                plantName
                                                           }) => {



    return (<div className="flex border-4 box-content w-full h-fit rounded-xl">
            <MdSensors size={200} className="m-8"/>
    <div className="flex flex-col m-8 w-full justify-between">

    <p className="text-3xl font-semibold text-left">{name}</p>
        <p className="text-lg text-left my-3 italic text-gray-500">{description}</p>
        <p className="text-lg text-left my-3">Assigned to plant: {plantName ? plantName : "none"}</p>
        <p className={"text-lg text-left my-3"}>Id: {id}</p>
        <div className="flex flex-row justify-between items-center">




        </div>
        </div>
        </div>

);
}

export default SensorDescription;
