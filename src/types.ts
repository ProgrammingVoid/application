export enum Types {
    HEALTHY = 0,
    KEEP_AN_EYE = 1,
    NEEDS_ATTENTION = 2
}
export interface SensorInfo {

    name: string;
    id: number;
}

/**
 * Sensor interface made to match the API response when fetching a sensor
 */
export interface Sensor {
    id: number;
    name: string;
    remark: string;
    humidity: string | null;
    light: string | null;
    temperature: string | null;
    createdAt: string;
    updatedAt: string;
}

/**
 * Plant interface made to match the API response when fetching a plant
 */
export interface Plant {
    id: number;
    type: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    remark: string;
    sensor: Sensor;
}

/**
 * GeneralPlant interface made to match the API response when fetching a general plant
 */
export interface GeneralPlant extends Plant {
    humidity: string | null;
    ambientHumidity: string | null;
    light: string | null;
    temperatureMin: string | null;
    temperatureMax: string | null;
    description: string;
    plants: Plant[];
}

/**
 * UserPlant interface made to match the API response when fetching a user plant
 */
export interface UserPlant extends Plant {
    remark: string;
}

/**
 * User interface made to match the API response when fetching a user
 */
export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    sensor: Sensor[];
    plants: UserPlant[];
}

export interface SensorLinkedToPlant {
    sensorId: number;
    sensorName: string;
    sensorRemark: string;
    remark: string;
    plantName: string | null;
    plantId: number | null;
    sensorHumidity: number | null;
    sensorLight: number | null;
    sensorTemperature: number | null;
}