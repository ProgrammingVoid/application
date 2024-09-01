import React, {useEffect, useState} from 'react'
import PlantForm from "../components/PlantForm";
import axios from "axios";
import {API_URL, GENERAL_PLANTS_URL, USER_SENSOR_LINKED_PLANTS} from "../constants";
import AuthNavbar from "../components/AuthNavbar";
import {GeneralPlant, SensorInfo, SensorLinkedToPlant} from "../types";
import Cookies from "js-cookie";

function AddPlant() {
    const [sensorInfos, setSensorInfos] = useState<SensorInfo[]>([]);
    const [plantTypes, setPlantTypes] = useState<GeneralPlant[]>([]);

    useEffect(() => {

        axios.get(API_URL + USER_SENSOR_LINKED_PLANTS, {headers: {Authorization: `Bearer ${Cookies.get('token')}`}})
            .then((response) => {
                const sensors = response.data
                console.log(sensors)
                setSensorInfos(sensors.filter((sensor: SensorLinkedToPlant) => sensor.plantId === null).map((sensor: SensorLinkedToPlant) => ({id: sensor.sensorId, name: sensor.sensorName})));
            })
        axios.get(API_URL + GENERAL_PLANTS_URL)
            .then((response) => setPlantTypes(response.data))
            .catch(error => console.error(error));
    }, []);
    return (

        <div>
            <AuthNavbar/>

            <div className={"flex flex-row justify-center mt-24"}>
                <PlantForm plantTypeOptions={plantTypes} sensorOptions={sensorInfos}/>

 
            </div>
        </div>
    )
}

export default AddPlant
