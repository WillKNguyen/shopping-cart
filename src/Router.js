import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import ShoppingList from "./components/ShoppingList";

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App></App>}></Route>
                <Route path='/products' element={<ShoppingList></ShoppingList>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router