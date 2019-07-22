import React from 'react'
import AdSense from 'react-adsense'

class AdComponent extends React.Component {
    state = {
        active: true
    }

    componentDidCatch(e) {
        this.setState({
            active: false
        })
    }

    componentWillReceiveProps(nextProps) {
        if (
            this.props.location &&
            (this.props.location.pathname !== nextProps.location.pathname)) {
            this.setState({
                active: false
            }, () => {
                this.setState({
                    active: true
                })
            });

        }
    }
    componentWillUnmount() {
        // IMPORTANT! Allow us to push new slot on other pages
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.length = 0;
    }

    render() {
        return (
            <div style={{ margin: "5px auto", display: "inline", textAlign: "center" }}>
                {this.state.active && <AdSense.Google client='ca-pub-9376266750696675' slot='9566035429'
                    responsive='true' />}
            </div>
        )
    }
}


export default AdComponent