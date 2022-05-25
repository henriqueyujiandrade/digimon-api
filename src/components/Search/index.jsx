import { useState } from "react"
import { useDispatch } from "react-redux"

import addDigimonThunk from "../../store/modules/digimons/thunks"
import { InputButton, SearchContainer } from "./styles"


const Search = () =>{
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)
   
    const dispatch = useDispatch()

    const handleSearch = () =>{
        setError(false);
        dispatch(addDigimonThunk(input, setError))
          
    }

    

    return (

        <SearchContainer>
        <InputButton>         
        <input type='text'  value={input} onChange={(e) => setInput(e.target.value)} placeholder='Procure pelo seu Digimon'/>
        <button onClick={handleSearch}>Pesquisar</button>
        </InputButton>   
        {error && <span>A pesquisa deve conter texto obrigatório!</span>}
        </SearchContainer>
    )
}

export default Search