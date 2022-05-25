
import api from '../../../services/api'

import { addDigimon } from './actions'

const addDigimonThunk = (digimon, setError) => (dispatch) => {

   api.get('digimon')
    .then((response) => {
        if(digimon.length===0){
            setError(true)
        }else{
        dispatch(addDigimon(response.data.filter((dig) => dig.name.toLowerCase().includes(digimon.toLowerCase()) || dig.level.toLowerCase().includes(digimon.toLowerCase()) )))
        }
    })
    .catch((err) => console.log(err))

      
}

export default addDigimonThunk