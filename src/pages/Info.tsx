import React, {useCallback, useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
import AuthNavbar from "../components/AuthNavbar";
import axios from "axios";
import {API_URL} from "../constants";
import Cookies from "js-cookie";
import PlantInformation from "../components/PlantInformation";
import {GeneralPlant} from "../types";
import {UserPlant} from "../types";


function Info() {
    const location = useLocation();
    const plantId = location.state.plantId;
    const [plant, setPlant] = useState<UserPlant>();
    const [generalPlant, setGeneralPlant] = useState<Omit<GeneralPlant, 'plants'> | null>(null);

    const getPlant = useCallback(() => {
        axios.get(API_URL + "/plants/" + plantId, {headers: {Authorization: `Bearer ${Cookies.get('token')}`}})
            .then((response) => {
                const plantData = response.data;
                setPlant(plantData);
            })
            .catch(error => console.error(error));
    }, [plantId]);

    /**
     * Get the general plant information by type (without the plants array)
     * @param type the type of the plant
     */
    async function getGeneralPlantByType(type: string): Promise<Omit<GeneralPlant, 'plants'> | null> {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/general-plants/');
            const generalPlants: GeneralPlant[] = response.data;

            const generalPlant = generalPlants.find(plant => plant.type === type);
            if (!generalPlant) {
                return null;
            }

            const {plants, ...generalPlantWithoutPlants} = generalPlant;
            console.log(generalPlantWithoutPlants);
            return generalPlantWithoutPlants;
        } catch (error) {
            console.error('Error fetching general plants:', error);
            return null;
        }
    }

    useEffect(() => {
        getPlant();
    }, [getPlant]);

    useEffect(() => {
        if (plant) {
            getGeneralPlantByType(plant.type).then(data => setGeneralPlant(data));
            /*const response = axios.get('http://localhost:4000/api/v1/general-plants/5')
            .then((response) => {
                const generalPlant = response.data;
                setGeneralPlant(generalPlant);
            }) petit exemple pour voir comment ça rend*/
        }
    }, [plant]);

    return (
        <div className="h-full w-full">
            <AuthNavbar></AuthNavbar>
            <div className="flex flex-col my-8 mx-12">
                <div className="flex flex-row mb-8">
                    <img src={require("../figures/calathea.png")/*plant?.image*/} className="mr-12 border-2"
                         alt="calathea"/>
                    <PlantInformation name={plant?.name} type={plant?.type} humidity={plant?.sensor?.humidity}
                                      light={plant?.sensor?.light} temperature={plant?.sensor?.temperature}
                                      optimalHumidity={generalPlant?.humidity} optimalLight={generalPlant?.light}
                                      optimalTemperature={generalPlant?.temperatureMax}/>
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
