import React, {useEffect, useState} from 'react'
import PlantForm from "../components/PlantForm";
import axios from "axios";
import {API_URL, USER_PLANTS_URL, USER_SENSORS_URL} from "../constants";
import Cookies from 'js-cookie';
import AuthNavbar from "../components/AuthNavbar";
import {SensorInfo} from "../types";

function AddPlant() {
    const [sensorInfos, setSensorInfos] = useState<SensorInfo[]>([]);
    useEffect(() => {



        axios.get(API_URL + USER_SENSORS_URL )
            .then((response) => { const sensors = response.data;
                const sensorInfo = sensors.map((sensor: { name: string, id: number}) => ({name: sensor.name, id: sensor.id}));
                setSensorInfos(sensorInfo);});

    }, []);
    return (
        <div>
            <AuthNavbar/>

            <div className={"flex flex-row justify-center mt-24"}>
                <PlantForm plantTypeOptions={['Monstera']} sensorOptions={sensorInfos}/>
            </div>
        </div>
    )
}

export default AddPlant
