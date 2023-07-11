import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App></App>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router