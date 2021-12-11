import React, {useEffect} from "react";
import CustomButton from '../../../components/button'
import "antd/dist/antd.css";
import styled from 'styled-components';
import {Button} from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';


interface HeaderProps {
    infoLoading: boolean;
}

const HeaderContainer = styled.div
    `
    display: grid;
`
;

export const Header = (props: HeaderProps) => {

    useEffect(() => {
        console.log('useEffect')
    }, []);

    return (
        <HeaderContainer>
            <br/>
            <Row>
                <Col push={2} flex={3} >
                    <Heading>
                        NetDoc
                    </Heading>
                </Col>
                <Col flex ={7}>
                </Col>
            </Row>
            <Row>
                <Col span={20} push={2} flex={3}>
                    <Row>
                        <Col span={5} push={1}  flex={8} >
                            <CustomButton
                                type="primary"
                            ><Text>Хранилище</Text>
                            </CustomButton>
                        </Col>
                        <Col push={1} flex={1}>
                            <CustomButton
                                type="primary"
                            ><Text>Чат</Text>
                            </CustomButton>
                        </Col>
                        <Col  flex={5}>
                            <CustomButton
                                type="primary"
                            ><Text>Календарь</Text>
                            </CustomButton>
                        </Col>
                    </Row>
                </Col>
                <Col flex={4}>
                </Col>
                <Col flex={2}>
                    <Row >
                        <Col span={10} push={4} >
                            <Heading2>
                                Личный кабинет
                            </Heading2>
                        </Col>
                        <Col span={3} push={2} >
                            <Button
                                type="primary" shape="circle" size="large"
                            ><UserOutlined />
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </HeaderContainer>
    );
}

const Heading = styled.p`
font-family: Inter, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 10px;
color: #004E98;
;
`;

const Heading2 = styled.p`
font-family: Inter, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 35px;
color: #004E98;
;
`;

const Text = styled.p`
font-family: Inter, sans-serif;
font-style: normal;
font-size: 14px;
line-height: 22px;
;
`;