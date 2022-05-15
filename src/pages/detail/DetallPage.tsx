import React from "react";
import { useParams } from "react-router-dom";
import styles from "./DetallPage.module.css";

export const DetailPage: React.FC = () => {
    let params = useParams();
    return <h1>旅遊路線詳情頁面，路線ID: {params.detailID}</h1>;
};
