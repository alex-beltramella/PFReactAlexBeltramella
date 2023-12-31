import NavBar from "./componentes/NavBar/NavBar";
import "bulma/css/bulma.css";
import "bootstrap/dist/css/bootstrap.css"
import CartWidget from "./componentes/CardWidget/CartWidget";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import "./css/style.css";
import ItemCount from "./componentes/ItemCount/ItemCount";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer />}/>
                    <Route path= '/category/:categoryId' element={<ItemListContainer/>}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                    <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;