import React from 'react';
import { RestServiceConsumer } from '../contexts/rest-service-context';

const withRestService = () => (Wrapped: any) => {

    const wrapper = (props: any) => {
        return (
        <RestServiceConsumer>
            {
                (restService) => {
                    return (<Wrapped {...props}
                        restService={restService}/>);
                }
            }
        </RestServiceConsumer>
        );
    }
    return wrapper;
};

export default withRestService;