import React from 'react'
import './../components//Emoji.css'

class Emojibox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="Emojis">
        <div className="Emojibox" onClick={this.handleOpenModal} tabIndex="0">
          <div className="ImageCost">
            <img src={this.props.itemimg} alt={this.props.itemname} />
          </div>
        </div>
        <h1 className="Emojiboxh1">{this.props.itemname}</h1>
      </div>
    )
  }
}

export default Emojibox
