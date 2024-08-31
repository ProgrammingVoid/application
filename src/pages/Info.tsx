import React from 'react'
import {useLocation} from "react-router-dom";

function Info() {
    const location = useLocation();

    const id = location.state.plantId;
    return (
        <div>
            <h1>
                This is Info page
                {id}
            </h1>
        </div>
    )
}

export default Info
