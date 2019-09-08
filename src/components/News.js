import React from 'react'
import MediaControlCard from '../components/Wpcard';

const News = props => (
<div>
        <div className="News">
        <h1>Latest Wallpapers</h1>
    </div>
<div className="CardboxGroupScroll">
            <div className="CardboxGroup" style={{ gridTemplateColumns: 'repeat(3, 280px)'}}>
        <MediaControlCard
            image={require('../images/Wallpaper/ishtar.jpg')}
            text='Ishtar Wallpapers'
                    link='https://imgur.com/a/Qbq8m2V'
        />

        <MediaControlCard
            image={require('../images/Wallpaper/flicker.jpg')}
            text='Flicker Wallpapers'
                    link='https://imgur.com/a/6mph4Ph'
        />

        <MediaControlCard
            image={require('../images/Wallpaper/kensei.jpg')}
            text='Kensei Wallpapers'
                    link='https://imgur.com/a/2zzYZfL'
        />
    </div>
        </div>
    </div>
)

export default News