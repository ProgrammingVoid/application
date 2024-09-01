import React, {useEffect, useState} from 'react'
import PlantForm from "../components/PlantForm";
import axios from "axios";
import {API_URL, GENERAL_PLANTS_URL, USER_SENSORS_URL} from "../constants";
import AuthNavbar from "../components/AuthNavbar";
import {GeneralPlant, SensorInfo} from "../types";
import Cookies from "js-cookie";

function AddPlant() {
    const [sensorInfos, setSensorInfos] = useState<SensorInfo[]>([]);
    const [plantTypes, setPlantTypes] = useState<GeneralPlant[]>([]);

    useEffect(() => {

        axios.get(API_URL + USER_SENSORS_URL, {headers: {Authorization: `Bearer ${Cookies.get('token')}`}})
            .then((response) => setSensorInfos(response.data));
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
