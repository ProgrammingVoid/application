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
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    useEffect(() => {

        axios.get(API_URL + USER_SENSOR_LINKED_PLANTS, {headers: {Authorization: `Bearer ${Cookies.get('token')}`}})
            .then((response) => {
                const sensors = response.data
                console.log(sensors)
                setSensorInfos(sensors.filter((sensor: SensorLinkedToPlant) => sensor.plantId === null).map((sensor: SensorLinkedToPlant) => ({
                    id: sensor.sensorId,
                    name: sensor.sensorName
                })));

                setLoading2(false);
            })
        axios.get(API_URL + GENERAL_PLANTS_URL)
            .then((response) => {
                setPlantTypes(response.data)
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, []);

    if(loading || loading2) {
        return (
            <div className="h-full w-full flex justify-center items-center">
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen w-full flex flex-col items-center">
            <div className="w-full">
                <AuthNavbar/>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow min-h-0">
                <div className="m-8 flex flex-col justify-center items-center w-full h-full">
                    <PlantForm plantTypeOptions={plantTypes} sensorOptions={sensorInfos}></PlantForm>
                </div>
            </div>
        </div>
    )
}

export default AddPlant
