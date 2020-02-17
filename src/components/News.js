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
                    image={require('../images/Wallpaper/Ishtar.jpg')}
                    title='Ishtar'
                    link='https://imgur.com/a/Qbq8m2V'
                />
                <MediaControlCard
                    image={require('../images/Wallpaper/Miho.jpg')}
                    title='Miho'
                    link='https://imgur.com/a/XYqEX3K'
                />
                <MediaControlCard
                    image={require('../images/Wallpaper/Ringo.jpg')}
                    title='Ringo'
                    link='https://imgur.com/a/0IqxgvQ'
                />
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

            </div>
        </div>
    </div>
)

export default News