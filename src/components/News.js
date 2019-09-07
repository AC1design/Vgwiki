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
                    image={require('../images/Wallpaper/miho.jpg')}
            text='Miho Wallpapers'
            link='https://imgur.com/gallery/XYqEX3K'
        />

        <MediaControlCard
            image={require('../images/Wallpaper/lance.jpg')}
            text='Lance Wallpapers'
            link='https://imgur.com/gallery/mQ6EjCg'
        />

        <MediaControlCard
            image={require('../images/Wallpaper/kestrel.jpg')}
            text='Kestrel Wallpapers'
            link='https://imgur.com/gallery/fRsNCKQ'
        />
    </div>
        </div>
    </div>
)

export default News