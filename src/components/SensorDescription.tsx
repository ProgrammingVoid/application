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
import {Link} from "react-router-dom";
import {SensorLinkedToPlant} from "../types";

interface sensorProps {
    info: SensorLinkedToPlant;
}
const SensorDescription: React.FC<sensorProps> = (sensor) => {


    return (<div className="flex border-4 box-content w-full h-fit rounded-xl">
            <MdSensors size={200} className="m-8"/>
    <div className="flex flex-col m-8 w-full justify-between">

    <p className="text-3xl font-semibold text-left">{sensor.info.sensorName}</p>
        <p className="text-lg text-left my-3 italic text-gray-500">{sensor.info.sensorRemark}</p>
        <p className="text-lg text-left my-3">Assigned to plant: {sensor.info.plantName ? <Link  className={"link-hover"} to="/Info" state={{plantId: sensor.info.plantId}}
                                                                                                        >{sensor.info.plantName} </Link>
         : "none"} </p>
            <p className={"text-lg text-left my-3"}>Id: {sensor.info.sensorId}</p>
            <div className="flex flex-row justify-between items-center">


            </div>
        </div>


    </div>

);
}

export default SensorDescription;
