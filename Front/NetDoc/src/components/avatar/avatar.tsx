import {Avatar} from "antd";
import {AvatarProps} from "antd";
import styled from 'styled-components';

const CustomAvatar: React.FC<AvatarProps> = styled(Avatar)
    `
    margin-top: 16px;
`
;

export default CustomAvatar;
