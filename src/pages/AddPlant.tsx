import React, {useEffect, useState} from 'react'
import PlantForm from "../components/PlantForm";
import axios from "axios";
import {API_URL, GLOBAL_PREFIX, USER_URL} from "../constants";
import Cookies from 'js-cookie';
import AuthNavbar from "../components/AuthNavbar";
function AddPlant() {
    const user = 1;
    const [sensorNames, setSensorNames] = useState<string[]>([]);
    useEffect(() => {


        const token = Cookies.get('token');
        axios.get(API_URL + GLOBAL_PREFIX + USER_URL + '/' + user, { headers: {"Authorization" : `Bearer ${token}`} })
            .then((response) => {console.log(response.data.sensors); const sensors = response.data.sensors;
                const names = sensors.map((sensor: { name: string }) => sensor.name);
                setSensorNames(names);});

    }, []);
    return (
        <div>
            <AuthNavbar/>

            <div className={"flex flex-row justify-center mt-24"}>
            <PlantForm plantTypeOptions={['Monstera']} sensorOptions={sensorNames}/>
            </div>
        </div>
    )
}

export default AddPlant
