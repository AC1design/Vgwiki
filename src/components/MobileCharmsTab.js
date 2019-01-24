import React from 'react'
import Emojibox from './Emoji';

const Charms = props => (
    <div>
            <div className="Selectan">
                <h1>Emoji Charms</h1>
            </div>
            <div className='EmojiboxGroupScroll'>
        <div className='EmojiboxGroup'>

            <Emojibox
                itemimg={require('./../images/Emoji/CallMe.png')}
                itemname="Call Me"
            />
            <Emojibox
                itemimg={require('./../images/Emoji/Heart_Broken.png')}
                itemname="Broken Heart"
            />
            <Emojibox
                itemimg={require('./../images/Emoji/Heart.png')}
                itemname="Heart"
            />
            <Emojibox
                itemimg={require('./../images/Emoji/Candy_Shop.png')}
                itemname="Kiss"
            />
            <Emojibox
                itemimg={require('./../images/Emoji/Poop_Gold.png')}
                itemname="Gold Poop"
            />
            <Emojibox
                itemimg={require('./../images/Emoji/Source_Angel_Happy.png')}
                itemname=" Happy Angel"
            />
        </div>
        </div>
            </div>
)

export default Charms