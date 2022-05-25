import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";
import 'react-toastify/dist/ReactToastify.css';
import DigimonPage from "./pages/DigimonPage";



function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <DigimonPage/>
      <ToastContainer/>
    
    </div>
  );
}

export default App;
