/**
 * Project Name: PlantKeeper
 *
 * @created 01-09-2024
 * @file UpdatePlantForm.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */
import React, {useState, useEffect} from "react";
import {API_URL, PLANT_URL} from "../constants";
import {GeneralPlant, SensorInfo} from "../types";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

interface UpdatePlantFormProps {
    plantId: number;
    plantTypeOptions: GeneralPlant[];
    sensorOptions: SensorInfo[];
}

const UpdatePlantForm: React.FC<UpdatePlantFormProps> = ({plantId, plantTypeOptions, sensorOptions}) => {
    const [name, setName] = useState("");
    const [plantType, setPlantType] = useState<number | null>(null);
    const [selectedSensorId, setSelectedSensorId] = useState<number | null>(null);
    const [remark, setRemark] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_URL}${PLANT_URL}/${plantId}`, {
            headers: {Authorization: `Bearer ${Cookies.get('token')}`}
        })
            .then(response => {
                const plant = response.data;
                setName(plant.name);
                setPlantType(plant.generalPlantId);
                setSelectedSensorId(plant.sensor);
                setRemark(plant.remark);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching plant data:', error);
                setLoading(false);
            });
    }, [plantId]);

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const updatedPlant = {
            name: name,
            sensor: selectedSensorId,
            remark: remark,
            generalPlantId: plantType
        };

        axios.patch(`${API_URL}${PLANT_URL}/${plantId}`, updatedPlant, {
            headers: {Authorization: `Bearer ${Cookies.get('token')}`}
        })
            .then(() => navigate('/plants'))
            .catch(error => console.error('Error updating plant:', error));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="box-content w-fit h-fit p-4 border border-black rounded-2xl">
            <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="plantType" className="pb-1">Plant type</label>
                    </div>
                    <select value={plantType ?? ''} onChange={(e) => setPlantType(parseInt(e.target.value))}
                            className="block w-full text-sm text-gray-900 border border-gray-300 h-7 rounded-lg cursor-pointer focus:outline-none bg-white"
                            required>
                        {plantTypeOptions.map((option) => (
                            <option key={option.id} value={option.id}>{option.type}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <div>
                        <label className="block pb-1">Sensor</label>
                    </div>
                    <select value={selectedSensorId ?? ''}
                            onChange={(e) => setSelectedSensorId(parseInt(e.target.value))}
                            className="block w-full text-sm h-7 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white"
                            required>
                        {sensorOptions.map((option) => (
                            <option key={option.id} value={option.id}>{option.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block pb-1">Plant name</label>
                    <input value={name}
                           onChange={(e) => setName(e.target.value)} id="plantName" type="text"
                           className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white h-7 placeholder:p-1 p-1"
                           placeholder={name} required/>
                </div>
                <div>
                    <label className="block pb-1">Remark</label>
                    <textarea value={remark}
                              onChange={(e) => setRemark(e.target.value)} id="remark"
                              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white h-16 placeholder:p-1 p-1"
                              placeholder={remark} required/>
                </div>
                <button type="submit"
                        className="rounded text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdatePlantForm;