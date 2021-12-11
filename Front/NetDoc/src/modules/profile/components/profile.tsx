import React, {useEffect, useState} from "react";
import CustomButton from '../../../components/button'
import "antd/dist/antd.css";
import styled from 'styled-components';
import CustomForm from "../../../components/form";
import {Form, Button} from "antd";
import photo from "../../../icons/avatar.png";
import CustomAvatar from "../../../components/avatar";
import { UserOutlined } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
import Input from "../../../components/input";
import CustomFormItem from "../../../components/form-item";
import {UserInfo} from "../types";


interface InfoItem {
    name: string;
    surname: string;
    password: string;
    email: string;
    number: string;
    gender: string;
    birthday: string;
    country: string;
    id: string;
}

interface ProfileProps {
    infos: InfoItem;
    infoLoading: boolean;
    getUserInfoById: () => InfoItem;
    putUserInfoById: ( userInfo: UserInfo ) => void;
}

const ProfileContainer = styled.div
    `
    display: grid;
`
;

export const Profile = (props: ProfileProps) => {

    console.log(props);

    const {
        infos,
        getUserInfoById,
        putUserInfoById
    } = props;

    useEffect(() => {
        getUserInfoById();
        console.log('useEffect')
    }, [getUserInfoById]);

    const [componentSize, setComponentSize] = useState<string>('default');
    const [userInputValue, putUserInfo] = useState<string>('');
    const onFormLayoutChange = ({size}:{size: any}) => {
        setComponentSize(size);
    };
    const onChange = ({e}:{e:any}) => {
        console.log(e);
    };

    type LayoutType = Parameters<typeof Form>[0]['layout'];

    const sharedProps = {
        labelCol: {span: 4,},
        wrapperCol: {span: 14,},
        layout: 'horizontal',
        initialvalues: {size: componentSize,},
        size: {componentSize}
    };

    const [form] = Form.useForm();

    useEffect(() => {
        console.log(form.getFieldsValue());
        form.setFieldsValue({
            "Name": infos.name+" "+infos.surname,
            "Password": infos.password,
            "Email": infos.email,
            "Number": infos.number,
            "Gender": infos.gender,
            "Birthday": infos.birthday,
            "Country": infos.country,
        });
    }, [infos]);

    return (
        <ProfileContainer>
            <br/>
            <Row>
                <Col span={22} push={2}>
                    <CustomForm
                        form={form} >
                        <Row>
                            <Col span={20} push={1} flex={7}>
                                <CustomFormItem {...sharedProps} label="Аватар">
                                    <CustomAvatar src={photo} icon={<UserOutlined />} shape={"square"} size={100} />
                                </CustomFormItem>
                            </Col>
                            <Col flex={1}>
                                <br/>
                                <br/>
                                <CustomButton
                                    type="primary"
                                    onClick={() => putUserInfoById(form.getFieldsValue())}
                                >
                                 <Text>
                                     Submit
                                 </Text>
                                </CustomButton>
                            </Col>
                        </Row>
                        <CustomFormItem  {...sharedProps} name ={"Name"}  label="Пользователь">
                            <Input placeholder={"Place for surname"} />
                        </CustomFormItem>
                        <CustomFormItem {...sharedProps} name="Password" label="Пароль">
                            <Input  type="password" />
                        </CustomFormItem>
                        <CustomFormItem {...sharedProps} name="Email" label="Адрес эл. почты">
                            <Input />
                        </CustomFormItem>
                        <CustomFormItem {...sharedProps} name={"Number"}  label="Телефон">
                            <Input name={"Number"} placeholder={"00000000000"}/>
                        </CustomFormItem>
                        <CustomFormItem {...sharedProps} name="Gender" label="Пол">
                            <Input />
                        </CustomFormItem>
                        <CustomFormItem {...sharedProps} name="Birthday" label="Дата рождения">
                            <Input />
                        </CustomFormItem>
                        <CustomFormItem {...sharedProps} name="Country" label="Страна">
                            <Input />
                        </CustomFormItem>
                        <br/>
                    </CustomForm>
                </Col>
            </Row>
        </ProfileContainer>
    );
}

const Text = styled.p`
font-family: Inter, sans-serif;
font-style: normal;
font-size: 14px;
line-height: 22px;
;
`;