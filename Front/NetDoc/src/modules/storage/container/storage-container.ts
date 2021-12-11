import { Storage } from '../components'
import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { showModal, hideModal, getInfo } from '../actions/storage-actions';
import withRestService from '../../../hocs/with-rest-service';


const mapStateToProps = (state: any) => {

    return { 
        infos: state.storageReducer.infos,
        modalIsVisible: state.storageReducer.modalIsVisible,
        infoLoading: state.storageReducer.infoLoading
    };
};

const mapDispatchToProps = (
    dispatch: Dispatch,
    { restService }: any
) =>
    bindActionCreators(
        {
            showModal,
            hideModal,
            getInfo: getInfo(restService)
        },
        dispatch
    );

export default compose(
    withRestService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Storage);