import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../modules/header';


const NetDocContainer = styled.div
`
`
;

const NetDocHeader: React.FC = () => {
    return (
        <NetDocContainer>
            <Switch>
                <Route
                    path="/profile"
                    component={Header}
                    exact />
                <Route
                    path="/"
                    component={Header}
                    exact />
            </Switch>
        </NetDocContainer>
    );
};




export default NetDocHeader;