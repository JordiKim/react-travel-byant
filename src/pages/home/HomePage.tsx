import React from "react";
import {
    Header,
    Footer,
    Carousel,
    SideMenu,
    ProductCollection,
    BusinessPartners,
} from "../../components";
import { Col, Row, Spin, Typography } from "antd";
// import { productList1, productList2, productList3 } from "./mockups";
import sideImage from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png";
import styles from "./HomePage.module.css";
import { withTranslation, WithTranslation } from "react-i18next"; // w小寫代表react高階組件，W大寫代表typescript類型定義
import axios from "axios";

interface State {
    loading: boolean;
    error: string | null;
    productList: any[];
}
class HomePageComponent extends React.Component<WithTranslation, State> {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            productList: [],
        };
    }

    async componentDidMount() {
        try {
            const { data } = await axios.get(
                "http://123.56.149.216:8089/api/productCollections"
            );
            this.setState({
                loading: false,
                error: null,
                productList: data,
            });
        } catch (error) {
            this.setState({
                // error: error.message,
                error: "出錯了",
                loading: false,
            });
        }
    }
    render() {
        const { t } = this.props;
        const { productList, loading, error } = this.state;
        if (loading) {
            return (
                <Spin
                    size={"large"}
                    style={{
                        marginTop: "200",
                        marginBottom: "200",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "100%",
                    }}
                />
            );
        }

        if (error) {
            return <div>網站出錯： {error}</div>;
        }
        return (
            <>
                <Header></Header>
                {/* 頁面內容 content */}
                <div className={styles["page-content"]}>
                    <Row style={{ marginTop: 20 }}>
                        <Col span={6}>
                            <SideMenu></SideMenu>
                            {/* <div style={{ backgroundColor: "red" }}>多重菜單</div> */}
                        </Col>
                        <Col span={18}>
                            <Carousel></Carousel>
                            {/* <div style={{ backgroundColor: "blue" }}>走馬燈</div> */}
                        </Col>
                    </Row>
                    <ProductCollection
                        title={
                            <Typography.Title level={3} type={"warning"}>
                                {t("home_page.hot_recommended")}
                            </Typography.Title>
                        }
                        sideImage={sideImage}
                        products={productList[0].touristRoutes}
                    ></ProductCollection>
                    <ProductCollection
                        title={
                            <Typography.Title level={3} type={"danger"}>
                                {t("home_page.new_arrival")}
                            </Typography.Title>
                        }
                        sideImage={sideImage2}
                        products={productList[1].touristRoutes}
                    ></ProductCollection>
                    <ProductCollection
                        title={
                            <Typography.Title level={3} type={"success"}>
                                {t("home_page.domestic_travel")}
                            </Typography.Title>
                        }
                        sideImage={sideImage3}
                        products={productList[2].touristRoutes}
                    ></ProductCollection>
                    <BusinessPartners></BusinessPartners>
                </div>
                <Footer></Footer>
            </>
        );
    }
}

export const HomePage = withTranslation()(HomePageComponent);

// export const HomePage: React.FC = () => {
//     return (
//         <>
//             <Header></Header>
//             {/* 頁面內容 content */}
//             <div className={styles["page-content"]}>
//                 <Row style={{ marginTop: 20 }}>
//                     <Col span={6}>
//                         <SideMenu></SideMenu>
//                         {/* <div style={{ backgroundColor: "red" }}>多重菜單</div> */}
//                     </Col>
//                     <Col span={18}>
//                         <Carousel></Carousel>
//                         {/* <div style={{ backgroundColor: "blue" }}>走馬燈</div> */}
//                     </Col>
//                 </Row>
//                 <ProductCollection
//                     title={
//                         <Typography.Title level={3} type={"warning"}>
//                             爆款推薦
//                         </Typography.Title>
//                     }
//                     sideImage={sideImage}
//                     products={productList1}
//                 ></ProductCollection>
//                 <ProductCollection
//                     title={
//                         <Typography.Title level={3} type={"danger"}>
//                             新品上市
//                         </Typography.Title>
//                     }
//                     sideImage={sideImage2}
//                     products={productList2}
//                 ></ProductCollection>
//                 <ProductCollection
//                     title={
//                         <Typography.Title level={3} type={"success"}>
//                             國內遊推薦
//                         </Typography.Title>
//                     }
//                     sideImage={sideImage3}
//                     products={productList3}
//                 ></ProductCollection>
//                 <BusinessPartners></BusinessPartners>
//             </div>
//             <Footer></Footer>
//         </>
//     );
// };
