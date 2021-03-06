import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Dropdown, Menu, Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import ButtonGroup from "antd/lib/button/button-group";
import { useNavigate } from "react-router-dom";
import { useSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import {
    LanguageActionTypes,
    addLanguageActionCreator,
    changeLanguageActionCreator,
} from "../../redux/language/languageActions";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const language = useSelector((state) => state.language.language);
    const languageList = useSelector((state) => state.language.languageList);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const menuClickHandler = (e) => {
        console.log(e);
        if (e.key === "new") {
            dispatch(addLanguageActionCreator("新語言", "new_lang"));
        } else {
            dispatch(changeLanguageActionCreator(e.key));
        }
    };
    return (
        <div className={styles["app-header"]}>
            {/* top-header */}
            <div className={styles["top-header"]}>
                <div className={styles.inner}>
                    <Typography.Text>{t("header.slogan")}</Typography.Text>
                    <Dropdown.Button
                        style={{ marginLeft: 15 }}
                        overlay={
                            <Menu onClick={menuClickHandler}>
                                {languageList.map((l) => {
                                    return (
                                        <Menu.Item key={l.code}>
                                            {l.name}
                                        </Menu.Item>
                                    );
                                })}
                                <Menu.Item key={"new"}>
                                    {t("header.add_new_language")}
                                </Menu.Item>
                            </Menu>
                        }
                        icon={<GlobalOutlined></GlobalOutlined>}
                    >
                        {language === "zh" ? "中文" : "English"}
                    </Dropdown.Button>
                    <ButtonGroup className={styles["button-group"]}>
                        <Button onClick={() => navigate("register")}>
                            {t("header.register")}
                        </Button>
                        <Button onClick={() => navigate("signIn")}>
                            {t("header.signin")}
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
            <Layout.Header className={styles["main-header"]}>
                <span onClick={() => navigate("/")}>
                    <img src={logo} alt="" className={styles["App-logo"]} />
                    <Typography.Title level={3} className={styles.title}>
                        {t("header.title")}
                    </Typography.Title>
                </span>
                <Input.Search
                    placeholder="請輸入旅遊目的地、主題或關鍵字"
                    className={styles["search-input"]}
                />
            </Layout.Header>
            <Menu mode={"horizontal"} className={styles["main-menu"]}>
                <Menu.Item key={1}>{t("header.home_page")}</Menu.Item>
                <Menu.Item key={2}>{t("header.weekend")}</Menu.Item>
                <Menu.Item key={3}>{t("header.group")}</Menu.Item>
                <Menu.Item key={4}>{t("header.backpack")}</Menu.Item>
                <Menu.Item key={5}>{t("header.private")}</Menu.Item>
                <Menu.Item key={6}>{t("header.cruise")}</Menu.Item>
                <Menu.Item key={7}>{t("header.hotel")}</Menu.Item>
                <Menu.Item key={8}>{t("header.local")}</Menu.Item>
                <Menu.Item key={9}>{t("header.theme")}</Menu.Item>
                <Menu.Item key={10}>{t("header.custom")}</Menu.Item>
                <Menu.Item key={11}>{t("header.study")}</Menu.Item>
                <Menu.Item key={12}>{t("header.visa")}</Menu.Item>
                <Menu.Item key={13}>{t("header.enterprise")}</Menu.Item>
                <Menu.Item key={14}>{t("header.high_end")}</Menu.Item>
                <Menu.Item key={15}>{t("header.outdoor")}</Menu.Item>
                <Menu.Item key={16}>{t("header.insurance")}</Menu.Item>
            </Menu>
        </div>
    );
};
