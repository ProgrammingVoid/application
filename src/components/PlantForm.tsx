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
import {API_URL,  USER_PLANTS_URL} from "../constants";
import {SensorInfo} from "../types";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

interface PlantFormProps {
    plantTypeOptions: string[];
    sensorOptions: SensorInfo[];
}


function PlantForm({plantTypeOptions, sensorOptions}: PlantFormProps) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [plantType, setPlantType] = useState(plantTypeOptions[0]);
    const [selectedSensorId, setSelectedSensorId] = useState(0);
    // const [selectedImage, setSelectedImage] = useState<File>();
    const [remark, setRemark] = useState("");
    // const fileToDataString = (file: File) => {
        /*return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onerror = (error) => reject(error);
            reader.onload = () => resolve(reader.result as string);
        });
    };
     const handleFileChange: ChangeEventHandler<HTMLInputElement> = async (
        event
    ) => {
        const file = event.target.files as FileList;
        setSelectedImage(file?.[0]);
        if (!file) {
            return;
        }

    }; */

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
       /* let image = "";
        if (selectedImage) {
            image = await fileToDataString(selectedImage);
        } */
        const newPlant = {
            name: name,
            type: plantType,
            sensor: selectedSensorId,
            remark: remark,
        };
        console.log(newPlant);
        axios.post(API_URL + USER_PLANTS_URL, newPlant, {headers: {"Authorization": `Bearer ${Cookies.get('token')}`}})
            .then((r) => {
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
                    <select onChange={(e) => setPlantType(e.target.value)}
                            className={"block w-full text-sm text-gray-900 border border-gray-300 h-7 rounded-lg cursor-pointer focus:outline-none bg-white"} required>
                        {plantTypeOptions.map((option, index) => (
                            <option key={index}>{option}</option>
                        ))}
                    </select>

                </div>
                <div>
                    <div>
                        <label className={"block pb-1"} >
                            Sensor
                        </label>
                    </div>


                    <select onChange={(e) => { const selectedSensor = sensorOptions.find(sensor => sensor.name === e.target.value);
                        if (selectedSensor) {
                            setSelectedSensorId(selectedSensor.id);
                        }}}
                            className={"block w-full text-sm h-7 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white"} required>
                        {sensorOptions.map((option, index) => (
                            <option key={index}>{option.name}</option>
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
                    <label className="block pb-1"
                           htmlFor="file_input">Upload picture</label>
                    <input /* onChange={handleFileChange}*/

                           className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50  focus:outline-none h-7"
                           id="file_input" type="file"/>

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