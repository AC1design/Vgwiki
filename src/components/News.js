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
            image={require('../images/Wallpaper/Viola.jpg')}
                    title='Viola'
                    link='https://imgur.com/a/UK8l8WO'
                />

                <MediaControlCard
                    image={require('../images/Wallpaper/Celeste.jpg')}
                    title='Celeste'
                    link='https://imgur.com/a/r7GIsjF'
                />

                <MediaControlCard
                    image={require('../images/Wallpaper/Fortress.jpg')}
                    title='Fortress'
                    link='https://imgur.com/a/1SDlOFk'
                />

                <MediaControlCard
                    image={require('../images/Wallpaper/Phinn.jpg')}
                    title='Phinn'
                    link='https://imgur.com/a/H4qIcrS'
                />
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
    </div>
        </div>
    </div>
)

export default News