import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MenuLayout from "./layouts/MenuLayout";
import MenuPage from "./pages/MenuPage";

export default function App() {
    const browserRouter = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route element={<MenuLayout/>}>
                    <Route index element={<MenuPage/>}/>
                </Route>
            </Route>
        )
    );

    return (
        <RouterProvider router={browserRouter}/>
    );
}