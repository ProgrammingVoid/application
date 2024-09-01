import SensorDescription from "../components/SensorDescription";
import AuthNavbar from "../components/AuthNavbar";
import RoundedButton from "../components/RoundedButton";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_URL, USER_SENSOR_LINKED_PLANTS} from "../constants";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import {SensorLinkedToPlant} from "../types";


function Sensors() {
    const [sensors, setSensors] = useState<SensorLinkedToPlant[]>([]);
    const navigate = useNavigate();
    const handleAddSensorClick = () => {
        navigate('/addsensor');
    }

    useEffect(() => {
            axios.get(API_URL + USER_SENSOR_LINKED_PLANTS, {headers: {Authorization: `Bearer ${Cookies.get('token')}`}})
                .then((response) => {
                   const sensorsData = response.data;
                   console.log(sensorsData);
                    setSensors(sensorsData);
                })
                .catch(error => console.error(error));
        }
        , []);
    return (
        <div>
            <AuthNavbar></AuthNavbar>
            <div className="flex flex-row my-8 mx-12 items-center justify-between">
                <h2 className="text-2xl font-bold">My Sensors</h2>
                <div className="text-lg">
                    <RoundedButton text="Add Sensor" textColor="text-gray-50" bgColor="bg-[#205712]"
                                   onClick={handleAddSensorClick}></RoundedButton>
                </div>
            </div>
            <div className="mx-12">
                {sensors.map(sensor => (
                    <div key={sensor.sensorId} className="mb-8">
                        <SensorDescription  info={sensor}/>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default Sensors;