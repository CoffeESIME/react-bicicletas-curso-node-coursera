import Main from './components/main/mainComponent';
import { Routes, Route , Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/headerComponent';
import Crear from './components/main/bicicletas/createComponent';

function App() {
  return (
    <div className="App">
      <Header></Header>
            <Routes>
        <Route path="/bicicletas" element={<Main />} />
        <Route path="/bicicletas/crear" element={<Crear />}/>
        <Route path="*" element={<Navigate to ="/bicicletas" />}/>
      </Routes>   
      
    </div>
  );
}

export default App;
