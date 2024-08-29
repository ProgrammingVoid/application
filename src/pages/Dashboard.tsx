/**
 * Project Name: PlantKeeper
 *
 * @created 29/08/2024
 * @file Dashboard.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import AuthNavbar from "../components/AuthNavbar";
import RoundedButton from "../components/RoundedButton";
import PlantDescription from "../components/PlantDescription";

const userId = 1;

interface Plant {
    id: number;
    name: string;
    remark: string;
    humidity: string | null;
    light: string | null;
    temperature: string | null;
    createdAt: string;
    updatedAt: string;
}

function Dashboard() {
    const [plants, setPlants] = useState<Plant[]>([]);
    const navigate = useNavigate();

    const handleAddPlantClick = () => {
        navigate('/addplant');
    }

    const getPlants = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/users/${userId}`);
            const userData = response.data;
            setPlants(userData.plants);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPlants().then(r => console.log(r));
    }, []);

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
                    <div key={plant.id} className="mb-8">
                        <PlantDescription image={require("../figures/calathea.png")} name={plant.name}
                                          description={plant.remark} plantState={0} humidity={plant.humidity}
                                          light={plant.light} temperature={plant.temperature} temperatureOk={true}
                                          humidityOk={true} lightOk={true}></PlantDescription>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard;
