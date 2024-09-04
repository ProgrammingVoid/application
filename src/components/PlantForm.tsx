/**
 * Project Name: PlantKeeper
 *
 * @created 27-08-2024
 * @file PlantForm.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */
import React, {useState} from "react";
import axios from "axios";
import {API_URL, USER_PLANTS_URL} from "../constants";
import {GeneralPlant, SensorInfo} from "../types";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

interface PlantFormProps {
    plantTypeOptions: GeneralPlant[];
    sensorOptions: SensorInfo[];
}


function PlantForm({plantTypeOptions, sensorOptions}: PlantFormProps) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [plantType, setPlantType] = useState<number>(plantTypeOptions[0]?.id);
    const [selectedSensorId, setSelectedSensorId] = useState<number>(sensorOptions[0]?.id);
    const [remark, setRemark] = useState("");


    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const newPlant = {
            name: name,
            sensor: selectedSensorId,
            remark: remark,
            generalPlantId: plantType
        };
        console.log(newPlant);
        axios.post(API_URL + USER_PLANTS_URL, newPlant, {headers: {"Authorization": `Bearer ${Cookies.get('token')}`}})
            .then(() => {
                navigate('/plants');
            }).catch(error => console.error('Error:', error));


    };
    return (


        <div className="box-content w-fit h-fit p-4 border border-black rounded-2xl">
            <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>

                <div>
                    <div>
                        <label htmlFor="plantName" className={"pb-1"}> Plant type</label>
                    </div>
                    <select  onChange={(e) => setPlantType(parseInt(e.target.value))}
                            className={"block w-full text-sm text-gray-900 border border-gray-300 h-7 rounded-lg cursor-pointer focus:outline-none bg-white"} required>
                        {plantTypeOptions.map((option) => (
                            <option key={option.id} value={option.id}>{option.type}</option>
                        ))}
                    </select >

                </div>
                <div>
                    <div>
                        <label className={"block pb-1"} >
                            Sensor
                        </label>
                    </div>


                    <select onChange={(e) => setSelectedSensorId(parseInt(e.target.value))}
                            className={"block w-full text-sm h-7 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white"} required>
                        {sensorOptions.map((option) => (
                            <option key={option.id} value={option.id}>{option.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className={"block pb-1"}>
                        Plant name</label>
                    <input value={name}
                           onChange={(e) => setName(e.target.value)} id="plantName" type="text"
                           className={"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white h-7 placeholder:p-1 p-1"}
                           placeholder={"name"} required/>
                </div>

                <div>
                    <label className={"block pb-1"}>
                        Remark</label>
                    <textarea onChange={(e) => setRemark(e.target.value)} id="remark"
                              className={"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white h-16 placeholder:p-1 p-1"}
                              required/>
                </div>

                <button type="submit"
                        className=" rounded text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit
                </button>
            </form>
        </div>


    );
}

export default PlantForm;