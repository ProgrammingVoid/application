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




function SensorForm() {
    const [name, setName] = useState("");


    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const newSensor = {
            name: name,

        };

        await fetch("YOUR_API_ENDPOINT", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newSensor),
            }).then(response => response.json()).catch(error => console.error('Error:', error));


    };
    return (


        <div className="box-content w-fit h-fit p-4 border border-black rounded-2xl">
            <form className="flex max-w-md flex-col gap-4 font-mono font-f" onSubmit={handleSubmit}>


                <div>


                    <div>
                        <label className={"block"}>
                            Sensor name</label>
                        <input value={name}
                               onChange={(e) => setName(e.target.value)} id="sensorName" type="text"
                               className={"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white h-7 placeholder:p-1 p-1"}
                               placeholder={"Sensor name"} required/>
                    </div>
                </div>


                <button type="submit"
                        className=" rounded text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit
                </button>
            </form>
        </div>


    );
}

export default SensorForm;