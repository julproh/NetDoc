import {Header} from "../components"
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import withRestService from '../../../hocs/with-rest-service';

const mapStateToProps = (state: any) => {
    console.log(state);
    return {
        infoLoading: state.headerReducer.infoLoading
    };
};

const mapDispatchToProps = (
    dispatch: Dispatch,
    {restService}: any
) =>
    bindActionCreators(
        {},
        dispatch
    );

export default compose(
    withRestService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Header);