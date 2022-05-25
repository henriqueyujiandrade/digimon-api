import { ADD_DIGIMONS } from "./actionTypes";


export const addDigimon = (digimon) => ({
    type: ADD_DIGIMONS,
    digimon,
});