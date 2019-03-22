import React from 'react'
import { hats } from '../constants/hats'
import Hats from './Hats';

const HatsM = props => (
    <div>
        <div className="Selectan">
            <h1>Hats (Click for More)</h1>{' '}
        </div>
        <div className="EmojiboxGroupScroll">
            <div className="HatsboxGroup">
                {hats.map((hat, index) => (
                    <Hats
                        name={hat.name}
                        hat={require(`./../images/Hats/${hat.hat}.png`)}
                        mat1={require(`./../images/Hats/Materials/${hat.material1}.png`)}
                        qt1={hat.qt1}
                        mat2={require(`./../images/Hats/Materials/${hat.material2}.png`)}
                        qt2={hat.qt2}
                        mat3={require(`./../images/Hats/Materials/${hat.material3}.png`)}
                        qt3={hat.qt3}
                        text={hat.text}
                        point={hat.point}
                        exclusions={hat.exclusions}
                        key={index}
                    />
                ))}
            </div>
        </div>
    </div>
)

export default HatsM