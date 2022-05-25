import { Li } from "./styles"


const Digimon = ({digimon}) => {

    return (
        <Li>
            <div className="title">
                <h2>{digimon.name}</h2>
            </div>
            <figure>
                <img src={digimon.img} alt='digimonImg'/>
            </figure>
            <div className="level">
                <p>{digimon.level}</p>
            </div>
        </Li>
    )
}

export default Digimon