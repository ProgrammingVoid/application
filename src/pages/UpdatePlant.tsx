/**
 * Project Name: PlantKeeper
 *
 * @created 01-09-2024
 * @file UpdatePlant.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */
import React, {useEffect, useState} from "react";
import UpdatePlantForm from "../components/UpdatePlantForm";
import {GeneralPlant, SensorInfo, SensorLinkedToPlant} from "../types";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {API_URL, GENERAL_PLANTS_URL, USER_SENSOR_LINKED_PLANTS} from "../constants";
import Cookies from "js-cookie";
import AuthNavbar from "../components/AuthNavbar";

function UpdatePlant() {

    const location = useLocation();
    const plantId = location.state.plantId;

    const [sensorInfos, setSensorInfos] = useState<SensorInfo[]>([]);
    const [plantTypes, setPlantTypes] = useState<GeneralPlant[]>([]);

    useEffect(() => {

        axios.get(API_URL + USER_SENSOR_LINKED_PLANTS, {headers: {Authorization: `Bearer ${Cookies.get('token')}`}})
            .then((response) => {
                const sensors = response.data
                console.log(sensors)
                setSensorInfos(sensors.filter((sensor: SensorLinkedToPlant) => sensor.plantId === null || sensor.plantId === plantId).map((sensor: SensorLinkedToPlant) => ({
                    id: sensor.sensorId,
                    name: sensor.sensorName
                })));
            })
        axios.get(API_URL + GENERAL_PLANTS_URL)
            .then((response) => setPlantTypes(response.data))
            .catch(error => console.error(error));
    }, [plantId]);

    return (
        <div className="min-h-screen w-full flex flex-col items-center">
            <div className="w-full">
                <AuthNavbar/>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow min-h-0">
                <div className="m-8 flex flex-col justify-center items-center w-full h-full">
                    <UpdatePlantForm plantId={plantId} plantTypeOptions={plantTypes} sensorOptions={sensorInfos}/>
                </div>
            </div>
        </div>
    );
}

export default UpdatePlant;