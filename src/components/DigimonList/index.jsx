
import { useSelector } from "react-redux";
import Digimon from "../Digimon";
import { ContainerList, Ul } from "./styles";


const DigimonList = () => {
    const {digimons} = useSelector((state) => state);
   

    return (
        <ContainerList>
        <Ul>
        {digimons.map((digimon,i) => <Digimon key={i} digimon={digimon} />)}
        </Ul>
        </ContainerList>
    )
}

export default DigimonList