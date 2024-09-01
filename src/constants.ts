/**
 * Project Name: PlantKeeper
 *
 * @created 28/08/2024
 * @file constants.ts
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */

export const SERVER_URL = "http://localhost:4000";
export const API_URL = SERVER_URL + "/api/v1";
export const PLANT_URL = "/plants";
export const USER_URL = "/users";
export const USER_SENSORS_URL = USER_URL + "/sensors";
export const USER_PLANTS_URL = USER_URL + PLANT_URL;
export const LOGIN_URL = "/auth/login";
export const REGISTER_URL = "/register";
export const GENERAL_PLANTS_URL = "/general-plants";