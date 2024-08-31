import SensorDescription from "../components/SensorDescription";
import AuthNavbar from "../components/AuthNavbar";
import RoundedButton from "../components/RoundedButton";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_URL, PLANT_URL, USER_SENSORS_URL} from "../constants";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

interface Sensor {
    id: number;
    name: string;
    remark: string;
    plantName: string | null;


}

function Sensors() {
    const [sensors, setSensors] = useState<Sensor[]>([]);
    const navigate = useNavigate();

    const handleAddSensorClick = () => {
        navigate('/addsensor');
    }
    useEffect(() => {

        axios.get(API_URL + USER_SENSORS_URL , { headers: { Authorization: `Bearer ${Cookies.get('token')}` } })
            .then((response) => { const sensorsData = response.data;


            axios.get(API_URL + PLANT_URL, { headers: { Authorization: `Bearer ${Cookies.get('token')}` } })
                .then((response) => {
                    const plantData = response.data;
                    sensorsData.plantName= plantData.name;
                    setSensors(sensorsData);
                })
                .catch(error => console.error(error));
            })
            .catch(error => console.error(error));

    }, []);
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
                    <div key={sensor.id} className="mb-8">
                        <SensorDescription plantName={sensor.plantName} id={sensor.id} description={sensor.remark} name={sensor.name}/>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default Sensors;