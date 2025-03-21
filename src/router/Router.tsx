import { Routes, Route } from "react-router-dom";
import { FC, memo } from "react";

import { Home } from "../components/pages/Home";
import { Detail } from "../components/pages/Detail";
import { Setting } from "../components/pages/Setting";
import { Like } from "../components/pages/Like";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { SearchResult } from "../components/pages/SearchResult";

export const Router: FC = memo(() => {
    return (
        <HeaderLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/{id}" element={<Detail />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/like" element={<Like />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/search/:keyword" element={<SearchResult />} />
                <Route path="*" element={<p>404ページです</p>} />
            </Routes>
        </HeaderLayout>
    );
});
