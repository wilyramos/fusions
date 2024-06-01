import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ProductsPage from "./pages/ProductsPage";
import Layout from "./layouts/Layout";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPage />} index />
                    <Route path="/productos" element={<ProductsPage />} />
                </Route>
            </Routes>

        </BrowserRouter>
    )
}
