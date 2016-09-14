import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        settings: store.get('settings')
    };
})
export default class ApplicationContainer extends React.Component
{
    render() {
        return <div>Hello world</div>;
    }
}