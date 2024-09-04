import React, {useCallback, useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
import AuthNavbar from "../components/AuthNavbar";
import axios from "axios";
import {API_URL, GENERAL_PLANTS_URL, PLANT_URL} from "../constants";
import Cookies from "js-cookie";
import PlantInformation from "../components/PlantInformation";
import {GeneralPlant} from "../types";
import {UserPlant} from "../types";


function Info() {
    const location = useLocation();
    const plantId = location.state.plantId;
    const [plant, setPlant] = useState<UserPlant>();
    const [generalPlant, setGeneralPlant] = useState<Omit<GeneralPlant, 'plants'> | null>(null);
    const [loading, setLoading] = useState(true);

    const getPlant = useCallback(() => {
        axios.get(API_URL + PLANT_URL + "/" + plantId, {headers: {Authorization: `Bearer ${Cookies.get('token')}`}})
            .then((response) => {
                const plantData = response.data;
                setPlant(plantData);
            })
            .catch(error => console.error(error));
    }, [plantId]);

    useEffect(() => {
        getPlant();
    }, [getPlant]);

    useEffect(() => {
        if (plant) {
            axios.get(API_URL + GENERAL_PLANTS_URL + "/" + plant.generalPlantId,
                {headers: {Authorization: `Bearer ${Cookies.get('token')}`}})
                .then((response) => {
                    const generalPlant = response.data;
                    setGeneralPlant(generalPlant);
                    setLoading(false);
                    console.log(plant.sensor.light);
                });
        }
    }, [plant]);

    if(loading) {
        return (
            <div className="h-full w-full flex justify-center items-center">
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className="h-full w-full">
            <AuthNavbar></AuthNavbar>
            <div className="flex flex-col my-8 mx-12">
                <div className="flex flex-row mb-8">
                    <img src={require("../figures/" + generalPlant?.image)} className="mr-12 border-2 rounded-md"
                         alt={generalPlant?.type} width={250} height={250}/>
                    <PlantInformation name={plant?.name} type={generalPlant?.type}
                                      humidity={plant?.sensor?.humidity}
                                      light={plant?.sensor?.light}
                                      temperature={plant?.sensor?.temperature != null ? String(plant?.sensor?.temperature) : null}
                                      humidityMin={generalPlant?.humidityMin} humidityMax={generalPlant?.humidityMax}
                                      lightMin={generalPlant?.lightMin} lightMax={generalPlant?.lightMax}
                                      temperatureMin={generalPlant?.temperatureMin}
                                      temperatureMax={generalPlant?.temperatureMax}/>
                </div>
                <div className="text-2xl italic" style={{fontFamily: 'judson'}}>
                    <div className="flex flex-row items-center mb-4">
                        <h2 className="mr-3">Sensor</h2>
                        <p className="text-gray-500">{plant?.sensor?.name} ({plant?.sensor?.id})</p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="">General Information</h2>
                        <p className="text-gray-500">{generalPlant?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
