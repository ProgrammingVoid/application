/**
 * Project Name: PlantKeeper
 *
 * @created 27-08-2024
 * @file SensorForm.tsx
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
import {API_URL, GLOBAL_PREFIX, SENSOR_URL, USER_URL} from "../constants";
import {useNavigate} from "react-router-dom";


function SensorForm() {
    const [name, setName] = useState("");
    const [remark, setRemark] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const newSensor = {

            name: name,
            remark: remark,
            user: 1,

        };

        await fetch(API_URL + GLOBAL_PREFIX + USER_URL + SENSOR_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newSensor),
        })
            .then(response => response.json())
            .then((response) => {
                const id = response.raw[0].id;
                console.log(response.raw);
                alert(`Sensor created with ID: ${id}`);
                navigate('/dashboard');
            })
            .catch(error => console.error('Error:', error));

    };
    return (


        <div className="box-content w-fit h-fit p-4 border border-black rounded-2xl">
            <form className="flex max-w-md flex-col gap-4 font-mono font-f" onSubmit={handleSubmit}>


                <div>


                    <div>
                        <label className={"block pb-1"}>
                            Sensor name</label>
                        <input value={name}
                               onChange={(e) => setName(e.target.value)} id="sensorName" type="text"
                               className={"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white h-7 placeholder:p-1 p-1"}
                               placeholder={"Sensor name"} required/>
                    </div>
                </div>

                <div>
                    <label className={"block pb-1"}>
                        Remark</label>
                    <textarea value={remark}
                              onChange={(e) => setRemark(e.target.value)} id="remark"
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

export default SensorForm;