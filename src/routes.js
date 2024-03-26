import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <LoginPage /> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;