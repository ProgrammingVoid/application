import SensorDescription from "../components/SensorDescription";
import AuthNavbar from "../components/AuthNavbar";
import RoundedButton from "../components/RoundedButton";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {API_URL, USER_PLANTS_URL, USER_SENSORS_URL} from "../constants";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

interface Sensor {
    id: number;
    name: string;
    remark: string;
    plantName: string | null;
    plantId: number;


}

interface Plant {
    id: number,
    name: string,
    sensor: {
        id: number,
    }
}

function Sensors() {
    const [sensors, setSensors] = useState<Sensor[]>([]);
    const navigate = useNavigate();
    const plantsRef = useRef<Plant[]>([]);
    const handleAddSensorClick = () => {
        navigate('/addsensor');
    }

    const mapSensorsToPlants = (sensors: Sensor[], plants: Plant[]) => {
        return sensors.map(sensor => {
            const plant = plants.find(plant => plant.sensor.id === sensor.id);

            return {
                ...sensor,
                plantName: plant ? plant.name : null,
            };
        });
    };

    useEffect(() => {
        axios.get(API_URL + USER_PLANTS_URL, { headers: { Authorization: `Bearer ${Cookies.get('token')}` } })
            .then((response) => {
                plantsRef.current = response.data;
                return axios.get(API_URL + USER_SENSORS_URL, { headers: { Authorization: `Bearer ${Cookies.get('token')}` } });
            })
            .then((response) => {
                const sensorsData = response.data;
                const mappedSensors = mapSensorsToPlants(sensorsData, plantsRef.current);
                setSensors(mappedSensors);
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