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
import React, {ChangeEventHandler, useState} from "react";

interface PlantFormProps {
    plantTypeOptions: string[];
    sensorOptions: string[];
}


function PlantForm({plantTypeOptions, sensorOptions}: PlantFormProps) {
    const [name, setName] = useState("");
    const [plantType, setPlantType] = useState(plantTypeOptions[0]);
    const [sensor, setSensor] = useState(sensorOptions[0]);
    const [selectedImage, setSelectedImage] = useState<File>();
    const fileToDataString = (file: File) => {
        return new Promise<string>((resolve, reject) => {
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

    };

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        let image = "";
        if (selectedImage) {
            image = await fileToDataString(selectedImage);
        }
        const newPlant = {
            name: name,
            plantType: plantType,
            sensor: sensor,
            image: image,
        };
        console.log(newPlant);

        try {
            const response = await fetch("YOUR_API_ENDPOINT", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPlant),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Plant created successfully:', data);
        } catch (error) {
            console.error('Error creating plant:', error);
        }
    };
    return (


        <div className="box-content w-fit h-fit p-4 border border-black rounded-2xl">
            <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>

                <div>
                    <div>
                        <label htmlFor="plantName"> Plant type</label>
                    </div>
                    <select onChange={(e) => setPlantType(e.target.value)}
                            className={"block w-full text-sm text-gray-900 border border-gray-300 h-7 rounded-lg cursor-pointer focus:outline-none bg-white"}>
                        {plantTypeOptions.map((option, index) => (
                            <option key={index}>{option}</option>
                        ))}
                    </select>

                </div>
                <div>
                    <div>
                        <label className={"block"}>
                            Sensor
                        </label>
                    </div>


                    <select onChange={(e) => setSensor(e.target.value)}
                            className={"block w-full text-sm h-7 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white"}>
                        {sensorOptions.map((option, index) => (
                            <option key={index}>{option}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className={"block"}>
                        Plant name</label>
                    <input value={name}
                           onChange={(e) => setName(e.target.value)} id="plantName" type="text"
                           className={"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white h-7 placeholder:p-1 p-1"}
                           placeholder={"name"} required/>
                </div>


                <div>
                    <label className="block"
                           htmlFor="file_input">Upload picture</label>
                    <input onChange={handleFileChange}

                           className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50  focus:outline-none h-7"
                           id="file_input" type="file"/>

                </div>

                <button type="submit"
                        className=" rounded text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit
                </button>
            </form>
        </div>


    );
}

export default PlantForm;