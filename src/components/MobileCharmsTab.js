import React from 'react'
import Emojibox from './Emoji'
import { charms } from '../constants/charms'

const Charms = props => (
  <div>
    <div className="Selectan">
      <h1>Emoji Charms</h1>
    </div>
    <div className="EmojiboxGroupScroll">
      <div className="EmojiboxGroup">
        {charms.map((charm, index) => (
          <Emojibox
            itemimg={require(`./../images/Emoji/${charm.image}.png`)}
            itemname={charm.name}
            key={index}
          />
        ))}
      </div>
    </div>
  </div>
)

export default Charms
