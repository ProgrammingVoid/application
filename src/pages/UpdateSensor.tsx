/**
 * Project Name: PlantKeeper
 *
 * @created 01-09-2024
 * @file UpdateSensor.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */
import React from "react";
import AuthNavbar from "../components/AuthNavbar";
import SensorForm from "../components/SensorForm";
import UpdateSensorForm from "../components/UpdateSensorForm";
import {useLocation} from "react-router-dom";

function UpdateSensor() {

    const location = useLocation();
    const sensorId = location.state.sensorId;

    return (
        <div className="min-h-screen w-full flex flex-col items-center">
            <div className="w-full">
                <AuthNavbar/>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow min-h-0">
                <div className="m-14 flex flex-col justify-center items-center w-full h-full">
                    <UpdateSensorForm sensorId={sensorId}></UpdateSensorForm>
                </div>
            </div>
        </div>
    )
}

export default UpdateSensor;