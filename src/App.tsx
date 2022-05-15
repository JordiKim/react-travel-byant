import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, SignInPage, RegisterPage, DetailPage } from "./pages";

const HiIamFC = () => {
    return <h1>嗨我函數式辣</h1>;
};

const NotFound = () => {
    return <h1 style={{ textAlign: "center" }}>404</h1>;
};

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/signIn" element={<SignInPage />}></Route>
                    <Route path="/register" element={<RegisterPage />}></Route>
                    <Route path="/detail" element={<DetailPage />}>
                        <Route
                            path=":detailID"
                            element={<DetailPage />}
                        ></Route>
                    </Route>
                    <Route path="/hifc" element={<HiIamFC />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
