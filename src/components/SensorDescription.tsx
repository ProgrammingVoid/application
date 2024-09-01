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
import {UpdateButton} from "./UpdateButton";
import {DeleteButton} from "./DeleteButton";
import {API_URL, PLANT_URL, SENSOR_URL} from "../constants";
import {useNavigate} from "react-router-dom";

interface sensorProps {
    info: SensorLinkedToPlant;
}

const SensorDescription: React.FC<sensorProps> = (sensor) => {

    const navigate = useNavigate();

    const handleUpdateClick = () => {
        navigate("/updatesensor", {state: {sensorId: sensor.info.sensorId}});
    }

    return (<div className="flex border-4 box-content w-full h-fit rounded-xl">
            <MdSensors size={200} className="m-8"/>
            <div className="flex flex-col m-8 w-full justify-between">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-3xl font-semibold text-left">{sensor.info.sensorName}</p>
                    <div className="flex flex-row items-center text-3xl ml-auto">
                        <div className="mr-3">
                            <UpdateButton handleUpdate={handleUpdateClick}/>
                        </div>
                        <div>
                            <DeleteButton endpoint={API_URL + SENSOR_URL + "/" + sensor.info.sensorId}/>
                        </div>
                    </div>
                </div>
                <p className="text-lg text-left my-3 italic text-gray-500">{sensor.info.sensorRemark}</p>
                <p className="text-lg text-left my-3">Assigned to plant: {sensor.info.plantName ?
                    <Link className={"link-hover"} to="/Info" state={{plantId: sensor.info.plantId}}
                    >{sensor.info.plantName} </Link>
                    : "none"} </p>
                <p className={"text-lg text-left my-3"}>Id: {sensor.info.sensorId}</p>
                <div className="flex flex-row justify-between items-center"></div>
            </div>
        </div>
    );
}

export default SensorDescription;
