/**
 * Project Name: PlantKeeper
 *
 * @created 29/08/2024
 * @file Plants.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */
import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import AuthNavbar from "../components/AuthNavbar";
import RoundedButton from "../components/RoundedButton";
import PlantDescription from "../components/PlantDescription";
import Cookies from 'js-cookie';
import {API_URL, USER_PLANTS_LINKED_GENERAL_PLANTS} from "../constants";
import {UserPlantLinkedToGeneralPlant} from "../types";

function Plants() {
    const [plants, setPlants] = useState<UserPlantLinkedToGeneralPlant[]>([]);
    const navigate = useNavigate();

    const handleAddPlantClick = () => {
        navigate('/addplant');
    }

    const getPlants = useCallback(() => {
        axios.get(API_URL + USER_PLANTS_LINKED_GENERAL_PLANTS, {headers: {Authorization: `Bearer ${Cookies.get('token')}`}})
            .then((response) => {
                const userData = response.data;
                setPlants(userData);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        getPlants();
    }, [getPlants]);

    return (
        <div className="flex flex-col">
            <AuthNavbar></AuthNavbar>
            <div className="flex flex-row my-8 mx-12 items-center justify-between">
                <h2 className="text-2xl font-bold">My Plants</h2>
                <div className="text-lg">
                    <RoundedButton text="Add Plant" textColor="text-gray-50" bgColor="bg-[#205712]"
                                   onClick={handleAddPlantClick}></RoundedButton>
                </div>
            </div>
            <div className="mx-12">
                {plants.map(plant => (
                    <div key={plant.plantId} className="mb-8">
                        <PlantDescription image={require("../figures/" + plant.generalPlantImage)} name={plant.plantName}
                                          description={plant.plantRemark} humidity={plant.sensorHumidity !== null ? String(plant.sensorHumidity) : null}
                                          light={plant.sensorLight !== null ? String(plant.sensorLight) : null} temperature={plant.sensorTemperature !== null ? String(plant.sensorTemperature) : null}
                                          temperatureOk={((plant.sensorTemperature < plant.generalPlantTemperatureMax) && (plant.sensorTemperature > plant.generalPlantTemperatureMin)) || (plant.sensorTemperature === null)}
                                          humidityOk={((plant.sensorHumidity > plant.generalPlantHumidityMin) && (plant.sensorHumidity < plant.generalPlantHumidityMax)) || (plant.sensorHumidity === null)}
                                          lightOk={((plant.sensorLight > plant.generalPlantLightMin) && (plant.sensorLight < plant.generalPlantLightMax)) || (plant.sensorLight === null)}
                                          plantId={plant.plantId}></PlantDescription>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plants;
