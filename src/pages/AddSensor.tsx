import React from 'react'
import SensorForm from "../components/SensorForm";
import AuthNavbar from "../components/AuthNavbar";
function AddSensor() {
    return (
        <div>
            <AuthNavbar/>

            <div className={"flex flex-row justify-center mt-36"}>
                <SensorForm/>
            </div>
        </div>
    )
}

export default AddSensor
