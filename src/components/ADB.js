import React, { Component } from 'react';
import AdBlockDetect from 'react-ad-block-detect';

class ADBdetect extends Component {
    render() {
        return (
            <AdBlockDetect>
                <div style={{
                    position: 'fixed',
                    background: '#1f1f21',
                    height: '100%',
                    width: '100%',
                    zIndex: '1000',
                    textAlign: 'center',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%'}}>
                    <img
                        style={{
                                width: '200px',}}
                            src={require('../images/addetect.png')}></img>
                        <h1 style={{fontFamily: 'Antonio', color: 'white', marginBottom: '0px'}}>ADBLOCK DETECTED</h1>
                        <p style={{ fontFamily: 'Antonio', color: 'white', marginTop: '16px' }}>Our website is made possible by displaying online advertisements to our visitors.
                            Please consider supporting us by disabling your ad blocker.</p>
                    </div>
                </div>
            </AdBlockDetect>
        );
    }
}

export default ADBdetect