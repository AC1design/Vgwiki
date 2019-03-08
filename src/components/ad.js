import React from 'react'

class AdComponent extends React.Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
    render() {
        return (
            <ins className='adsbygoogle'
                style={{ display: 'block'}}
                data-ad-client="ca-pub-9376266750696675"
                data-ad-slot="9566035429"
                data-ad-format="auto"
                data-full-width-responsive="true"/>
        );
    }
}

export default AdComponent