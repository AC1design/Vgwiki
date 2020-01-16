import React from 'react'
import MediaControlCard from '../components/Wpcard';
import { Divider } from '@material-ui/core';

const News = props => (
    <div>
        <div className="Selectan">
            <h1 style={{ fontSize: '19px' }}>Latest Wallpapers</h1>
        </div>
        <Divider variant='middle' style={{ background: '#ffffff40' }}></Divider>
        <div className="NewsboxGroupScroll">
            <div className="NewsboxGroup">
                <MediaControlCard
                    image={require('../images/Wallpaper/Shin.jpg')}
                    title='Shin'
                    link='https://imgur.com/a/fHrP5he'
                />
                <MediaControlCard
                    image={require('../images/Wallpaper/Warhawk.jpg')}
                    title='Warhawk'
                    link='https://imgur.com/a/66i0K0N'
                />
                <MediaControlCard
                    image={require('../images/Wallpaper/Tony.jpg')}
                    title='Tony'
                    link='https://imgur.com/a/IYHdj4j'
                />

                <MediaControlCard
                    image={require('../images/Wallpaper/Kinetic.jpg')}
                    title='Kinetic'
                    link='https://imgur.com/a/KwZTjU3'
                />
                <MediaControlCard
                    image={require('../images/Wallpaper/Karas.jpg')}
                    title='Karas'
                    link='https://imgur.com/a/3PVzS4j'
                />

                <MediaControlCard
                    image={require('../images/Wallpaper/Magnus.jpg')}
                    title='Magnus'
                    link='https://imgur.com/a/PxeitzN'
                />
            </div>
        </div>
    </div>
)

export default News