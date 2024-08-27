/**
 * Project Name: PlantKeeper
 *
 * @created 26-08-2024
 * @file HomeButton.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */

import { useNavigate } from "react-router-dom";

function HomeButton() {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate("/");
    };
    return (
        <button className={"text-white font-bold"} onClick={handleHomeClick}>
           Home
        </button>
    )
}
export default HomeButton;