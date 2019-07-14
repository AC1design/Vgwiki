import React from 'react'
import MediaControlCard from '../components/Wpcard';

const News = props => (
<div>
    <div className="Selectan">
        <h1 style={{ fontSize: '18px'}}>Latest Wallpapers</h1>
    </div>
<div className="CardboxGroupScroll">
    <div className="CardboxGroup">
        <MediaControlCard
            image={require('../images/Wallpaper/miho.png')}
            text='Miho Wallpapers'
            link='https://imgur.com/gallery/XYqEX3K'
        />

        <MediaControlCard
            image={require('../images/Wallpaper/lance.png')}
            text='Lance Wallpapers'
            link='https://imgur.com/gallery/mQ6EjCg'
        />

        <MediaControlCard
            image={require('../images/Wallpaper/kestrel.png')}
            text='Kestrel Wallpapers'
            link='https://imgur.com/gallery/fRsNCKQ'
        />
    </div>
        </div>
    </div>
)

export default News