import React from 'react'
import { pings } from '../constants/pings'
import Pings from './SocialPings';

const SocialPings = props => (
    <div>
<div className="Selectan">
    <h1>Social Pings</h1>{' '}
        </div>
        <div className="EmojiboxGroupScroll">
    <div className="PingboxGroup">
        {pings.map((ping, index) => (
            <Pings
                bg={require(`./../images/Ping/${ping.id}.png`)}
                namepack={ping.name}
                ping1={require(`./../images/Ping/${ping.id}-ThumbsUp-1.png`)}
                ping2={require(`./../images/Ping/${ping.id}-Happy-1.png`)}
                ping3={require(`./../images/Ping/${ping.id}-Sad-1.png`)}
                ping4={require(`./../images/Ping/${ping.id}-Cheers-1.png`)}
                ping5={require(`./../images/Ping/${ping.id}-OK-1.png`)}
                ping6={require(`./../images/Ping/${ping.id}-ThumbsUp-2.png`)}
                ping11={require(`./../images/Ping/${ping.id}-ThumbsUp-3.png`)}
                ping7={require(`./../images/Ping/${ping.id}-Happy-2.png`)}
                ping12={require(`./../images/Ping/${ping.id}-Happy-3.png`)}
                ping8={require(`./../images/Ping/${ping.id}-Sad-2.png`)}
                ping13={require(`./../images/Ping/${ping.id}-Sad-3.png`)}
                ping9={require(`./../images/Ping/${ping.id}-Cheers-2.png`)}
                ping14={require(`./../images/Ping/${ping.id}-Cheers-3.png`)}
                ping10={require(`./../images/Ping/${ping.id}-OK-2.png`)}
                ping15={require(`./../images/Ping/${ping.id}-OK-3.png`)}
                key={index}
            />
        ))}
            </div>
        </div>
    </div>
    )

export default SocialPings