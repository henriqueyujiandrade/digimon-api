import DigimonList from "../../components/DigimonList"
import Search from "../../components/Search"
import { Container, Content, Header } from "./styles"

const DigimonPage = () =>{

    return (
        <Container>
        <Header>
            <Content>
            <section>
            <figure>
                <img src="https://i.pinimg.com/originals/84/0b/83/840b835ffec2c79d438b03b87a1e968a.png" alt="logo"/>
            </figure>
            <h1>Procure seu Digimon!</h1>
            </section>
        <Search/>
        </Content>
        </Header>
        <DigimonList/>
        </Container>
    )
}

export default DigimonPage