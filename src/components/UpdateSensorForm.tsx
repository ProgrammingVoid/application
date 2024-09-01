// src/components/UpdateSensorForm.tsx
import React, { useState, useEffect } from "react";
import {API_URL, SENSOR_URL, USER_SENSORS_URL} from "../constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

interface UpdateSensorFormProps {
    sensorId: number;
}

const UpdateSensorForm: React.FC<UpdateSensorFormProps> = ({ sensorId }) => {
    const [name, setName] = useState("");
    const [remark, setRemark] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the existing sensor data
        axios.get(`${API_URL}${SENSOR_URL}/${sensorId}`, {
            headers: { Authorization: `Bearer ${Cookies.get('token')}` }
        })
            .then(response => {
                const sensor = response.data;
                setName(sensor.name);
                setRemark(sensor.remark);
                setLoading(false);
                console.log(remark);
            })
            .catch(error => {
                console.error('Error fetching sensor data:', error);
                setLoading(false);
            });
    }, [sensorId]);

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const updatedSensor = {
            name: name,
            remark: remark,
        };

        axios.patch(`${API_URL}${SENSOR_URL}/${sensorId}`, updatedSensor, {
            headers: { Authorization: `Bearer ${Cookies.get('token')}` }
        })
            .then(() => navigate('/sensors'))
            .catch(error => console.error('Error updating sensor:', error));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="box-content w-fit h-fit p-4 border border-black rounded-2xl">
            <form className="flex max-w-md flex-col gap-4 font-mono font-f" onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label className="block pb-1">Sensor name</label>
                        <input value={name}
                               onChange={(e) => setName(e.target.value)} id="sensorName" type="text"
                               className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white h-7 placeholder:p-1 p-1"
                               placeholder={name} required />
                    </div>
                </div>
                <div>
                    <label className="block pb-1">Remark</label>
                    <textarea value={remark}
                              onChange={(e) => setRemark(e.target.value)} id="remark"
                              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none bg-white h-16 placeholder:p-1 p-1"
                              placeholder={remark} required />
                </div>
                <button type="submit"
                        className="rounded text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdateSensorForm;