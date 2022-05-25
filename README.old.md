# 📋 Sobre a atividade

Nesta atividade estaremos utilizando a [API Digimon](https://digimon-api.vercel.app/api/digimon "Link") para desenvolver uma aplicação onde vamos utilizar conceitos de integração com **API** + **Redux Thunks**

## Mão na massa!

Antes de qualquer coisa, lembre-se te instalar as dependências:

    ❯ yarn add react-redux redux redux-thunk axios

É importante que não copiem o código e digitem cada linha, o fluxo do redux é complexo, e é necessária muita prática para entender o seu funcionamento.

Após gerar o projeto com nosso CRA, vamos estruturar nossa store para o projeto:

1.  Crie uma pasta dentro de `src`, chamada `store`.
2.  Dentro da `store`, teremos um `index.js`, e outra pasta chamada `modules`.
3.  Na pasta `modules`, criaremos a pasta `digimons`, e dentro dela teremos o nosso `reducers.js`, `thunks.js`, `actions.js` e `actionsTypes.js`
4.  Agora crie a pasta components, e dentro dela os seguintes componentes: `Digimons` e `Search`

Neste ponto, temos a seguinte estrutura de arquivos:

![](https://images2.imgbox.com/bd/c7/z5MsAfEB_o.png)

### Configurando o Redux

É hora de configurarmos o `digimon/reducers.js`, aqui você pode lembrar a configuração de `reducers.js`  

Por conveniência, vamos utilizar o `actionTypes.js` para podermos centralizar nossas actions types em um lugar só. Portanto:

1.  Nossa actionTypes.js fica assim:

        export const ADD_DIGIMONS = "@digimons/ADD";

2.  Nosso reducer.js:

        import { ADD_DIGIMONS } from "./actionsTypes";

        const digimonsReducer = (state = [], action) => {
          switch (action.type) {
            case ADD_DIGIMONS:
        		// Escreva seu case para adicionar um novo digimon.
            default:
              return state;
          }
        };

        export default digimonsReducer;

3.  Nosso action.js:

        import { ADD_DIGIMONS } from "./actionsTypes";

        export const addDigimon = (digimon) => ({
          type: ADD_DIGIMON,
          digimon,
        });

4.  Adicionando nosso provider ao `index.js`

        import React from "react";
        import ReactDOM from "react-dom";
        import "./index.css";
        import App from "./App";
        import reportWebVitals from "./reportWebVitals";

        import { Provider } from "react-redux";
        import store from "./store";

        ReactDOM.render(
          <React.StrictMode>
            <Provider store={store}>
              <App />
            </Provider>
          </React.StrictMode>,
          document.getElementById("root")
        );

        reportWebVitals();

5.  Agora vamos configurar nosso `index.js` da store.

        import { createStore, combineReducers, applyMiddleware } from "redux";

        import thunk from "redux-thunk";

        import digimonsReducer from "./modules/digimons/reducer";

        const reducers = combineReducers({ digimons: digimonsReducer });

        const store = createStore(reducers, applyMiddleware(thunk));

        export default store;

### Request com a API

Agora podemos começar a estruturar nossos componentes para a requisição com a API e assim renderizar nosso card.

1.  Vamos importar nossos componentes `Search` e `Digimons` em nosso `App.js`

        import logo from "./logo.svg";
        import "./App.css";
        import Search from "./components/Search";
        import Digimons from "./components/Digimons";

        function App() {
          return (
            <div className="App">
              <header className="App-header">
                <Search />
                <Digimons />
              </header>
            </div>
          );
        }

        export default App;

2.  Agora, vamos escrever nosso componente `Search`

        import { useState } from "react";

        const Search = () => {

          const [input, setInput] = useState("");
          const [error, setError] = useState(false);

          return (
            <div>
              <h2>Procure pelo seu Digimon!</h2>
              <div>
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Procure seu Digimon"
                ></input>
                <button>Pesquisar</button>
              </div>
            </div>
          );
        };

        export default Search

3.  É a vez do componente `Digimons`

        const Digimons = () => {
          return (
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          )
        }

        export default Digimons

4.  Vamos configurar nosso `thunk.js` !

        import axios from "axios";

        import { addDigimon } from "./actions";

        const addDigimonsThunk = (digimon, setError) => (dispatch) => {

         //Aqui faça uma requisição com o axios e em seguida, no .then()
         //utilize a função dispatch() passando addDigimon(response.data[0].name)
        }
        export default addDigimonsThunk

5.  Agora, vamos voltar ao nosso componente `Search`, importe o `useDispatch` e o `addDigimonsThunk`.

6.  Crie a `**função handleSearch`,** que é responsável por chamar o `dispatch` passando o `input` do usuário como parâmetro.

7.  Faça com que o input do usuário seja passado ao state de acordo com o que ele digita. Em seguida, também configure seu button para que o onClick() chame a função handleSearch

No fim, seu componente estará parecido com isso:

    import { useState } from "react";
    import { useDispatch } from "react-redux";
    import { addDigimonsThunk } from "../../store/modules/digimons/thunks";

    const Search = () => {
      const [input, setInput] = useState("");
      const [error, setError] = useState(false);

      const dispatch = useDispatch();

      const handleSearch = () => {
        setError(false);
        //chame o dispatch() passando o state input
        setInput("");
      };

      return (
        <div>
          <div>
            <input
              value={input}
              onChange={} // faça com que o onChange troque o setInput
              placeholder="Procure seu Digimon"
            ></input>
          </div>
          <div>
            <button onClick={}>Pesquisar</button> //chamar a handleSearch
          </div>
        </div>
      );
    };

    export default Search;

### Renderizando o seu Digimon

Voltando ao nosso componente `Digimon`

1.  Importe o `useSelector` de react-redux.

        import { useSelector } from "react-redux";

2.  Acesse seus digimons do state instanciado pelo useSelector.

        const { digimons } = useSelector((state) => state);

3.  Faça um map() para renderizar seu digimon vindo do seu estado.

        const Digimons = () => {
          const { digimons } = useSelector((state) => state);
          return (
            <div>
              <ul>
                {digimons.map((digimon, index) => {
                  return //retorne o digimon;
                })}
                <li></li>
              </ul>
            </div>
          );
        };

* * *

Se você seguiu corretamente os passos até aqui, sua aplicação deve renderizar o nome do Digimon toda vez que você procura por um nome **existente** e clica em pesquisar.

## Extra

*   Crie um componente, `DigimonList` que renderiza a lista dos digimons, e faça com que o componente `Digimon` renderize apenas um card com o respectivo Digimon.
*   No seu componente `Search` crie uma solução para tratar os erros caso o usuário tente procurar um digimon que não existe!
*   Estilize sua aplicação, retorne a imagem do digimon. Dê seu toque especial.

# 💡Conhecimentos aplicados:

*   Redux
*   Redux-Thunk
*   Request com API utilizando Redux para compartilhamento de estado
