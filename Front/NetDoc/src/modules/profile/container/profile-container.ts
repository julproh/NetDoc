import {Profile} from "../components"
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import {getUserInfoById, putUserInfoById} from '../actions/profile-actions';
import withRestService from '../../../hocs/with-rest-service';

const mapStateToProps = (state: any) => {
    console.log(state);
    return {
        infos: state.profileReducer.infos,
        infoLoading: state.profileReducer.infoLoading
    };
};

const mapDispatchToProps = (
    dispatch: Dispatch,
    {restService}: any
) =>
    bindActionCreators(
        {
            getUserInfoById: getUserInfoById(restService),
            putUserInfoById: putUserInfoById(restService)
        },
        dispatch
    );

export default compose(
    withRestService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Profile);