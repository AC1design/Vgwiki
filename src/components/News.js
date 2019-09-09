import React from 'react'
import MediaControlCard from '../components/Wpcard';
import { Divider } from '@material-ui/core';

const News = props => (
<div>
        <div className="Selectan">
        <h1>Latest Wallpapers</h1>
        </div>
        <Divider variant='middle' style={{background: '#ffffff40', marginTop: '-10px'}}></Divider>
<div className="NewsboxGroupScroll">
            <div className="NewsboxGroup">
        <MediaControlCard
                    image={require('../images/Wallpaper/Ishtar.jpg')}
            title='Ishtar'
            link='https://imgur.com/gallery/XYqEX3K'
        />

        <MediaControlCard
            image={require('../images/Wallpaper/Flicker.jpg')}
            title='Flicker'
            link='https://imgur.com/gallery/mQ6EjCg'
        />

        <MediaControlCard
            image={require('../images/Wallpaper/Kensei.jpg')}
                    title='Kensei'
            link='https://imgur.com/gallery/fRsNCKQ'
                />
                <MediaControlCard
                    image={require('../images/Wallpaper/Miho.jpg')}
                    title='Miho'
                    link='https://imgur.com/gallery/XYqEX3K'
                />

                <MediaControlCard
                    image={require('../images/Wallpaper/Kestrel.jpg')}
                    title='Kestrel'
                    link='https://imgur.com/gallery/mQ6EjCg'
                />

                <MediaControlCard
                    image={require('../images/Wallpaper/Lance.jpg')}
                    title='Lance'
                    link='https://imgur.com/gallery/fRsNCKQ'
                />
    </div>
        </div>
    </div>
)

export default News