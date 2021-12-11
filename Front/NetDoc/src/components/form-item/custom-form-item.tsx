import {Form} from "antd";
import {FormItemProps} from "antd";
import styled from 'styled-components';

const CustomFormItem: React.FC<FormItemProps> = styled(Form.Item)
    `
    margin-top: 16px;
`
;

export default CustomFormItem;