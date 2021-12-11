import React, { useEffect } from "react"
import CustomButton from '../../../components/button'
import Input from '../../../components/input';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import Modal from '../../../components/modal';
import { storageConfig } from '../configs/storage-config';

interface InfoItem {
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}

interface StorageProps {
    infos: InfoItem[];
    modalIsVisible: boolean;
    infoLoading: boolean;
    showModal: () => void;
    hideModal: () => void;
    getInfo: () => void;
}

const StorageContainer = styled.div
`
    display: grid;
`
;

export const Storage = (props: StorageProps) => {
    const { 
        infos, 
        modalIsVisible,
        infoLoading,
        showModal, 
        hideModal,
        getInfo
    } = props;

    console.log(infoLoading);

    useEffect(() => {
        getInfo();
        console.log('useEffect')
    }, [getInfo]);
    
    return (
        <StorageContainer>
            <span>{storageConfig.pageName}</span>
            <Input></Input>
            <div>
                {infos.length && infos[0].name}
            </div>
            <CustomButton
                type="primary" 
                onClick = {showModal}
            >
                {storageConfig.buttonText}
            </CustomButton>
            <Modal 
                title={storageConfig.modalName} 
                visible={modalIsVisible} 
                onOk={hideModal} 
                onCancel={hideModal}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </StorageContainer>
    );
};

