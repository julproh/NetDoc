import { Input as AntdInput } from 'antd';
import styled from 'styled-components';
import {InputProps} from 'antd';

const InputLogin: React.FC<InputProps> = styled(AntdInput)
`
    width: 50%;
    margin-bottom: 20px;
    margin-left: 40%;
`
;

export default InputLogin;