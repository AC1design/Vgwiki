import React from 'react'

export default class AdComponent extends React.Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins className='adsbygoogle'
                style={{ display: 'block'}}
                data-ad-client='ca-pub-9376266750696675'
                slot='3515656105'
                data-ad-format='auto'
                enable_page_level_ads= 'true' />
        );
    }
}