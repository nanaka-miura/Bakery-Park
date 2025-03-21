import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { FC, memo, useEffect } from "react";

import { Home } from "../components/pages/Home";
import { Detail } from "../components/pages/Detail";
import { Setting } from "../components/pages/Setting";
import { Like } from "../components/pages/Like";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { SearchResult } from "../components/pages/SearchResult";
import { shops } from "../entities/Shop";

export const Router: FC = memo(() => {
    return (
        <HeaderLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<DetailWithShop />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/like" element={<Like />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/search" element={<SearchResult />} />
                <Route path="*" element={<p>404ページです</p>} />
            </Routes>
        </HeaderLayout>
    );
});

const DetailWithShop = () => {
    const { id } = useParams();
    const shop = shops.find((shop) => shop.id === Number(id));
    const navigate = useNavigate();

    useEffect(() => {
        if (!shop) {
            navigate("/404");
        }
    }, [shop, navigate]);

    if (!shop) {
        return null;
    }

    return <Detail shop={shop} />;
};
