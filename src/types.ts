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
    createdAt: string;
    updatedAt: string;
}

/**
 * GeneralPlant interface made to match the API response when fetching a general plant
 */
export interface GeneralPlant extends Plant {
    type: string;
    image: string;
    humidityMin: string | null;
    humidityMax: string | null;
    ambientHumidityMin: string | null;
    ambientHumidityMax: string | null;
    lightMin: string | null;
    lightMax: string | null;
    temperatureMin: string | null;
    temperatureMax: string | null;
    description: string;
    plants: Plant[];
}

/**
 * UserPlant interface made to match the API response when fetching a user plant
 */
export interface UserPlant extends Plant {
    generalPlantId: number;
    image: string;
    remark: string;
    name: string
    sensor: Sensor;
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

export interface UserPlantLinkedToGeneralPlant {
    plantId: number;
    plantName: string;
    plantRemark: string;
    plantImage: string;
    plantSensorId: number;
    sensorHumidity: number;
    sensorLight: number;
    sensorTemperature: number;
    sensorName: string;
    generalPlantId: number;
    generalPlantImage: string;
    generalPlantType: string;
    generalPlantHumidityMin: number;
    generalPlantHumidityMax: number;
    generalPlantAmbientHumidityMin: number;
    generalPlantAmbientHumidityMax: number;
    generalPlantLightMin: number;
    generalPlantLightMax: number;
    generalPlantTemperatureMin: number;
    generalPlantTemperatureMax: number;
    generalPlantDescription: string;
}