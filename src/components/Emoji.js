import React from 'react'
import H2 from './TalentH2Color'
import './../components//Emoji.css'
import Modal from 'react-modal';

class Emojibox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className='Emojis'>
                <div className="Emojibox" onClick={this.handleOpenModal} tabindex='0'>
                    <div className="ImageCost">
                        <img src={this.props.itemimg} />
                    </div>
                </div>
                <h1 className="Emojiboxh1">{this.props.itemname}</h1>
            </div>
        )
    }
}




export default Emojibox