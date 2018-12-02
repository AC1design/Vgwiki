import React from 'react'
import './Header.css'
class Header extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    hasScrolled: false
  }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
}

handleScroll = (event) => {
  const scrollTop = window.pageYOffset

  if (scrollTop > 50) {
    this.setState({ hasScrolled: true })
  } else {
    this.setState({ hasScrolled: false })
  }
}

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <a href="/">
            <img src={require("./../images/LOGOWHITE.png")} />
          </a>
        </div>
      </div>
    )
  }
}

export default Header
