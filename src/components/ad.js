import React from 'react'

export default class AdComponent extends React.Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins className='adsbygoogle'
                style={{ display: 'block' }}
                data-ad-client='ca-pub-9376266750696675'
                data-ad-format='auto' />
        );
    }
}