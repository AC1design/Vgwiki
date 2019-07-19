import React from 'react'

class AdblockDetect extends React.Component {
  state = {
    usingAdblock: false,
  }

  componentDidMount() {
    this.setState({ usingAdblock: this.fakeAdBanner.offsetHeight === 0 })
  }

  render() {
    if (this.state.usingAdblock === true) {
      return this.props.children
    }

    return (
      <div
        ref={r => (this.fakeAdBanner = r)}
        style={{
          height: '1px',
          width: '1px',
          visiblity: 'none',
          pointerEvents: 'none',
        }}
        className="adBanner"
      />
    )
  }
}

class ADBdetect extends React.Component {
  render() {
    return (
      <div className="App">
        <AdblockDetect>
          <div
            style={{
              position: 'fixed',
              background: '#1f1f21',
              height: '100%',
              width: '100%',
              zIndex: '1000',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <img
                style={{
                  width: '200px',
                }}
                src={require('../images/addetect.png')}
                alt="ad detection"
              ></img>
              <h1
                style={{
                  fontFamily: 'Antonio',
                  color: 'white',
                  marginBottom: '0px',
                }}
              >
                ADBLOCK DETECTED
              </h1>
              <p
                style={{
                  fontFamily: 'Antonio',
                  color: 'white',
                  marginTop: '16px',
                }}
              >
                Our website is made possible by displaying online advertisements
                to our visitors. Please consider supporting us by disabling your
                ad blocker.
              </p>
            </div>
          </div>
        </AdblockDetect>
      </div>
    )
  }
}

export default ADBdetect
