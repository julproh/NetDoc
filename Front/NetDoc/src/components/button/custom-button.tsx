import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import styled from 'styled-components';

const CustomButton: React.FC<ButtonProps> = styled(Button)
`
    border-radius: 20px;
    margin-top: 6px;
    
  
`
;
export default CustomButton;