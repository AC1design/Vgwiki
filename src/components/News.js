import React from 'react'
import MediaControlCard from '../components/Wpcard';
import { Divider } from '@material-ui/core';

const News = props => (
<div>
        <div className="Selectan">
        <h1 style={{fontSize: '19px'}}>Latest Wallpapers</h1>
        </div>
        <Divider variant='middle' style={{background: '#ffffff40'}}></Divider>
<div className="NewsboxGroupScroll">
            <div className="NewsboxGroup">

                <MediaControlCard
                    image={require('../images/Wallpaper/Magnus.jpg')}
                    title='Magnus'
                    link='https://imgur.com/a/PxeitzN'
                />

                <MediaControlCard
                    image={require('../images/Wallpaper/Leo.jpg')}
                    title='Leo'
                    link='https://imgur.com/a/9ThRiga'
                />

                <MediaControlCard
                    image={require('../images/Wallpaper/Koshka.jpg')}
                    title='Koshka'
                    link='https://imgur.com/a/lwa9fC3'
                />

        <MediaControlCard
            image={require('../images/Wallpaper/Viola.jpg')}
                    title='Viola'
                    link='https://imgur.com/a/UK8l8WO'
                />

        <MediaControlCard
            image={require('../images/Wallpaper/Lyra.jpg')}
            title='Lyra'
                    link='https://imgur.com/a/iShj0Dr'
        />
        <MediaControlCard
                    image={require('../images/Wallpaper/Silvernail.jpg')}
            title='Silvernail'
                    link='https://imgur.com/a/06U5cuQ'
        />
    </div>
        </div>
    </div>
)

export default News