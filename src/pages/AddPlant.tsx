import React, {useEffect, useState} from 'react'
import PlantForm from "../components/PlantForm";
import axios from "axios";
import {API_URL, USER_SENSORS_URL} from "../constants";
import AuthNavbar from "../components/AuthNavbar";
import {SensorInfo} from "../types";
import Cookies from "js-cookie";

function AddPlant() {
    const [sensorInfos, setSensorInfos] = useState<SensorInfo[]>([]);
    useEffect(() => {

        axios.get(API_URL + USER_SENSORS_URL, {headers: {Authorization: `Bearer ${Cookies.get('token')}`}})
            .then((response) => { const sensors = response.data;
                const sensorInfo = sensors.map((sensor: { name: string, id: number}) => ({name: sensor.name, id: sensor.id}));
                setSensorInfos(sensorInfo);});

    }, []);
    return (
        <div className="min-h-screen w-full flex flex-col items-center">
            <div className="w-full">
                <AuthNavbar/>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow min-h-0">
                <div className="m-14 flex flex-col justify-center items-center w-full h-full">
                    <PlantForm plantTypeOptions={["Monstera"]} sensorOptions={sensorInfos}></PlantForm>
                </div>
            </div>
        </div>
    )
}

export default AddPlant
