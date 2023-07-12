import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path})=>(
                    <Route
                        key={path} //ключ должен быть уникальным можно путь
                        path={path}
                        element={element}
                    />
                ))} //нам нужен массив а не сам конфиг
            </Routes>
        </Suspense>
    );
};

export default AppRouter;