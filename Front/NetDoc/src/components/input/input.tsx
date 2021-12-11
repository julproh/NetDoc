import { Input as AntdInput } from 'antd';
import styled from 'styled-components';
import {InputProps} from 'antd';

const Input: React.FC<InputProps> = styled(AntdInput)
`
    width: 200px;  
`
;

export default Input;