import React from "react";
import {
    Header,
    Footer,
    Carousel,
    SideMenu,
    ProductCollection,
    BusinessPartners,
} from "../../components";
import { Col, Row, Typography } from "antd";
import { productList1, productList2, productList3 } from "./mockups";
import sideImage from "../../assets/images/sider_2019_12-09.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png";
import styles from "./HomePage.module.css";

// export class HomePage extends React.Component {
//     render() {
//         return (
//             <>
//                 <Header></Header>
//                 {/* 頁面內容 content */}
//                 <div className={styles["page-content"]}>
//                     <Row style={{ marginTop: 20 }}>
//                         <Col span={6}>
//                             <SideMenu></SideMenu>
//                             {/* <div style={{ backgroundColor: "red" }}>多重菜單</div> */}
//                         </Col>
//                         <Col span={18}>
//                             <Carousel></Carousel>
//                             {/* <div style={{ backgroundColor: "blue" }}>走馬燈</div> */}
//                         </Col>
//                     </Row>
//                     <ProductCollection
//                         title={
//                             <Typography.Title level={3} type={"warning"}>
//                                 爆款推薦
//                             </Typography.Title>
//                         }
//                         sideImage={sideImage}
//                         products={productList1}
//                     ></ProductCollection>
//                     <ProductCollection
//                         title={
//                             <Typography.Title level={3} type={"danger"}>
//                                 新品上市
//                             </Typography.Title>
//                         }
//                         sideImage={sideImage2}
//                         products={productList2}
//                     ></ProductCollection>
//                     <ProductCollection
//                         title={
//                             <Typography.Title level={3} type={"success"}>
//                                 國內遊推薦
//                             </Typography.Title>
//                         }
//                         sideImage={sideImage3}
//                         products={productList3}
//                     ></ProductCollection>
//                     <BusinessPartners></BusinessPartners>
//                 </div>
//                 <Footer></Footer>
//             </>
//         );
//     }
// }

export const HomePage: React.FC = () => {
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
                            爆款推薦
                        </Typography.Title>
                    }
                    sideImage={sideImage}
                    products={productList1}
                ></ProductCollection>
                <ProductCollection
                    title={
                        <Typography.Title level={3} type={"danger"}>
                            新品上市
                        </Typography.Title>
                    }
                    sideImage={sideImage2}
                    products={productList2}
                ></ProductCollection>
                <ProductCollection
                    title={
                        <Typography.Title level={3} type={"success"}>
                            國內遊推薦
                        </Typography.Title>
                    }
                    sideImage={sideImage3}
                    products={productList3}
                ></ProductCollection>
                <BusinessPartners></BusinessPartners>
            </div>
            <Footer></Footer>
        </>
    );
};
