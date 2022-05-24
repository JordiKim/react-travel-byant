import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetallPage.module.css";
import axios from "axios";
import { Col, Row, Spin, Divider, Typography, Anchor, Menu } from "antd";
import {
    Header,
    Footer,
    ProductIntro,
    ProductComments,
} from "../../components";
import { DatePicker, Space } from "antd";
import { commentMockData } from "./mockup";

const { RangePicker } = DatePicker;

// export const DetailPage: React.FC = () => {
//     let params = useParams();
//     return <h1>旅遊路線詳情頁面，路線ID: {params.detailID}</h1>;
// };

// interface MatchParams {
//     touristRouteId: string;
// }

export const DetailPage: React.FC = () => {
    let params = useParams();
    // const { touristRouteId } = useParams<string>();
    const [loading, setLoading] = useState<boolean>(true);
    const [product, setProduct] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    // 因為頁面的初始化數據只會調用ㄧ次，所以useEffect第二個參數加上[]空數組
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(
                    `http://123.56.149.216:8089/api/touristRoutes/${params.detailID}`
                );
                setProduct(data);
                setLoading(false);
            } catch (error) {
                setError("沒有任何商品");
                setLoading(false);
            }
        };
        fetchData();
    }, []);

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
            <Header />
            <div className={styles["page-content"]}>
                {/* 產品簡介與日期選擇 */}
                <div className={styles["product-intro-container"]}>
                    <Row>
                        <Col span={13}>
                            <ProductIntro
                                title={product.title}
                                shortDescription={product.description}
                                price={product.originalPrice}
                                coupons={product.coupons}
                                points={product.points}
                                discount={product.price}
                                rating={product.rating}
                                pictures={product.touristRoutePictures.map(
                                    (p) => p.url
                                )}
                            ></ProductIntro>
                        </Col>
                        <Col span={11}>
                            <RangePicker open style={{ marginTop: 20 }} />
                        </Col>
                    </Row>
                </div>
                {/* 錨點菜單 */}
                <Anchor className={styles["product-detail-anchor"]}>
                    <Menu mode="horizontal">
                        <Menu.Item key="1">
                            <Anchor.Link
                                href="#feature"
                                title="產品特色"
                            ></Anchor.Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Anchor.Link
                                href="#fees"
                                title="費用"
                            ></Anchor.Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Anchor.Link
                                href="#notes"
                                title="預定須知"
                            ></Anchor.Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Anchor.Link
                                href="#comments"
                                title="用戶評價"
                            ></Anchor.Link>
                        </Menu.Item>
                    </Menu>
                </Anchor>
                {/* 產品特色 */}
                <div
                    id="feature"
                    className={styles["product-detail-container"]}
                >
                    <Divider orientation={"center"}>
                        <Typography.Title level={3}>產品特色</Typography.Title>
                    </Divider>
                    <div
                        dangerouslySetInnerHTML={{ __html: product.features }}
                        style={{ margin: 50 }}
                    ></div>
                </div>
                {/* 產品費用 */}
                <div id="fees" className={styles["product-detail-container"]}>
                    <Divider orientation={"center"}>
                        <Typography.Title level={3}>費用</Typography.Title>
                    </Divider>
                    <div
                        dangerouslySetInnerHTML={{ __html: product.fees }}
                        style={{ margin: 50 }}
                    ></div>
                </div>
                {/* 預定須知 */}
                <div id="notes" className={styles["product-detail-container"]}>
                    <Divider orientation={"center"}>
                        <Typography.Title level={3}>預定須知</Typography.Title>
                    </Divider>
                    <div
                        dangerouslySetInnerHTML={{ __html: product.notes }}
                        style={{ margin: 50 }}
                    ></div>
                </div>
                {/* 產品評價 */}
                <div
                    id="comments"
                    className={styles["product-detail-container"]}
                >
                    <Divider orientation={"center"}>
                        <Typography.Title level={3}>用戶評價</Typography.Title>
                    </Divider>
                    <div style={{ margin: 40 }}>
                        <ProductComments
                            data={commentMockData}
                        ></ProductComments>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
