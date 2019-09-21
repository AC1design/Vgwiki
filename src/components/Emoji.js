import React from 'react'
import './../components//Emoji.css'

class Emojibox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="Emojis animated fadeInRight delay-0.4s">
        <div className="Emojibox" style={{alignItems: 'baseline'}} onClick={this.handleOpenModal} tabIndex="0">
            <img src={this.props.itemimg} alt={this.props.itemname} />
        </div>
        <h1 className="Emojiboxh1">{this.props.itemname}</h1>
      </div>
    )
  }
}

export default Emojibox
