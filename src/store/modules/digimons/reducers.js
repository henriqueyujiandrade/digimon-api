import { toast } from "react-toastify";
import { ADD_DIGIMONS } from "./actionTypes";


const digimonReducer = (state=[],action) => {
    if(action.digimon && action.digimon.length === 0){
        toast.warn('Nenhum Digimon encontrado!')
    }
    switch (action.type){
        case ADD_DIGIMONS:
            return action.digimon;
        default:
        return state;

        
    }
}

export default digimonReducer